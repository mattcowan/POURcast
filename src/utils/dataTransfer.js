/**
 * Export / import of all POURcast state for cross-device sync.
 *
 * POURcast has no backend — everything lives in localStorage. This module knows
 * every persisted key and how to MERGE an imported value into the value already
 * on the device, so a user can study on one device, export a file, and import it
 * on another without losing progress made on either side.
 *
 * Nothing here touches the network; the "file" is a plain JSON download/upload.
 */

import { MAX_HISTORY_PER_COURSE } from '../data/practiceConfig';
import { getLocalDateString } from './localDate';

const ENVELOPE_TYPE = 'pourcast-backup';
const ENVELOPE_VERSION = 1;
const KEEP_RECENT_LESSONS = 10;
const KEEP_DOMAIN_HISTORY = 10;

// --- per-value merge helpers -------------------------------------------------

const num = (v) => (typeof v === 'number' && Number.isFinite(v) ? v : 0);
const maxNum = (a, b) => Math.max(num(a), num(b));

function isObject(v) {
  return v !== null && typeof v === 'object' && !Array.isArray(v);
}

/** Merge two `{ [key]: number }` maps, taking the larger value per key. */
function mergeNumberMap(local = {}, incoming = {}) {
  const out = { ...local };
  for (const k of Object.keys(incoming)) out[k] = maxNum(out[k], incoming[k]);
  return out;
}

// --- per-key merge strategies ------------------------------------------------

/** pourcast-stats: take the best of each scalar; concat & cap the history arrays. */
function mergeStats(local, incoming) {
  if (!isObject(incoming)) return local;
  if (!isObject(local)) return incoming;

  const domainStats = { ...(local.domainStats || {}) };
  for (const [id, inStat] of Object.entries(incoming.domainStats || {})) {
    const localHistory = domainStats[id]?.history || [];
    const inHistory = inStat?.history || [];
    domainStats[id] = {
      ...domainStats[id],
      ...inStat,
      history: [...localHistory, ...inHistory].slice(-KEEP_DOMAIN_HISTORY),
    };
  }

  // recentLessons: combine both logs and drop only exact-duplicate entries
  // (same date, domain, and score) so an entry shared by both devices isn't
  // counted twice; two genuine same-day attempts with different scores are
  // distinct activity and both kept. Newest first, capped.
  const seen = new Set();
  const recentLessons = [...(incoming.recentLessons || []), ...(local.recentLessons || [])]
    .filter((l) => {
      const sig = `${l.date}|${l.domainId}|${l.percentage}`;
      if (seen.has(sig)) return false;
      seen.add(sig);
      return true;
    })
    .sort((a, b) => String(b.date).localeCompare(String(a.date)))
    .slice(0, KEEP_RECENT_LESSONS);

  const lastStudyDate =
    [local.lastStudyDate, incoming.lastStudyDate].filter(Boolean).sort().pop() || null;

  return {
    ...local,
    ...incoming,
    version: local.version ?? incoming.version ?? 1,
    xp: maxNum(local.xp, incoming.xp),
    streak: maxNum(local.streak, incoming.streak),
    completedDomains: mergeNumberMap(local.completedDomains, incoming.completedDomains),
    domainStats,
    recentLessons,
    lastStudyDate,
  };
}

/** pourcast-flagged: { course: { questionId: note|null } } — union, prefer a real note. */
function mergeFlagged(local, incoming) {
  if (!isObject(incoming)) return local;
  if (!isObject(local)) return incoming;
  const out = {};
  for (const course of new Set([...Object.keys(local), ...Object.keys(incoming)])) {
    const a = local[course] || {};
    const b = incoming[course] || {};
    const merged = { ...a };
    for (const [qid, note] of Object.entries(b)) {
      merged[qid] = note != null ? note : merged[qid] ?? null;
    }
    out[course] = merged;
  }
  return out;
}

/** pourcast-missed: { course: [ids] } — union the id arrays. */
function mergeMissed(local, incoming) {
  if (!isObject(incoming)) return local;
  if (!isObject(local)) return incoming;
  const out = {};
  for (const course of new Set([...Object.keys(local), ...Object.keys(incoming)])) {
    out[course] = [...new Set([...(local[course] || []), ...(incoming[course] || [])])];
  }
  return out;
}

/**
 * Slug-flag maps ({ slug: true }) such as reviewed-topics and bookmarks — union
 * the two maps so a flag set on either device wins.
 */
function mergeSlugFlags(local, incoming) {
  if (!isObject(incoming)) return local;
  if (!isObject(local)) return incoming;
  // Union of truthy flags only: a key survives when either side has it set to
  // exactly true. This prevents a corrupted incoming `false`/null from clearing a
  // flag already set on this device, matching the "set on either side wins" intent.
  const out = {};
  for (const map of [local, incoming]) {
    for (const [slug, value] of Object.entries(map)) {
      if (value === true) out[slug] = true;
    }
  }
  return out;
}

/**
 * pourcast-practice-history: union attempts by `id` so every completed test stays
 * its own record (never blended). Re-applies the per-course cap (newest kept) and
 * the "full detail only on the newest attempt per course" rule used by the app.
 */
