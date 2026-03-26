import { useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Trophy, RotateCcw, Home, AlertCircle } from 'lucide-react';
import { usePageFocus } from '../../hooks/usePageFocus';
import TopicLinks from '../quiz/TopicLinks';

export default function SuccessScreen({ quiz }) {
  const headingRef = useRef(null);
  const navigate = useNavigate();

  usePageFocus(headingRef);

  const { score, totalQuestions, missedQuestions, domain, isComplete } = quiz;

  useEffect(() => {
    if (!isComplete || !domain) {
      navigate('/');
    }
  }, [isComplete, domain, navigate]);

  if (!isComplete || !domain) {
    return null;
  }

  const percentage = totalQuestions > 0 ? Math.round((score / totalQuestions) * 100) : 0;
  const passed = percentage >= 60;
  const xpGained = score * 10;

  const suggestedTopics = [
    ...new Set(missedQuestions.flatMap((q) => q.topicLinks || [])),
  ];

  function handleRetryMissed() {
    if (domain && missedQuestions.length > 0) {
      quiz.startQuiz(domain, missedQuestions);
      navigate(`/quiz/${domain.id}`);
    }
  }

  function handleRetryAll() {
    if (domain) {
      quiz.startQuiz(domain);
      navigate(`/quiz/${domain.id}`);
    }
  }

  return (
    <div className="max-w-lg mx-auto px-4 py-12 text-center">
      <div className="mb-6">
        <Trophy
          size={56}
          className="mx-auto"
          style={{ color: passed ? 'var(--xp-color)' : 'var(--text-muted)' }}
          aria-hidden="true"
        />
      </div>

      <h1
        ref={headingRef}
        tabIndex={-1}
        className="text-2xl font-bold mb-2"
        style={{ color: 'var(--text-primary)' }}
      >
        {passed ? 'Lesson Complete!' : 'Keep Going!'}
      </h1>

      <p className="text-lg mb-1" style={{ color: 'var(--text-secondary)' }}>
        You scored{' '}
        <strong style={{ color: 'var(--text-primary)' }}>
          {score}/{totalQuestions}
        </strong>{' '}
        ({percentage}%)
      </p>
      <p className="font-medium mb-6" style={{ color: 'var(--xp-color)' }}>+{xpGained} XP</p>

      {missedQuestions.length > 0 && (
        <div
          className="rounded-xl p-4 mb-6 text-left border"
          style={{
            backgroundColor: 'var(--warning-bg)',
            borderColor: 'var(--warning-border)',
          }}
        >
          <div className="flex items-center gap-2 mb-2">
            <AlertCircle size={18} style={{ color: 'var(--warning-text)' }} aria-hidden="true" />
            <h2 className="text-base font-bold" style={{ color: 'var(--warning-text)' }}>
              Questions to review ({missedQuestions.length})
            </h2>
          </div>
          <ul className="space-y-1">
            {missedQuestions.map((q) => (
              <li key={q.id} className="text-base" style={{ color: 'var(--warning-text)' }}>
                &bull; {q.question.length > 80 ? q.question.slice(0, 80) + '...' : q.question}
              </li>
            ))}
          </ul>

          {suggestedTopics.length > 0 && (
            <div className="mt-3">
              <TopicLinks slugs={suggestedTopics} label="Suggested study topics:" />
            </div>
          )}
        </div>
      )}

      <div className="space-y-3">
        {missedQuestions.length > 0 && (
          <button
            onClick={handleRetryMissed}
            className="w-full py-3 px-6 font-semibold rounded-xl transition-colors flex items-center justify-center gap-2"
            style={{
              backgroundColor: 'var(--warning-text)',
              color: 'var(--bg-primary)',
            }}
          >
            <RotateCcw size={18} aria-hidden="true" />
            Retry Missed Questions
          </button>
        )}

        <button
          onClick={handleRetryAll}
          className="w-full py-3 px-6 font-semibold rounded-xl transition-colors flex items-center justify-center gap-2"
          style={{
            backgroundColor: 'var(--btn-accent)',
            color: 'var(--text-on-accent)',
          }}
        >
          <RotateCcw size={18} aria-hidden="true" />
          Retry All Questions
        </button>

        <Link
          to="/"
          className="w-full py-3 px-6 border-2 font-semibold rounded-xl transition-colors flex items-center justify-center gap-2 no-underline"
          style={{
            backgroundColor: 'var(--bg-surface)',
            borderColor: 'var(--border-default)',
            color: 'var(--text-secondary)',
          }}
        >
          <Home size={18} aria-hidden="true" />
          Back to Dashboard
        </Link>
      </div>
    </div>
  );
}
