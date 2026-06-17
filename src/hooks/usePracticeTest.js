import { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import { useLocalStorage } from './useLocalStorage';
import { PRACTICE_CONFIG, MAX_HISTORY_PER_COURSE } from '../data/practiceConfig';
import { drawPracticeTest, resolveEntries, gradeSession } from '../utils/practiceDraw';

const INITIAL_SESSIONS = { version: 1, sessions: { cpacc: null, was: null } };
const INITIAL_HISTORY = { version: 1, attempts: [] };
const HEARTBEAT_MS = 15000;

function sanitizeSessions(raw) {
  if (!raw || raw.version !== 1 || typeof raw.sessions !== 'object' || raw.sessions === null) {
    return INITIAL_SESSIONS;
  }
  return raw;
}

function sanitizeHistory(raw) {
  if (!raw || raw.version !== 1 || !Array.isArray(raw.attempts)) {
    return INITIAL_HISTORY;
  }
  return raw;
}

function isValidSession(s) {
  return Boolean(
    s &&
    typeof s === 'object' &&
    Array.isArray(s.entries) &&
    s.entries.length > 0 &&
    typeof s.timeLimitSec === 'number' &&
    s.answers && typeof s.answers === 'object'
  );
}

/** Elapsed seconds, computed from timestamps so interval throttling can't corrupt it. */
function elapsedSecOf(session, nowMs) {
  const base = session.elapsedBeforeSec || 0;
  if (session.status === 'active' && session.lastResumedAt) {
    return base + Math.max(0, (nowMs - session.lastResumedAt) / 1000);
  }
  return base;
}

/** Fold an 'active' session into a paused one, trusting time only up to the last heartbeat. */
function foldToPaused(session, nowMs) {
  const cutoff = Math.min(session.lastHeartbeatAt || nowMs, nowMs);
  const elapsed = (session.elapsedBeforeSec || 0) +
    (session.lastResumedAt ? Math.max(0, (cutoff - session.lastResumedAt) / 1000) : 0);
  return { ...session, status: 'paused', elapsedBeforeSec: elapsed, lastResumedAt: null };
}

/**
 * State for the full-length mock exam feature: one in-progress session per
 * course (persisted so a test can be paused and resumed across reloads),
 * a countdown timer derived from timestamps, and an attempt history.
 *
 * @param {object[]} allDomains - all domain objects (both courses)
 * @param {object} domainsByCourse - { cpacc: [...], was: [...] }
 * @param {string|null} activeCourseId - course of the session currently being
 *   taken (from the route), or null outside the test view
 * @param {function} [onComplete] - called with (courseId, score) when a test is submitted
 * @param {object} [flaggedBank] - useFlaggedBank instance; exam flags are mirrored
 *   into it so they appear on the dashboard / flagged page alongside lesson flags
 */
export function usePracticeTest(allDomains, domainsByCourse, activeCourseId, onComplete, flaggedBank) {
  const [rawSessions, setRawSessions] = useLocalStorage('pourcast-practice-session', INITIAL_SESSIONS);
  const [rawHistory, setRawHistory] = useLocalStorage('pourcast-practice-history', INITIAL_HISTORY);
  // Notices surfaced on PracticeHome (e.g. "time expired while you were away")
  const [notices, setNotices] = useState([]);
  // Render driver for the countdown display; time itself comes from timestamps
  const [, setTick] = useState(0);

  const sessionsData = sanitizeSessions(rawSessions);
  const historyData = sanitizeHistory(rawHistory);
  const onCompleteRef = useRef(onComplete);
  // Queue of flag-mirror ops to apply to the persistent bank, decided inside the
  // session's functional updater and flushed after commit (see toggleFlag).
  const pendingFlagMirror = useRef([]);
  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  const updateSession = useCallback((courseId, updater) => {
    setRawSessions((prev) => {
      const data = sanitizeSessions(prev);
      const session = data.sessions[courseId];
      const next = updater(session);
      if (next === session) return prev;
      return { ...data, sessions: { ...data.sessions, [courseId]: next } };
    });
  }, [setRawSessions]);

  /** Grade a session, record the attempt, clear the session. Returns attemptId or null. */
  const finalizeAttempt = useCallback((session, { auto = false } = {}) => {
    const { questions } = resolveEntries(session.entries, allDomains);
    if (questions.length === 0) {
      updateSession(session.courseId, () => null);
      return null;
    }
    const result = gradeSession(session, questions);
    const now = Date.now();
    const attempt = {
      id: `pt-${now}-${session.courseId}`,
      courseId: session.courseId,
      date: new Date().toISOString(),
      score: result.score,
      total: result.total,
      percentage: result.percentage,
      passed: result.passed,
      perDomain: result.perDomain,
      durationUsedSec: Math.round(Math.min(elapsedSecOf(session, now), session.timeLimitSec)),
      completed: true,
      autoSubmitted: auto,
      detail: {
        entries: session.entries,
        answers: session.answers,
        flagged: session.flagged || [],
        eliminated: session.eliminated || {},
      },
    };
    setRawHistory((prev) => {
      const data = sanitizeHistory(prev);
      // Keep full review detail only for the newest attempt per course
      const olderStripped = data.attempts.map((a) =>
        a.courseId === attempt.courseId && a.detail ? { ...a, detail: undefined } : a
      );
      const combined = [attempt, ...olderStripped];
      const perCourseCount = {};
      const capped = combined.filter((a) => {
        perCourseCount[a.courseId] = (perCourseCount[a.courseId] || 0) + 1;
        return perCourseCount[a.courseId] <= MAX_HISTORY_PER_COURSE;
      });
      return { version: 1, attempts: capped };
    });
    updateSession(session.courseId, () => null);
    onCompleteRef.current?.(session.courseId, result.score);
    return attempt.id;
  }, [allDomains, setRawHistory, updateSession]);

  // --- Crash/close recovery: an 'active' session at mount means the tab went
  // away without pausing. Trust elapsed time only up to the last heartbeat,
  // then pause — or auto-submit if the clock had already run out.
  const recoveredRef = useRef(false);
  useEffect(() => {
    if (recoveredRef.current) return;
    recoveredRef.current = true;
    const now = Date.now();
    for (const courseId of Object.keys(PRACTICE_CONFIG)) {
      const session = sessionsData.sessions[courseId];
      if (!session) continue;
      if (!isValidSession(session)) {
        updateSession(courseId, () => null);
        setNotices((n) => [...n, { courseId, type: 'invalid' }]);
        continue;
      }
      if (session.status === 'active') {
        const paused = foldToPaused(session, now);
        if (paused.elapsedBeforeSec >= session.timeLimitSec) {
          const attemptId = finalizeAttempt(paused, { auto: true });
          setNotices((n) => [...n, { courseId, type: 'expired', attemptId }]);
        } else {
          updateSession(courseId, () => paused);
        }
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // --- Active session (the one the test view is showing) ---
  const activeSession = activeCourseId ? sessionsData.sessions[activeCourseId] : null;
  const activeValid = isValidSession(activeSession);
  const activeEntries = activeValid ? activeSession.entries : null;

  const resolved = useMemo(() => {
    if (!activeEntries) return null;
    return resolveEntries(activeEntries, allDomains);
  }, [activeEntries, allDomains]);

  // Session references question ids that no longer exist (app update) — the
  // view should abandon it with an explanation rather than shrink the exam.
  const invalidSession = Boolean(resolved && resolved.missingIds.length > 0);
  const questions = resolved && !invalidSession ? resolved.questions : [];

  const status = activeValid ? activeSession.status : null;
  const remainingSec = activeValid
    ? Math.max(0, Math.round(activeSession.timeLimitSec - elapsedSecOf(activeSession, Date.now())))
    : null;

  // Display tick — only re-renders; correctness lives in the timestamps
  useEffect(() => {
    if (status !== 'active') return undefined;
    const id = setInterval(() => setTick((t) => t + 1), 1000);
    return () => clearInterval(id);
  }, [status]);

  // Heartbeat — bounds how much elapsed time a crash can claim
  useEffect(() => {
    if (status !== 'active' || !activeCourseId) return undefined;
    const id = setInterval(() => {
      updateSession(activeCourseId, (s) =>
        s && s.status === 'active' ? { ...s, lastHeartbeatAt: Date.now() } : s
      );
    }, HEARTBEAT_MS);
    return () => clearInterval(id);
  }, [status, activeCourseId, updateSession]);

  // Expiry while the view is open → auto-submit once
  const [expiredAttempt, setExpiredAttempt] = useState(null);
  const expiryFiredRef = useRef(false);
  useEffect(() => {
    if (status === 'active' && remainingSec <= 0 && !expiryFiredRef.current && activeSession) {
      expiryFiredRef.current = true;
      const attemptId = finalizeAttempt(activeSession, { auto: true });
      setExpiredAttempt({ courseId: activeSession.courseId, attemptId });
    }
    if (status !== 'active') expiryFiredRef.current = false;
  }, [status, remainingSec, activeSession, finalizeAttempt]);

  // --- Actions ---

  const startTest = useCallback((courseId) => {
    const entries = drawPracticeTest(courseId, domainsByCourse);
    if (!entries || entries.length === 0) return false;
    const now = Date.now();
    const session = {
      id: `pt-${now}`,
      courseId,
      startedAt: new Date().toISOString(),
      status: 'active',
      timeLimitSec: PRACTICE_CONFIG[courseId].timeLimitSec,
      elapsedBeforeSec: 0,
      lastResumedAt: now,
      lastHeartbeatAt: now,
      entries,
      currentIndex: 0,
      answers: {},
      flagged: [],
      eliminated: {},
    };
    updateSession(courseId, () => session);
    return true;
  }, [domainsByCourse, updateSession]);

  const resumeTest = useCallback((courseId) => {
    const now = Date.now();
    updateSession(courseId, (s) =>
      s && s.status === 'paused'
        ? { ...s, status: 'active', lastResumedAt: now, lastHeartbeatAt: now }
        : s
    );
  }, [updateSession]);

  const pauseTest = useCallback((courseId) => {
    updateSession(courseId, (s) =>
      s && s.status === 'active' ? foldToPaused(s, Date.now()) : s
    );
  }, [updateSession]);

  const abandonTest = useCallback((courseId) => {
    updateSession(courseId, () => null);
  }, [updateSession]);

  const selectAnswer = useCallback((qid, optionIndex) => {
    if (!activeCourseId) return;
    updateSession(activeCourseId, (s) => {
      if (!s) return s;
      const next = { ...s, answers: { ...s.answers, [qid]: optionIndex } };
      // Picking an option un-eliminates it
      const eliminatedForQ = s.eliminated?.[qid];
      if (eliminatedForQ?.includes(optionIndex)) {
        next.eliminated = {
          ...s.eliminated,
          [qid]: eliminatedForQ.filter((i) => i !== optionIndex),
        };
      }
      return next;
    });
  }, [activeCourseId, updateSession]);

  const toggleFlag = useCallback((qid) => {
    if (!activeCourseId) return;
    const course = activeCourseId;
    updateSession(course, (s) => {
      if (!s) return s;
      const flagged = s.flagged || [];
      const has = flagged.includes(qid);
      // Decide the bank mirror from the real previous state, in order, so rapid
      // toggles batched before a re-render stay consistent with the session.
      pendingFlagMirror.current.push({ course, qid, flagged: !has });
      return {
        ...s,
        flagged: has ? flagged.filter((id) => id !== qid) : [...flagged, qid],
      };
    });
  }, [activeCourseId, updateSession]);

  // Flush queued flag mirrors into the persistent bank after the session commits,
  // applying them in dispatch order so the bank reflects the session's final state.
  // flag/unflag are idempotent, so a duplicated op (e.g. StrictMode) is harmless.
  useEffect(() => {
    if (pendingFlagMirror.current.length === 0) return;
    const ops = pendingFlagMirror.current;
    pendingFlagMirror.current = [];
    if (!flaggedBank) return;
    for (const { course, qid, flagged } of ops) {
      if (flagged) flaggedBank.flagQuestion(course, qid);
      else flaggedBank.unflagQuestion(course, qid);
    }
  });

  const toggleEliminate = useCallback((qid, optionIndex) => {
    if (!activeCourseId) return;
    updateSession(activeCourseId, (s) => {
      if (!s) return s;
      const eliminatedForQ = s.eliminated?.[qid] || [];
      const next = { ...s, eliminated: { ...s.eliminated } };
      if (eliminatedForQ.includes(optionIndex)) {
        next.eliminated[qid] = eliminatedForQ.filter((i) => i !== optionIndex);
      } else {
        next.eliminated[qid] = [...eliminatedForQ, optionIndex];
        // Eliminating the selected option deselects it
        if (s.answers?.[qid] === optionIndex) {
          next.answers = { ...s.answers };
          delete next.answers[qid];
        }
      }
      return next;
    });
  }, [activeCourseId, updateSession]);

  const goTo = useCallback((index) => {
    if (!activeCourseId) return;
    updateSession(activeCourseId, (s) => {
      if (!s) return s;
      const clamped = Math.max(0, Math.min(index, s.entries.length - 1));
      return clamped === s.currentIndex ? s : { ...s, currentIndex: clamped };
    });
  }, [activeCourseId, updateSession]);

  const submitTest = useCallback(() => {
    if (!activeSession || !isValidSession(activeSession)) return null;
    return finalizeAttempt(activeSession, { auto: false });
  }, [activeSession, finalizeAttempt]);

  const dismissNotice = useCallback((courseId, type) => {
    setNotices((n) => n.filter((x) => !(x.courseId === courseId && x.type === type)));
  }, []);

  // --- History / summaries ---

  const getAttempt = useCallback(
    (attemptId) => historyData.attempts.find((a) => a.id === attemptId) || null,
    [historyData.attempts]
  );

  const getSessionSummary = useCallback((courseId) => {
    const s = sessionsData.sessions[courseId];
    if (!isValidSession(s)) return null;
    return {
      courseId,
      status: s.status,
      startedAt: s.startedAt,
      total: s.entries.length,
      answeredCount: Object.keys(s.answers).length,
      flaggedCount: (s.flagged || []).length,
      remainingSec: Math.max(0, Math.round(s.timeLimitSec - elapsedSecOf(s, Date.now()))),
    };
  }, [sessionsData.sessions]);

  const clearHistory = useCallback((courseId) => {
    setRawHistory((prev) => {
      const data = sanitizeHistory(prev);
      return { version: 1, attempts: data.attempts.filter((a) => a.courseId !== courseId) };
    });
  }, [setRawHistory]);

  // Derived state for the active session view
  const currentIndex = activeValid ? activeSession.currentIndex : 0;
  const answers = activeValid ? activeSession.answers : {};
  const flaggedIds = activeValid ? activeSession.flagged || [] : [];
  const eliminatedMap = activeValid ? activeSession.eliminated || {} : {};

  return {
    // active session state
    session: activeValid ? activeSession : null,
    invalidSession,
    questions,
    currentIndex,
    currentQuestion: questions[currentIndex] || null,
    answers,
    flaggedIds,
    eliminatedMap,
    answeredCount: Object.keys(answers).length,
    flaggedCount: flaggedIds.length,
    status,
    remainingSec,
    expiredAttempt,
    // actions
    startTest,
    resumeTest,
    pauseTest,
    abandonTest,
    selectAnswer,
    toggleFlag,
    toggleEliminate,
    goTo,
    submitTest,
    // home/history
    notices,
    dismissNotice,
    history: historyData.attempts,
    getAttempt,
    getSessionSummary,
    clearHistory,
  };
}
