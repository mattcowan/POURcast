import { Link } from 'react-router-dom';
import { ClipboardCheck, ArrowRight } from 'lucide-react';
import { PRACTICE_CONFIG } from '../../data/practiceConfig';
import { formatSpoken } from '../../utils/formatTime';

/** Dashboard pointer to the full-length mock exam for a course. */
export default function PracticeTestCard({ courseId }) {
  const config = PRACTICE_CONFIG[courseId];
  if (!config) return null;

  return (
    <Link
      to="/practice"
      className="flex items-center gap-4 rounded-xl border-2 p-4 no-underline transition-colors hover-surface"
      style={{ borderColor: 'var(--border-default)', backgroundColor: 'var(--bg-surface)' }}
    >
      <span
        className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
        style={{ backgroundColor: 'var(--bg-accent)' }}
      >
        <ClipboardCheck size={24} aria-hidden="true" style={{ color: 'var(--text-accent)' }} />
      </span>
      <span className="flex-1">
        <span className="block text-base font-bold" style={{ color: 'var(--text-primary)' }}>
          {config.courseLabel} Mock Exam
        </span>
        <span className="block text-base" style={{ color: 'var(--text-muted)' }}>
          {config.totalQuestions} questions · {formatSpoken(config.timeLimitSec)} · timed, exam conditions
        </span>
      </span>
      <ArrowRight size={20} aria-hidden="true" style={{ color: 'var(--text-muted)' }} />
    </Link>
  );
}
