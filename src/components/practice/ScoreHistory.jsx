import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, XCircle, TrendingUp } from 'lucide-react';

/** Past mock exam attempts for one course, newest first. */
export default function ScoreHistory({ courseLabel, attempts, onClear }) {
  const [confirmingClear, setConfirmingClear] = useState(false);

  if (attempts.length === 0) {
    return (
      <p className="text-base" style={{ color: 'var(--text-muted)' }}>
        No {courseLabel} attempts yet. Your scores will appear here after your first mock exam.
      </p>
    );
  }

  const recent = attempts.slice(0, 5);
  const avg = Math.round(recent.reduce((sum, a) => sum + a.percentage, 0) / recent.length);

  return (
    <div>
      <h3 className="text-lg font-bold mb-2 flex items-center gap-2" style={{ color: 'var(--text-primary)' }}>
        <TrendingUp size={18} aria-hidden="true" style={{ color: 'var(--text-muted)' }} />
        Score history
      </h3>
      <p className="text-base mb-3" style={{ color: 'var(--text-muted)' }}>
        Average of last {recent.length}: <strong style={{ color: 'var(--text-primary)' }}>{avg}%</strong>
      </p>
      <div className="overflow-x-auto">
        <table className="w-full text-base" style={{ color: 'var(--text-primary)' }}>
          <caption className="sr-only">
            {courseLabel} mock exam attempts, most recent first
          </caption>
          <thead>
            <tr className="text-left" style={{ color: 'var(--text-muted)' }}>
              <th scope="col" className="py-2 pr-4 font-semibold">Date</th>
              <th scope="col" className="py-2 pr-4 font-semibold">Score</th>
              <th scope="col" className="py-2 pr-4 font-semibold">Result</th>
              <th scope="col" className="py-2 font-semibold">Review</th>
            </tr>
          </thead>
          <tbody>
            {attempts.map((attempt) => (
              <tr key={attempt.id} style={{ borderTop: '1px solid var(--border-default)' }}>
                <td className="py-2.5 pr-4">
                  {new Date(attempt.date).toLocaleDateString(undefined, {
                    year: 'numeric', month: 'short', day: 'numeric',
                  })}
                </td>
                <td className="py-2.5 pr-4">
                  {attempt.score}/{attempt.total} ({attempt.percentage}%)
                </td>
                <td className="py-2.5 pr-4">
                  {attempt.passed ? (
                    <span className="inline-flex items-center gap-1" style={{ color: 'var(--success-text)' }}>
                      <CheckCircle size={16} aria-hidden="true" style={{ color: 'var(--success-icon)' }} />
                      Pass
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1" style={{ color: 'var(--error-text)' }}>
                      <XCircle size={16} aria-hidden="true" style={{ color: 'var(--error-icon)' }} />
                      Fail
                    </span>
                  )}
                </td>
                <td className="py-2.5">
                  {attempt.detail ? (
                    <Link
                      to={`/practice/results/${attempt.id}`}
                      className="font-medium underline"
                      style={{ color: 'var(--text-accent)' }}
                    >
                      Review
                      <span className="sr-only">
                        {' '}attempt from {new Date(attempt.date).toLocaleDateString()}
                      </span>
                    </Link>
                  ) : (
                    <span style={{ color: 'var(--text-muted)' }}>—</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-base mt-2 mb-3" style={{ color: 'var(--text-muted)' }}>
        Question-by-question review is kept for your most recent attempt.
      </p>
      {confirmingClear ? (
        <span className="inline-flex items-center gap-2">
          <span className="text-base font-medium" style={{ color: 'var(--error-text)' }}>
            Delete all {courseLabel} attempts?
          </span>
          <button
            onClick={() => { onClear(); setConfirmingClear(false); }}
            className="px-3 py-1.5 rounded-lg text-base font-bold border-2"
            style={{ borderColor: 'var(--error-border)', color: 'var(--error-text)', backgroundColor: 'var(--error-bg)' }}
          >
            Yes, delete
          </button>
          <button
            onClick={() => setConfirmingClear(false)}
            className="px-3 py-1.5 rounded-lg text-base font-medium border-2 hover-surface"
            style={{ borderColor: 'var(--border-default)', color: 'var(--text-primary)' }}
          >
            Cancel
          </button>
        </span>
      ) : (
        <button
          onClick={() => setConfirmingClear(true)}
          className="text-base font-medium underline"
          style={{ color: 'var(--text-muted)' }}
        >
          Clear {courseLabel} history
        </button>
      )}
    </div>
  );
}
