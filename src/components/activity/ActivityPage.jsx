import { useRef, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, TrendingUp } from 'lucide-react';
import { usePageFocus } from '../../hooks/usePageFocus';
import RecentActivity from '../dashboard/RecentActivity';

const COURSE_LABELS = {
  cpacc: 'CPACC',
  was: 'WAS',
};

export default function ActivityPage({ stats, allDomains }) {
  const navigate = useNavigate();
  const headingRef = useRef(null);

  usePageFocus(headingRef);

  const domainTitles = useMemo(() => {
    const map = {};
    for (const d of allDomains) map[d.id] = d.title;
    return map;
  }, [allDomains]);

  const recentLessons = stats.recentLessons || [];
  const lessonsByCourse = {};
  for (const lesson of recentLessons) {
    const key = lesson.courseId || 'cpacc';
    if (!lessonsByCourse[key]) lessonsByCourse[key] = [];
    lessonsByCourse[key].push(lesson);
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-6">
      <div className="flex items-center gap-4 mb-6">
        <button
          onClick={() => navigate('/')}
          aria-label="Back to dashboard"
          className="p-2 rounded-lg transition-colors"
          style={{ color: 'var(--text-muted)' }}
        >
          <ArrowLeft size={20} aria-hidden="true" />
        </button>
        <h1
          ref={headingRef}
          tabIndex={-1}
          className="text-2xl font-bold flex-1"
          style={{ color: 'var(--text-primary)' }}
        >
          Recent Activity
        </h1>
      </div>

      {recentLessons.length === 0 ? (
        <div className="text-center py-12">
          <TrendingUp size={48} style={{ color: 'var(--text-muted)', margin: '0 auto 16px' }} aria-hidden="true" />
          <p className="text-lg" style={{ color: 'var(--text-muted)' }}>
            No recent activity yet. Complete a practice set to see your progress here.
          </p>
          <button
            onClick={() => navigate('/')}
            className="mt-4 py-2 px-4 rounded-lg font-medium transition-colors border-0 cursor-pointer"
            style={{
              backgroundColor: 'var(--btn-accent)',
              color: 'var(--text-on-accent)',
            }}
          >
            Back to Dashboard
          </button>
        </div>
      ) : (
        <div className="space-y-6">
          {Object.entries(COURSE_LABELS).map(([courseId, label]) => {
            const lessons = lessonsByCourse[courseId];
            if (!lessons || lessons.length === 0) return null;
            return (
              <div key={courseId}>
                <h2
                  className="text-lg font-semibold mb-3"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  {label}
                </h2>
                <RecentActivity
                  recentLessons={lessons}
                  domainTitles={domainTitles}
                />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