function mergeHistory(local, incoming) {
  const localAttempts = Array.isArray(local?.attempts) ? local.attempts : [];
  const inAttempts = Array.isArray(incoming?.attempts) ? incoming.attempts : [];

  const byId = new Map();
  for (const a of [...localAttempts, ...inAttempts]) {
    if (!a || !a.id) continue;
    const existing = byId.get(a.id);
    // Prefer the copy that still carries review detail.
    if (!existing || (!existing.detail && a.detail)) byId.set(a.id, a);
  }

  const sorted = [...byId.values()].sort((a, b) =>
    String(b.date).localeCompare(String(a.date))
  );

  const perCourseCount = {};
  const newestSeen = new Set();
  const attempts = [];
  for (const a of sorted) {
    perCourseCount[a.courseId] = (perCourseCount[a.courseId] || 0) + 1;
    if (perCourseCount[a.courseId] > MAX_HISTORY_PER_COURSE) continue;
    // Keep detail only on the first (newest) attempt of each course.
    if (a.detail && newestSeen.has(a.courseId)) {
      attempts.push({ ...a, detail: undefined });
    } else {
      attempts.push(a);
      if (a.detail) newestSeen.add(a.courseId);
    }
  }
  return { version: 1, attempts };
}

/**
 * pourcast-practice-session: one in-progress slot per course. If both sides have a
 * live session for the same course, the more-recently-active one wins (two paused
 * exams for one course can't coexist in the current model).
 */
function mergeSessions(local, incoming) {
  const localSlots = isObject(local?.sessions) ? local.sessions : {};
  const inSlots = isObject(incoming?.sessions) ? incoming.sessions : {};
  const activityOf = (s) => num(s?.lastHeartbeatAt) || Date.parse(s?.startedAt || '') || 0;
  const sessions = { ...localSlots };
  for (const [course, inSession] of Object.entries(inSlots)) {
    if (!inSession) continue;
    const current = sessions[course];
    if (!current || activityOf(inSession) > activityOf(current)) {
      sessions[course] = inSession;
    }
  }
  return { version: 1, sessions };
}

/** Scalar / device preference: the imported file simply wins. */
const takeIncoming = (_local, incoming) => incoming;

/**
 * Registry of every exportable key and its merge strategy. Keys absent here are
 * ignored on import, so older or newer backup files stay forward-compatible.
 */
const STRATEGIES = {
  'pourcast-stats': mergeStats,
  'pourcast-a11y': takeIncoming,
  'pourcast-flagged': mergeFlagged,
  'pourcast-missed': mergeMissed,
  'pourcast-reviewed-topics': mergeSlugFlags,
  'pourcast-bookmarks': mergeSlugFlags,
  'pourcast-practice-history': mergeHistory,
  'pourcast-practice-session': mergeSessions,
  'pourcast-practice-prefs': takeIncoming,
  'pourcast-course': takeIncoming,
  'pourcast-knowledge-filters': takeIncoming,
};

export const EXPORT_KEYS = Object.keys(STRATEGIES);

function readKey(key) {
  try {
    const raw = window.localStorage.getItem(key);
    return raw == null ? undefined : JSON.parse(raw);
  } catch {
    return undefined;
  }
}

/** Build the export envelope from whatever is currently in localStorage. */
export function gatherExport() {
  const data = {};
  for (const key of EXPORT_KEYS) {
    const value = readKey(key);
    if (value !== undefined) data[key] = value;
  }
  return {
    app: 'pourcast',
    type: ENVELOPE_TYPE,
    version: ENVELOPE_VERSION,
    exportedAt: new Date().toISOString(),
    data,
  };
}

/** Parse + validate an uploaded file's text. Throws an Error with a clear message. */
export function parseImport(text) {
  let parsed;
  try {
    parsed = JSON.parse(text);
  } catch {
    throw new Error('the file is not valid JSON');
  }
  if (!isObject(parsed) || parsed.type !== ENVELOPE_TYPE || !isObject(parsed.data)) {
    throw new Error('this is not a POURcast backup file');
  }
  return parsed;
}

// Device-local stamp of the last export, deliberately NOT in STRATEGIES/EXPORT_KEYS:
// each device tracks its own backup recency, and importing someone's file must not
// make this device look freshly backed up.
const LAST_EXPORT_KEY = 'pourcast-last-export';

/** Stamp today as the last time this device exported a backup. */
export function recordLastExport() {
  try {
    window.localStorage.setItem(LAST_EXPORT_KEY, getLocalDateString());
  } catch {
    // Storage full or unavailable — the nudge just stays visible.
  }
}

/**
 * Whole days since this device last exported a backup, or null if it never has
 * (or the stamp is unreadable). Both dates are local YYYY-MM-DD strings parsed
 * the same way, so the difference is always a clean day count.
 */
export function daysSinceLastExport() {
  let raw;
  try {
    raw = window.localStorage.getItem(LAST_EXPORT_KEY);
  } catch {
    return null;
  }
  if (!raw) return null;
  const then = Date.parse(raw);
  if (Number.isNaN(then)) return null;
  const today = Date.parse(getLocalDateString());
  return Math.max(0, Math.round((today - then) / 86400000));
}

/**
 * Merge an imported envelope into the device's localStorage. Returns the list of
 * keys that were merged (for the success message). Only touches recognized keys.
 */
export function mergeImport(envelope) {
  const merged = [];
  for (const [key, incoming] of Object.entries(envelope.data)) {
    const strategy = STRATEGIES[key];
    if (!strategy) continue;
    const local = readKey(key);
    const result = strategy(local, incoming);
    // A strategy can return undefined for a malformed value with no local copy;
    // JSON.stringify(undefined) is undefined, which would store the literal
    // string "undefined" and corrupt the key. Skip it instead.
    if (result === undefined) continue;
    try {
      window.localStorage.setItem(key, JSON.stringify(result));
      merged.push(key);
    } catch {
      // Storage full or unavailable — skip this key, keep going.
    }
  }
  return merged;
}
