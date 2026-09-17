import { useEffect, useRef } from 'react';
import { Flag } from 'lucide-react';
import ModalDialog from '../common/ModalDialog';

/**
 * Jump-to-question dialog. Plain buttons in a wrapping grid — every state
 * (answered/unanswered/flagged/current) is in each button's accessible name,
 * with the visual treatment as a parallel channel, never the only one.
 */
export default function QuestionNavigator({
  isOpen,
  onClose,
  questions,
  answers,
  flaggedIds,
  currentIndex,
  onNavigate,
  onRequestSubmit,
  answeredCount,
}) {
  const currentButtonRef = useRef(null);

  // showModal() moves focus to the first button implicitly, and NVDA on
  // Firefox announced nothing for that move (QA 2026-09-16, D1). An explicit
  // focus() after the dialog is shown fires a real focus event inside the
  // named dialog, and landing on the current question is the better start.
  useEffect(() => {
    if (!isOpen) return undefined;
    const t = setTimeout(() => {
      const el = currentButtonRef.current;
      if (!el) return;
      // showModal() may already have put focus here; re-focusing the same
      // element fires no event, so step off it first to force a real one.
      if (document.activeElement === el) el.blur();
      el.focus();
    }, 50);
    return () => clearTimeout(t);
  }, [isOpen]);

  return (
    <ModalDialog isOpen={isOpen} onClose={onClose} labelledBy="question-navigator-title">
      <h2
        id="question-navigator-title"
        className="text-xl font-bold mb-1"
        style={{ color: 'var(--text-primary)' }}
      >
        Question navigator
      </h2>
      <p className="text-base mb-4" style={{ color: 'var(--text-secondary)' }}>
        {answeredCount} of {questions.length} answered
        {flaggedIds.length > 0 ? `, ${flaggedIds.length} flagged` : ''}.
        Filled numbers are answered; a flag marks flagged questions.
      </p>

      <div className="flex flex-wrap gap-2 mb-5">
        {questions.map((q, i) => {
          const isAnswered = answers[q.id] !== undefined;
          const isFlagged = flaggedIds.includes(q.id);
          const isCurrent = i === currentIndex;
          return (
            <button
              key={q.id}
              ref={isCurrent ? currentButtonRef : null}
              onClick={() => onNavigate(i)}
              aria-label={`Question ${i + 1}: ${isAnswered ? 'answered' : 'unanswered'}${isFlagged ? ', flagged' : ''}${isCurrent ? ', current question' : ''}`}
              aria-current={isCurrent ? 'true' : undefined}
              className="relative w-11 h-11 rounded-lg text-base font-bold flex items-center justify-center border-2 transition-colors"
              style={{
                borderColor: isCurrent ? 'var(--border-strong)' : isAnswered ? 'var(--text-accent)' : 'var(--border-default)',
                backgroundColor: isAnswered ? 'var(--bg-accent)' : 'var(--bg-surface)',
                color: isAnswered ? 'var(--text-accent)' : 'var(--text-secondary)',
                boxShadow: isCurrent ? '0 0 0 2px var(--border-strong)' : 'none',
              }}
            >
              <span aria-hidden="true">{i + 1}</span>
              {isFlagged && (
                <Flag
                  size={12}
                  aria-hidden="true"
                  fill="currentColor"
                  className="absolute -top-1.5 -right-1.5"
                  style={{ color: 'var(--warning-text)' }}
                />
              )}
            </button>
          );
        })}
      </div>

      <div className="flex items-center justify-between gap-3 flex-wrap">
        <button
          onClick={onClose}
          className="px-4 py-2 rounded-xl text-base font-medium border-2 hover-surface"
          style={{ borderColor: 'var(--border-default)', color: 'var(--text-primary)' }}
        >
          Close
        </button>
        <button
          onClick={onRequestSubmit}
          className="px-4 py-2 rounded-xl text-base font-bold"
          style={{ backgroundColor: 'var(--btn-accent)', color: 'var(--text-on-accent)' }}
        >
          Submit test…
        </button>
      </div>
    </ModalDialog>
  );
}
