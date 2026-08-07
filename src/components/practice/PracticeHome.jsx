import { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ClipboardCheck, Play, AlertTriangle, Clock, FileQuestion, Target } from 'lucide-react';
import { usePageFocus } from '../../hooks/usePageFocus';
import { useAnnounce } from '../../hooks/useAnnounce';
import { PRACTICE_CONFIG } from '../../data/practiceConfig';
import { formatClock, formatSpoken } from '../../utils/formatTime';
import ScoreHistory from './ScoreHistory';

export default function PracticeHome({ practice }) {
  const headingRef = useRef(null);
  usePageFocus(headingRef);

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h1
        ref={headingRef}
        tabIndex={-1}
        className="text-2xl font-bold mb-2 flex items-center gap-2"
        style={{ color: 'var(--text-primary)' }}
      >
        <ClipboardCheck size={28} aria-hidden="true" style={{ color: 'var(--text-accent)' }} />
        Mock Exams
      </h1>
      <p className="text-base mb-8" style={{ color: 'var(--text-secondary)' }}>
        Full-length, timed practice tests that mirror the real proctored exams: same question
        counts, same domain weighting, same time limit, and no feedback until you finish. You can
        pause anytime and resume later — your progress is saved on this device.
      </p>

      {Object.keys(PRACTICE_CONFIG).map((courseId) => (
        <CourseSection key={courseId} courseId={courseId} practice={practice} />
      ))}
    </div>
  );
}

function CourseSection({ courseId, practice }) {
  const config = PRACTICE_CONFIG[courseId];
  const summary = practice.getSessionSummary(courseId);
  const notices = practice.notices.filter((n) => n.courseId === courseId);
  const attempts = practice.history.filter((a) => a.courseId === courseId);

  return (
    <section aria-labelledby={`practice-${courseId}-heading`} className="mb-10">
      <h2
        id={`practice-${courseId}-heading`}
        className="text-xl font-bold mb-3"
        style={{ color: 'var(--text-primary)' }}
      >
        {config.courseLabel} Mock Exam
      </h2>

      {notices.map((notice) => (
        <Notice key={notice.type} notice={notice} practice={practice} />
      ))}

      <div
        className="rounded-xl border-2 p-5 mb-4"
        style={{ borderColor: 'var(--border-default)', backgroundColor: 'var(--bg-surface)' }}
      >
        <ul className="flex flex-wrap gap-x-6 gap-y-2 list-none m-0 p-0 mb-4">
          <ExamFact icon={<FileQuestion size={16} aria-hidden="true" />} text={`${config.totalQuestions} questions`} />
          <ExamFact icon={<Clock size={16} aria-hidden="true" />} text={formatSpoken(config.timeLimitSec)} />
          <ExamFact icon={<Target size={16} aria-hidden="true" />} text={`${config.passPercent}% to pass`} />
        </ul>

        {summary ? (
          <ResumeControls courseId={courseId} summary={summary} practice={practice} />
        ) : (
          <StartControls courseId={courseId} practice={practice} />
        )}
      </div>

      <ScoreHistory
        courseId={courseId}
        courseLabel={config.courseLabel}
        attempts={attempts}
        onClear={() => practice.clearHistory(courseId)}
      />
    </section>
  );
}

function ExamFact({ icon, text }) {
  return (
    <li className="flex items-center gap-1.5 text-base" style={{ color: 'var(--text-secondary)' }}>
      <span style={{ color: 'var(--text-muted)' }}>{icon}</span>
      {text}
    </li>
  );
}

