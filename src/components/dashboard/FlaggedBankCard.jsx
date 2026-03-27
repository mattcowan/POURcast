import { useNavigate } from 'react-router-dom';
import { Flag, ChevronRight } from 'lucide-react';

export default function FlaggedBankCard({ courseId, count }) {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(`/flagged/${courseId}`)}
      className="w-full block p-5 rounded-2xl border-2 transition-all text-left"
      style={{
        borderColor: 'var(--info-border)',
        backgroundColor: 'var(--info-bg)',
      }}
    >
      <div className="flex items-center gap-3">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center"
          style={{ backgroundColor: 'var(--info-border)' }}
        >
          <Flag size={20} className="text-white" aria-hidden="true" />
        </div>
        <div className="flex-1">
          <h2 className="font-bold" style={{ color: 'var(--info-text)' }}>
            Flagged Questions
          </h2>
          <p className="text-base" style={{ color: 'var(--info-text)' }}>
            {count} question{count !== 1 ? 's' : ''} to review
          </p>
        </div>
        <ChevronRight size={20} style={{ color: 'var(--info-text)' }} aria-hidden="true" />
      </div>
    </button>
  );
}
