import { useState, useRef, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Trophy, AlertCircle, CheckCircle, XCircle, Ban, Flag, Clock } from 'lucide-react';
import { usePageFocus } from '../../hooks/usePageFocus';
import { PRACTICE_CONFIG } from '../../data/practiceConfig';
import { resolveEntries } from '../../utils/practiceDraw';
import { formatSpoken } from '../../utils/formatTime';
import TopicLinks from '../quiz/TopicLinks';

const FILTERS = [
  { key: 'all', label: 'All' },
  { key: 'incorrect', label: 'Incorrect' },
  { key: 'unanswered', label: 'Unanswered' },
  { key: 'flagged', label: 'Flagged' },
];

export default function PracticeResults({ practice, allDomains }) {
  const { attemptId } = useParams();
  const headingRef = useRef(null);
  usePageFocus(headingRef);
  const [filter, setFilter] = useState('all');

  const attempt = practice.getAttempt(attemptId);

  const reviewItems = useMemo(() => {
    if (!attempt?.detail) return null;
    const { entries, answers, flagged, eliminated } = attempt.detail;
    const { questions } = resolveEntries(entries, allDomains);
    const byId = new Map(questions.map((q) => [q.id, q]));
    return entries.map((entry, i) => {
      const question = byId.get(entry.qid) || null;
      const selected = answers?.[entry.qid];
      return {
        number: i + 1,
        question,
        selected: selected === undefined ? null : selected,
        isCorrect: question ? selected === question.correct : false,
        isFlagged: (flagged || []).includes(entry.qid),
        eliminatedIndices: eliminated?.[entry.qid] || [],
      };
    });
  }, [attempt, allDomains]);

  if (!attempt) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-bold mb-3" style={{ color: 'var(--text-primary)' }}>
          Attempt not found
        </h1>
        <p className="text-base mb-6" style={{ color: 'var(--text-secondary)' }}>
          This attempt may have been cleared from your history.
        </p>
        <Link
          to="/practice"
          className="font-medium underline text-base"
          style={{ color: 'var(--text-accent)' }}
        >
          Back to Mock Exams
        </Link>
      </div>
    );
  }

  const config = PRACTICE_CONFIG[attempt.courseId];
  const domainTitles = new Map(allDomains.map((d) => [d.id, d.title]));

  const counts = reviewItems
    ? {
        all: reviewItems.length,
        incorrect: reviewItems.filter((r) => !r.isCorrect && r.selected !== null).length,
        unanswered: reviewItems.filter((r) => r.selected === null).length,
        flagged: reviewItems.filter((r) => r.isFlagged).length,
      }
    : null;

  const visibleItems = reviewItems
    ? reviewItems.filter((r) => {
        if (filter === 'incorrect') return !r.isCorrect && r.selected !== null;
        if (filter === 'unanswered') return r.selected === null;
        if (filter === 'flagged') return r.isFlagged;
        return true;
      })
    : null;

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        {attempt.passed ? (
          <Trophy size={48} aria-hidden="true" className="mx-auto mb-3" style={{ color: 'var(--success-icon)' }} />
        ) : (
          <AlertCircle size={48} aria-hidden="true" className="mx-auto mb-3" style={{ color: 'var(--warning-text)' }} />
        )}
        <h1
          ref={headingRef}
          tabIndex={-1}
          className="text-2xl font-bold mb-2"
          style={{ color: 'var(--text-primary)' }}
        >
          {attempt.passed ? 'Passed' : 'Not passed'} — {attempt.score}/{attempt.total} ({attempt.percentage}%)
        </h1>
        <p className="text-base" style={{ color: 'var(--text-secondary)' }}>
          The real {config?.courseLabel || attempt.courseId.toUpperCase()} exam requires {config?.passPercent}% to pass.
          {attempt.passed
            ? ' Excellent work — keep this up and you\'re ready for the real thing.'
            : ' Keep going — review the questions below and hit the Study Shelf topics that tripped you up.'}
        </p>
        <p className="text-base mt-2 inline-flex items-center gap-1.5" style={{ color: 'var(--text-muted)' }}>
          <Clock size={16} aria-hidden="true" />
          Time used: {formatSpoken(attempt.durationUsedSec)}
          {attempt.autoSubmitted && ' (time ran out — submitted automatically)'}
        </p>
      </div>

      <h2 className="text-xl font-bold mb-3" style={{ color: 'var(--text-primary)' }}>
        Results by domain
      </h2>
      <div className="overflow-x-auto mb-8">
        <table className="w-full text-base" style={{ color: 'var(--text-primary)' }}>
          <caption className="sr-only">Score breakdown by exam domain</caption>
          <thead>
            <tr className="text-left" style={{ color: 'var(--text-muted)' }}>
              <th scope="col" className="py-2 pr-4 font-semibold">Domain</th>
              <th scope="col" className="py-2 pr-4 font-semibold">Correct</th>
              <th scope="col" className="py-2 font-semibold">Percent</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(attempt.perDomain || {}).map(([domainId, d]) => (
              <tr key={domainId} style={{ borderTop: '1px solid var(--border-default)' }}>
                <td className="py-2.5 pr-4">{domainTitles.get(domainId) || domainId}</td>
                <td className="py-2.5 pr-4">{d.correct}/{d.total}</td>
                <td className="py-2.5">{d.total > 0 ? Math.round((d.correct / d.total) * 100) : 0}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {reviewItems ? (
        <section aria-labelledby="review-heading">
          <h2 id="review-heading" className="text-xl font-bold mb-3" style={{ color: 'var(--text-primary)' }}>
            Review your answers
          </h2>
          <div className="flex flex-wrap gap-2 mb-5" role="group" aria-label="Filter reviewed questions">
            {FILTERS.map((f) => (
              <button
                key={f.key}
                onClick={() => setFilter(f.key)}
                aria-pressed={filter === f.key}
                className="px-3 py-1.5 rounded-full text-base font-medium border-2 transition-colors"
                style={{
                  borderColor: filter === f.key ? 'var(--text-accent)' : 'var(--border-default)',
                  backgroundColor: filter === f.key ? 'var(--bg-accent)' : 'transparent',
                  color: filter === f.key ? 'var(--text-accent)' : 'var(--text-secondary)',
                }}
              >
                {f.label} ({counts[f.key]})
              </button>
            ))}
          </div>

          {visibleItems.length === 0 ? (
            <p className="text-base" style={{ color: 'var(--text-muted)' }}>
              No questions match this filter.
            </p>
          ) : (
            <div className="space-y-6">
              {visibleItems.map((item) => (
                <ReviewQuestionItem key={item.number} item={item} />
              ))}
            </div>
          )}
        </section>
      ) : (
        <p className="text-base" style={{ color: 'var(--text-muted)' }}>
          Question-by-question review is only kept for your most recent attempt of each exam.
        </p>
      )}

      <div className="mt-10 text-center">
        <Link
          to="/practice"
          className="font-medium underline text-base"
          style={{ color: 'var(--text-accent)' }}
        >
          Back to Mock Exams
        </Link>
      </div>
    </div>
  );
}

