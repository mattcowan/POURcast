export default function ProgressBar({ current, total }) {
  const percent = Math.round(((current + 1) / total) * 100);

  return (
    <div className="w-full">
      <div className="flex justify-between text-base mb-1" style={{ color: 'var(--text-muted)' }}>
        <span>Question {current + 1} of {total}</span>
        <span>{percent}%</span>
      </div>
      <div
        role="progressbar"
        aria-valuenow={current + 1}
        aria-valuemin={1}
        aria-valuemax={total}
        aria-label={`Question ${current + 1} of ${total}`}
        className="w-full rounded-full h-2.5 overflow-hidden"
        style={{ backgroundColor: 'var(--border-default)' }}
      >
        <div
          className="h-full rounded-full transition-all duration-300"
          style={{ width: `${percent}%`, backgroundColor: 'var(--text-accent)' }}
        />
      </div>
    </div>
  );
}
