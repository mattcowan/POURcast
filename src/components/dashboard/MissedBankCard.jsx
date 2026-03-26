import { useNavigate } from 'react-router-dom';
import { RotateCcw, ChevronRight } from 'lucide-react';

export default function MissedBankCard({ courseId, count, onStartReview }) {
  const navigate = useNavigate();

  function handleClick() {
    onStartReview(courseId);
    navigate(`/quiz/review-${courseId}`);
  }

  return (
    <button
      onClick={handleClick}
      className="w-full block p-5 rounded-2xl border-2 transition-all text-left"
      style={{
        borderColor: 'var(--warning-border)',
        backgroundColor: 'var(--warning-bg)',
      }}
    >
      <div className="flex items-center gap-3">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center"
          style={{ backgroundColor: 'var(--warning-border)' }}
        >
          <RotateCcw size={20} className="text-white" aria-hidden="true" />
        </div>
        <div className="flex-1">
          <h3 className="font-bold" style={{ color: 'var(--warning-text)' }}>
            Missed Questions
          </h3>
          <p className="text-base" style={{ color: 'var(--warning-text)' }}>
            {count} question{count !== 1 ? 's' : ''} to review
          </p>
        </div>
        <ChevronRight size={20} style={{ color: 'var(--warning-text)' }} aria-hidden="true" />
      </div>
    </button>
  );
}
