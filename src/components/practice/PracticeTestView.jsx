import { useState, useEffect, useRef } from 'react';
import { Navigate, useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Pause, Play, LayoutGrid, Send, AlertTriangle } from 'lucide-react';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { useAnnounce } from '../../hooks/useAnnounce';
import { PRACTICE_CONFIG } from '../../data/practiceConfig';
import { formatClock } from '../../utils/formatTime';
import TimerBar from './TimerBar';
import PracticeQuestionCard from './PracticeQuestionCard';
import QuestionNavigator from './QuestionNavigator';
import SubmitConfirmDialog from './SubmitConfirmDialog';

export default function PracticeTestView({ practice, courseId }) {
  const navigate = useNavigate();
  const announce = useAnnounce();
  const [prefs, setPrefs] = useLocalStorage('pourcast-practice-prefs', { version: 1, hideTimer: false });
  const [navOpen, setNavOpen] = useState(false);
  const [submitOpen, setSubmitOpen] = useState(false);
  const submittingRef = useRef(false);

  const {
    session, invalidSession, questions, currentIndex, currentQuestion,
    answers, flaggedIds, eliminatedMap, answeredCount, flaggedCount,
    status, remainingSec, expiredAttempt, pauseTest,
  } = practice;

  // Leaving the test view = pausing (the clock should never run unseen)
  useEffect(() => {
    if (!courseId) return undefined;
    return () => pauseTest(courseId);
  }, [courseId, pauseTest]);

  // Announce position as the user moves through the test
  const currentQuestionId = currentQuestion?.id;
  useEffect(() => {
    if (currentQuestionId) {
      announce(`Question ${currentIndex + 1} of ${questions.length}`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentQuestionId]);

  // Time expired while taking the test → auto-submitted by the hook
  useEffect(() => {
    if (expiredAttempt && expiredAttempt.courseId === courseId) {
      announce('Time is up. Your test has been submitted.', 'assertive');
      if (expiredAttempt.attemptId) {
        navigate(`/practice/results/${expiredAttempt.attemptId}`, { replace: true });
      } else {
        navigate('/practice', { replace: true });
      }
    }
  }, [expiredAttempt, courseId, announce, navigate]);

  if (!courseId) return <Navigate to="/practice" replace />;

  if (invalidSession) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-12">
        <div
          role="alert"
          className="border-l-4 p-4 rounded-r-lg mb-5 flex items-start gap-2"
          style={{ backgroundColor: 'var(--warning-bg)', borderColor: 'var(--warning-border)' }}
        >
          <AlertTriangle size={20} aria-hidden="true" style={{ color: 'var(--warning-text)', flexShrink: 0 }} />
          <p className="text-base font-medium" style={{ color: 'var(--warning-text)' }}>
            Your saved test referenced questions that were changed in an app update, so it can&apos;t
            be restored. Sorry about that — please start a fresh test.
          </p>
        </div>
        <button
          onClick={() => {
            practice.abandonTest(courseId);
            navigate('/practice');
          }}
          className="px-5 py-2.5 rounded-xl text-base font-bold"
          style={{ backgroundColor: 'var(--btn-accent)', color: 'var(--text-on-accent)' }}
        >
          Back to Mock Exams
        </button>
      </div>
    );
  }

  if (!session || !currentQuestion) {
    // While a just-submitted test navigates to results, the session is already
    // cleared — render nothing rather than redirecting over that navigation.
    if (submittingRef.current) return null;
    return <Navigate to="/practice" replace />;
  }

  const config = PRACTICE_CONFIG[courseId];
  const isPaused = status === 'paused';

  function handleSubmit() {
    submittingRef.current = true;
    const attemptId = practice.submitTest();
    setSubmitOpen(false);
    if (attemptId) {
      announce('Test submitted.');
      navigate(`/practice/results/${attemptId}`, { replace: true });
    } else {
      navigate('/practice', { replace: true });
    }
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-6">
      <h1 className="sr-only">{config.courseLabel} mock exam</h1>

      <TimerBar
        remainingSec={remainingSec ?? 0}
        isRunning={status === 'active'}
        hidden={Boolean(prefs.hideTimer)}
        onToggleHidden={() => setPrefs((p) => ({ ...p, hideTimer: !p.hideTimer }))}
      />

      {isPaused ? (
        <PausePanel
          remainingSec={remainingSec ?? 0}
          onResume={() => {
            practice.resumeTest(courseId);
            announce('Timer resumed.');
          }}
        />
      ) : (
        <>
          <PracticeQuestionCard
            question={currentQuestion}
            questionIndex={currentIndex}
            totalQuestions={questions.length}
            selectedIndex={answers[currentQuestion.id] ?? null}
            eliminatedIndices={eliminatedMap[currentQuestion.id] || []}
            isFlagged={flaggedIds.includes(currentQuestion.id)}
            onSelect={(i) => practice.selectAnswer(currentQuestion.id, i)}
            onToggleEliminate={(i) => {
              const wasEliminated = (eliminatedMap[currentQuestion.id] || []).includes(i);
              practice.toggleEliminate(currentQuestion.id, i);
              announce(wasEliminated
                ? `Option ${String.fromCharCode(65 + i)} restored`
                : `Option ${String.fromCharCode(65 + i)} eliminated`);
            }}
            onToggleFlag={() => {
              const wasFlagged = flaggedIds.includes(currentQuestion.id);
              practice.toggleFlag(currentQuestion.id);
              announce(wasFlagged ? 'Flag removed' : 'Question flagged for review');
            }}
          />

          <div className="flex items-center justify-between gap-3 flex-wrap mt-6">
            <div className="flex items-center gap-2">
              <button
                onClick={() => practice.goTo(currentIndex - 1)}
                disabled={currentIndex === 0}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-base font-medium border-2 hover-surface disabled:opacity-50"
                style={{ borderColor: 'var(--border-default)', color: 'var(--text-primary)' }}
              >
                <ArrowLeft size={16} aria-hidden="true" />
                Previous
              </button>
              <button
                onClick={() => practice.goTo(currentIndex + 1)}
                disabled={currentIndex >= questions.length - 1}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-base font-medium border-2 hover-surface disabled:opacity-50"
                style={{ borderColor: 'var(--border-default)', color: 'var(--text-primary)' }}
              >
                Next
                <ArrowRight size={16} aria-hidden="true" />
              </button>
            </div>

            <div className="flex items-center gap-2 flex-wrap">
              <button
                onClick={() => setNavOpen(true)}
                aria-haspopup="dialog"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-base font-medium border-2 hover-surface"
                style={{ borderColor: 'var(--border-default)', color: 'var(--text-primary)' }}
              >
                <LayoutGrid size={16} aria-hidden="true" />
                All questions ({answeredCount}/{questions.length} answered)
              </button>
              <button
                onClick={() => {
                  pauseTest(courseId);
                  announce('Test paused. The timer is stopped.');
                }}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-base font-medium border-2 hover-surface"
                style={{ borderColor: 'var(--border-default)', color: 'var(--text-primary)' }}
              >
                <Pause size={16} aria-hidden="true" />
                Pause
              </button>
              <button
                onClick={() => setSubmitOpen(true)}
                aria-haspopup="dialog"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-base font-bold"
                style={{ backgroundColor: 'var(--btn-accent)', color: 'var(--text-on-accent)' }}
              >
                <Send size={16} aria-hidden="true" />
                Submit
              </button>
            </div>
          </div>
        </>
      )}

      <QuestionNavigator
        isOpen={navOpen}
        onClose={() => setNavOpen(false)}
        questions={questions}
        answers={answers}
        flaggedIds={flaggedIds}
        currentIndex={currentIndex}
        answeredCount={answeredCount}
        onNavigate={(i) => {
          practice.goTo(i);
          setNavOpen(false);
        }}
        onRequestSubmit={() => {
          setNavOpen(false);
          setSubmitOpen(true);
        }}
      />

      <SubmitConfirmDialog
        isOpen={submitOpen}
        onClose={() => setSubmitOpen(false)}
        onSubmit={handleSubmit}
        answeredCount={answeredCount}
        totalQuestions={questions.length}
        flaggedCount={flaggedCount}
      />
    </div>
  );
}

function PausePanel({ remainingSec, onResume }) {
  return (
    <div
      className="rounded-xl border-2 p-8 text-center"
      style={{ borderColor: 'var(--border-default)', backgroundColor: 'var(--bg-surface)' }}
    >
      <h2 className="text-xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
        Test paused
      </h2>
      <p className="text-base mb-6" style={{ color: 'var(--text-secondary)' }}>
        The timer is stopped at {formatClock(remainingSec)} remaining. Your questions are hidden
        while you take a break, just like on the real exam. Your progress is saved — you can also
        leave and resume another day.
      </p>
      <div className="flex items-center justify-center gap-3 flex-wrap">
        <button
          autoFocus
          onClick={onResume}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-base font-bold"
          style={{ backgroundColor: 'var(--btn-accent)', color: 'var(--text-on-accent)' }}
        >
          <Play size={18} aria-hidden="true" />
          Resume test
        </button>
        <Link
          to="/practice"
          className="px-4 py-2.5 rounded-xl text-base font-medium border-2 no-underline hover-surface"
          style={{ borderColor: 'var(--border-default)', color: 'var(--text-primary)' }}
        >
          Save and exit
        </Link>
      </div>
    </div>
  );
}
