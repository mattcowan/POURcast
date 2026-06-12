import { useRef, useEffect } from 'react';
import { Flag, Ban } from 'lucide-react';

/**
 * Exam-mode question card: no feedback, answers can be changed, options can
 * be eliminated (struck through) as a test-taking strategy, and the question
 * can be flagged for review. Options are native radios (visually hidden
 * inputs inside styled labels) so changeable single-select semantics and
 * arrow-key behavior come from the platform.
 */
export default function PracticeQuestionCard({
  question,
  questionIndex,
  totalQuestions,
  selectedIndex,
  eliminatedIndices = [],
  isFlagged,
  onSelect,
  onToggleEliminate,
  onToggleFlag,
}) {
  const headingRef = useRef(null);

  useEffect(() => {
    headingRef.current?.focus();
  }, [question.id]);

  function handleKeyDown(e) {
    if (e.ctrlKey || e.metaKey || e.altKey) return;
    const key = e.key.toLowerCase();

    if (key === 'f') {
      onToggleFlag();
      e.preventDefault();
      return;
    }

    let idx = -1;
    if (/^[a-d]$/.test(key)) {
      idx = key.charCodeAt(0) - 97;
    } else if (/^Digit[1-4]$/.test(e.code)) {
      // e.code survives Shift (Shift+1 makes e.key '!')
      idx = parseInt(e.code.slice(5), 10) - 1;
    } else if (/^Numpad[1-4]$/.test(e.code)) {
      idx = parseInt(e.code.slice(6), 10) - 1;
    }

    if (idx >= 0 && idx < question.options.length) {
      if (e.shiftKey) {
        onToggleEliminate(idx);
      } else {
        onSelect(idx);
      }
      e.preventDefault();
    }
  }

  function getOptionStyles(isSelected, isEliminated) {
    const base = {
      width: '100%',
      textAlign: 'left',
      padding: '1rem',
      borderRadius: '0.75rem',
      border: '2px solid',
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem',
      transition: 'all 0.15s',
      cursor: 'pointer',
    };
    if (isSelected) {
      return { ...base, borderColor: 'var(--text-accent)', backgroundColor: 'var(--bg-accent)', color: 'var(--text-primary)' };
    }
    if (isEliminated) {
      return { ...base, borderColor: 'var(--border-default)', backgroundColor: 'var(--bg-surface-hover)', color: 'var(--text-muted)' };
    }
    return { ...base, borderColor: 'var(--border-default)', backgroundColor: 'var(--bg-surface)', color: 'var(--text-primary)' };
  }

  return (
    <div onKeyDown={handleKeyDown}>
      <div className="flex items-center justify-between gap-3 mb-2">
        <p className="text-base font-semibold" style={{ color: 'var(--text-muted)' }}>
          Question {questionIndex + 1} of {totalQuestions}
        </p>
        <button
          onClick={onToggleFlag}
          aria-pressed={isFlagged}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-base font-medium border-2 transition-colors"
          style={{
            borderColor: isFlagged ? 'var(--warning-border)' : 'var(--border-default)',
            backgroundColor: isFlagged ? 'var(--warning-bg)' : 'transparent',
            color: isFlagged ? 'var(--warning-text)' : 'var(--text-secondary)',
          }}
        >
          <Flag size={16} aria-hidden="true" fill={isFlagged ? 'currentColor' : 'none'} />
          {isFlagged ? 'Flagged' : 'Flag for review'}
        </button>
      </div>

      <h2
        ref={headingRef}
        tabIndex={-1}
        className="text-xl font-bold mb-6 leading-relaxed"
        style={{ color: 'var(--text-primary)' }}
      >
        {question.question}
      </h2>

      <fieldset className="border-0 m-0 p-0">
        <legend className="sr-only">
          Answer choices for question {questionIndex + 1}
        </legend>
        <div className="space-y-3">
          {question.options.map((option, i) => {
            const letter = String.fromCharCode(65 + i);
            const isSelected = selectedIndex === i;
            const isEliminated = eliminatedIndices.includes(i);
            return (
              <div key={i} className="flex items-stretch gap-2">
                <label className="practice-option flex-1 rounded-xl" style={getOptionStyles(isSelected, isEliminated)}>
                  <input
                    type="radio"
                    className="sr-only"
                    name={`practice-q-${question.id}`}
                    checked={isSelected}
                    onChange={() => onSelect(i)}
                  />
                  <span
                    className="w-7 h-7 rounded-full text-base font-bold flex items-center justify-center flex-shrink-0"
                    style={{
                      backgroundColor: isSelected ? 'var(--btn-accent)' : 'var(--bg-surface-hover)',
                      color: isSelected ? 'var(--text-on-accent)' : 'var(--text-muted)',
                    }}
                  >
                    {letter}
                  </span>
                  <span
                    className="flex-1"
                    style={isEliminated ? { textDecoration: 'line-through' } : undefined}
                  >
                    {option}
                    {isEliminated && <span className="sr-only"> (eliminated)</span>}
                  </span>
                </label>
                <button
                  onClick={() => onToggleEliminate(i)}
                  aria-pressed={isEliminated}
                  aria-label={`Eliminate option ${letter}`}
                  className="px-3 rounded-xl border-2 transition-colors hover-surface flex items-center"
                  style={{
                    borderColor: isEliminated ? 'var(--border-strong)' : 'var(--border-default)',
                    backgroundColor: isEliminated ? 'var(--bg-surface-hover)' : 'transparent',
                    color: 'var(--text-muted)',
                  }}
                >
                  <Ban size={18} aria-hidden="true" />
                </button>
              </div>
            );
          })}
        </div>
      </fieldset>

      <details className="mt-5">
        <summary
          className="text-base font-medium cursor-pointer"
          style={{ color: 'var(--text-muted)' }}
        >
          Keyboard shortcuts
        </summary>
        <ul className="mt-2 ml-4 space-y-1 list-disc text-base" style={{ color: 'var(--text-secondary)' }}>
          <li>1–4 or A–D: select an answer</li>
          <li>Shift + 1–4 (or Shift + A–D): eliminate or restore an answer</li>
          <li>F: flag or unflag this question</li>
          <li>Arrow keys: move between answer choices</li>
        </ul>
      </details>
    </div>
  );
}