function Notice({ notice, practice }) {
  const messages = {
    expired: 'Time ran out on your saved test while you were away, so it was submitted automatically.',
    invalid: 'Your saved test could not be restored (the app\'s questions were updated), so it was cleared. Please start a fresh test.',
  };
  return (
    <div
      role="alert"
      className="border-l-4 p-4 rounded-r-lg mb-4 flex items-start gap-2"
      style={{ backgroundColor: 'var(--warning-bg)', borderColor: 'var(--warning-border)' }}
    >
      <AlertTriangle size={20} aria-hidden="true" style={{ color: 'var(--warning-text)', flexShrink: 0 }} />
      <div className="flex-1">
        <p className="text-base font-medium" style={{ color: 'var(--warning-text)' }}>
          {messages[notice.type] || 'Something went wrong with your saved test.'}
        </p>
        {notice.type === 'expired' && notice.attemptId && (
          <Link
            to={`/practice/results/${notice.attemptId}`}
            className="text-base font-medium underline"
            style={{ color: 'var(--warning-text)' }}
          >
            See your results
          </Link>
        )}
      </div>
      <button
        onClick={() => practice.dismissNotice(notice.courseId, notice.type)}
        className="text-base font-medium px-2 py-1 rounded-lg hover-surface"
        style={{ color: 'var(--warning-text)' }}
      >
        Dismiss
      </button>
    </div>
  );
}

function StartControls({ courseId, practice }) {
  const navigate = useNavigate();
  const announce = useAnnounce();

  function handleStart() {
    if (practice.startTest(courseId)) {
      navigate(`/practice/test/${courseId}`);
    } else {
      announce('Could not start the test. Please reload and try again.');
    }
  }

  return (
    <button
      onClick={handleStart}
      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-base font-bold transition-colors"
      style={{ backgroundColor: 'var(--btn-accent)', color: 'var(--text-on-accent)' }}
    >
      <Play size={18} aria-hidden="true" />
      Start mock exam
    </button>
  );
}

function ResumeControls({ courseId, summary, practice }) {
  const [confirmingAbandon, setConfirmingAbandon] = useState(false);
  const announce = useAnnounce();
  const keepBtnRef = useRef(null);
  const abandonBtnRef = useRef(null);

  return (
    <div>
      <p className="text-base font-medium mb-3" style={{ color: 'var(--text-primary)' }}>
        Test in progress: {summary.answeredCount} of {summary.total} answered
        {summary.flaggedCount > 0 ? `, ${summary.flaggedCount} flagged` : ''} —{' '}
        {formatClock(summary.remainingSec)} remaining (paused)
      </p>
      <div className="flex flex-wrap items-center gap-3">
        <Link
          to={`/practice/test/${courseId}`}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-base font-bold no-underline transition-colors"
          style={{ backgroundColor: 'var(--btn-accent)', color: 'var(--text-on-accent)' }}
        >
          <Play size={18} aria-hidden="true" />
          Resume test
        </Link>
        {confirmingAbandon ? (
          <span className="inline-flex items-center gap-2">
            <span className="text-base font-medium" style={{ color: 'var(--error-text)' }}>
              Abandon this test? Your answers will be lost.
            </span>
            <button
              onClick={() => {
                practice.abandonTest(courseId);
                setConfirmingAbandon(false);
                announce('Test abandoned');
              }}
              className="px-3 py-1.5 rounded-lg text-base font-bold border-2"
              style={{ borderColor: 'var(--error-border)', color: 'var(--error-text)', backgroundColor: 'var(--error-bg)' }}
            >
              Yes, abandon
            </button>
            <button
              ref={keepBtnRef}
              onClick={() => {
                setConfirmingAbandon(false);
                setTimeout(() => abandonBtnRef.current?.focus(), 0);
              }}
              className="px-3 py-1.5 rounded-lg text-base font-medium border-2 hover-surface"
              style={{ borderColor: 'var(--border-default)', color: 'var(--text-primary)' }}
            >
              Keep test
            </button>
          </span>
        ) : (
          <button
            ref={abandonBtnRef}
            onClick={() => {
              setConfirmingAbandon(true);
              // Move focus to the safe choice so the confirmation isn't missed
              setTimeout(() => keepBtnRef.current?.focus(), 0);
            }}
            className="px-4 py-2.5 rounded-xl text-base font-medium border-2 hover-surface"
            style={{ borderColor: 'var(--border-default)', color: 'var(--text-secondary)' }}
          >
            Abandon test
          </button>
        )}
      </div>
    </div>
  );
}
