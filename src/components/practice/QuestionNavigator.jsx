import { useEffect, useRef, useState } from 'react';
import { Flag } from 'lucide-react';
import ModalDialog from '../common/ModalDialog';
import { FOCUS_AFTER_A11Y_TREE_MS, DIALOG_GRID_MOUNT_DELAY_MS } from '../../utils/a11yTiming';

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

  // With all 100 question buttons in the dialog at the moment it opens,
  // NVDA on Firefox announced nothing at all on entry; with 10 it read the
  // dialog name and description (QA 2026-09-17, D1 experiment). So the grid
  // mounts a beat after the dialog opens: the entry announcement happens
  // against a small tree (heading, description, Close, Submit), then focus
  // moves to the current question's button once the grid exists.
  const [gridReady, setGridReady] = useState(false);
  useEffect(() => {
    if (!isOpen) return undefined;
    const t = setTimeout(() => setGridReady(true), DIALOG_GRID_MOUNT_DELAY_MS);
    return () => {
      clearTimeout(t);
      setGridReady(false);
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen || !gridReady) return undefined;
    const t = setTimeout(() => {
      const el = currentButtonRef.current;
      if (!el) return;
      if (document.activeElement === el) el.blur();
      el.focus();
    }, FOCUS_AFTER_A11Y_TREE_MS);
    return () => clearTimeout(t);
  }, [isOpen, gridReady]);

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

      <div className="flex flex-wrap gap-2 mb-5" style={{ minHeight: gridReady ? undefined : '3rem' }}>
        {gridReady && questions.map((q, i) => {
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