function ReviewQuestionItem({ item }) {
  const { number, question, selected, isCorrect, isFlagged, eliminatedIndices } = item;

  if (!question) {
    return (
      <div
        className="rounded-xl border-2 p-4"
        style={{ borderColor: 'var(--border-default)', backgroundColor: 'var(--bg-surface)' }}
      >
        <p className="text-base" style={{ color: 'var(--text-muted)' }}>
          Question {number} is no longer available (it was changed in an app update).
        </p>
      </div>
    );
  }

  const statusLabel = selected === null ? 'Unanswered' : isCorrect ? 'Correct' : 'Incorrect';
  const statusColor = selected === null
    ? 'var(--text-muted)'
    : isCorrect ? 'var(--success-text)' : 'var(--error-text)';

  return (
    <div
      className="rounded-xl border-2 p-5"
      style={{ borderColor: 'var(--border-default)', backgroundColor: 'var(--bg-surface)' }}
    >
      <div className="flex items-center gap-2 mb-2 flex-wrap">
        <h3 className="text-base font-bold m-0" style={{ color: statusColor }}>
          Question {number} — {statusLabel}
        </h3>
        {isFlagged && (
          <span
            className="inline-flex items-center gap-1 text-base font-medium px-2 py-0.5 rounded-full"
            style={{ backgroundColor: 'var(--warning-bg)', color: 'var(--warning-text)' }}
          >
            <Flag size={12} aria-hidden="true" fill="currentColor" />
            Flagged
          </span>
        )}
      </div>

      <p className="text-base font-semibold mb-3 leading-relaxed" style={{ color: 'var(--text-primary)' }}>
        {question.question}
      </p>

      <ul className="space-y-2 list-none m-0 p-0 mb-4">
        {question.options.map((option, i) => {
          const isCorrectOption = i === question.correct;
          const isYourPick = i === selected;
          const wasEliminated = eliminatedIndices.includes(i);
          return (
            <li
              key={i}
              className="flex items-start gap-2 text-base rounded-lg px-3 py-2"
              style={{
                backgroundColor: isCorrectOption
                  ? 'var(--success-bg)'
                  : isYourPick ? 'var(--error-bg)' : 'transparent',
                color: isCorrectOption
                  ? 'var(--success-text)'
                  : isYourPick ? 'var(--error-text)' : 'var(--text-secondary)',
              }}
            >
              {isCorrectOption ? (
                <CheckCircle size={18} aria-hidden="true" className="flex-shrink-0 mt-0.5" style={{ color: 'var(--success-icon)' }} />
              ) : isYourPick ? (
                <XCircle size={18} aria-hidden="true" className="flex-shrink-0 mt-0.5" style={{ color: 'var(--error-icon)' }} />
              ) : wasEliminated ? (
                <Ban size={18} aria-hidden="true" className="flex-shrink-0 mt-0.5" style={{ color: 'var(--text-muted)' }} />
              ) : (
                <span className="w-[18px] flex-shrink-0" aria-hidden="true" />
              )}
              <span style={wasEliminated && !isCorrectOption && !isYourPick ? { textDecoration: 'line-through' } : undefined}>
                <strong>{String.fromCharCode(65 + i)}.</strong> {option}
                {isCorrectOption && <span className="font-semibold"> — correct answer</span>}
                {isYourPick && !isCorrectOption && <span className="font-semibold"> — your answer</span>}
                {isYourPick && isCorrectOption && <span className="font-semibold"> (your answer)</span>}
                {wasEliminated && <span className="sr-only"> (you eliminated this option)</span>}
              </span>
            </li>
          );
        })}
      </ul>

      <p className="text-base leading-relaxed mb-2" style={{ color: 'var(--text-secondary)' }}>
        <strong style={{ color: 'var(--text-primary)' }}>Why:</strong> {question.explanation}
      </p>
      {selected !== null && !isCorrect && question.wrongExplanations?.[selected] && (
        <p className="text-base leading-relaxed mb-2" style={{ color: 'var(--text-secondary)' }}>
          <strong style={{ color: 'var(--text-primary)' }}>About your answer:</strong>{' '}
          {question.wrongExplanations[selected]}
        </p>
      )}
      <TopicLinks slugs={question.topicLinks} />
    </div>
  );
}
