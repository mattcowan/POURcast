import { TrendingUp } from 'lucide-react';
import { getLocalDateString, getYesterdayDateString } from '../../utils/localDate';

function getScoreColor(percentage) {
  if (percentage >= 80) return 'var(--success-icon)';
  if (percentage >= 60) return 'var(--xp-color)';
  return 'var(--error-icon)';
}

function formatRelativeDate(dateStr) {
  if (dateStr === getLocalDateString()) return 'Today';
  if (dateStr === getYesterdayDateString()) return 'Yesterday';
  const date = new Date(dateStr + 'T00:00:00');
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}

export default function RecentActivity({ recentLessons, domainTitles, title, sectionLabel }) {
  if (!recentLessons || recentLessons.length === 0) return null;

  const lessons = [...recentLessons].reverse();
  const avg = Math.round(lessons.reduce((sum, l) => sum + l.percentage, 0) / lessons.length);
  const best = Math.max(...lessons.map((l) => l.percentage));

  const showHeader = title !== null;
  const headingText = title || 'Recent Activity';
  const ariaLabel = sectionLabel || headingText;

  return (
    <section aria-label={ariaLabel} className="mb-6">
      <div
        className="rounded-2xl border-2 overflow-hidden"
        style={{
          borderColor: 'var(--border-default)',
          backgroundColor: 'var(--bg-surface)',
        }}
      >
        {showHeader && (
          <div className="flex items-center gap-2 px-5 pt-4 pb-2">
            <TrendingUp size={18} style={{ color: 'var(--text-accent)' }} aria-hidden="true" />
            <h2 className="text-base font-bold" style={{ color: 'var(--text-primary)' }}>
              {headingText}
            </h2>
          </div>
        )}

        <ul className="px-5 pb-2" role="list">
          {lessons.map((lesson, i) => (
            <li
              key={i}
              className="flex items-center gap-3 py-2"
              style={{ borderTop: i > 0 ? '1px solid var(--border-default)' : 'none' }}
            >
              <span
                aria-hidden="true"
                className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                style={{ backgroundColor: getScoreColor(lesson.percentage) }}
              />
              <span
                className="flex-1 text-base truncate"
                style={{ color: 'var(--text-primary)' }}
              >
                {domainTitles[lesson.domainId] || lesson.domainId}
              </span>
              <span
                className="text-base font-semibold flex-shrink-0"
                style={{ color: 'var(--text-primary)' }}
              >
                {lesson.percentage}%
              </span>
              <span
                className="text-base flex-shrink-0 w-24 text-right"
                style={{ color: 'var(--text-muted)' }}
              >
                {formatRelativeDate(lesson.date)}
              </span>
            </li>
          ))}
        </ul>

        <div
          className="px-5 py-3"
          style={{
            borderTop: '1px solid var(--border-default)',
            color: 'var(--text-muted)',
          }}
        >
          <p className="text-base">
            Last {lessons.length} avg: <strong style={{ color: 'var(--text-primary)' }}>{avg}%</strong>
            {' '}&middot; Best: <strong style={{ color: 'var(--text-primary)' }}>{best}%</strong>
          </p>
        </div>
      </div>
    </section>
  );
}
