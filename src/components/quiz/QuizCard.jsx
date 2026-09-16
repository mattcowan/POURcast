import { useRef, useEffect, useState, useId } from 'react';
import { CheckCircle, XCircle } from 'lucide-react';
import { useAccessibility } from '../../hooks/useAccessibility';
import { useAnnounce } from '../../hooks/useAnnounce';
import KeyboardShortcutsDisclosure from '../common/KeyboardShortcutsDisclosure';

/**
 * Quick-quiz question card.
 *
 * Two answer modes, chosen by the `quizAutoGrade` accessibility preference:
 *
 * - **Confirm (default).** Options are native radios inside styled labels.
 *   Picking one only marks it; the answer is graded when the user activates
 *   "Check answer" (or presses Enter on a radio). A mis-click or a stray
 *   arrow key can be corrected before anything is scored.
 * - **Instant (opt-in).** Options are buttons and the first activation
 *   grades immediately, as the quiz worked before the mode existed.
 *
 * Radios are the right semantics for "pick, then confirm" because they are
 * changeable single-select and arrow keys come from the platform. They are
 * the wrong semantics for instant grading: each arrow press would check a
 * radio and therefore submit an answer, so that mode keeps buttons.
 */
export default function QuizCard({ question, feedback, onAnswer }) {
  const headingRef = useRef(null);
  const { prefs } = useAccessibility();
  const announce = useAnnounce();
  const shortcutsEnabled = prefs.keyboardShortcuts;
  const instantMode = Boolean(prefs.quizAutoGrade);
  const radioGroupName = useId();

  // The option the user has picked but not yet checked (confirm mode only).
  // Keyed by question id so a new question starts with nothing selected
  // without an effect that resets state after render.
  const [picked, setPicked] = useState({ questionId: null, index: null });
  const pending = picked.questionId === question.id ? picked.index : null;

  useEffect(() => {
    headingRef.current?.focus();
  }, [question.id]);

  const hasAnswered = feedback !== null;

  function choose(optionIndex) {
    if (hasAnswered) return;
    if (instantMode) {
      onAnswer(optionIndex);
    } else {
      setPicked({ questionId: question.id, index: optionIndex });
    }
  }

  function checkAnswer() {
    if (hasAnswered) return;
    if (pending === null) {
      announce('Choose an answer first.');
      return;
    }
    onAnswer(pending);
  }

  function getOptionState(optionIndex) {
    if (!hasAnswered) return optionIndex === pending ? 'selected' : 'default';
    if (optionIndex === question.correct) return 'correct';
    if (optionIndex === feedback.selected && !feedback.isCorrect) return 'wrong';
    return 'dimmed';
  }

  function getOptionStyles(state) {
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
    };
    switch (state) {
      case 'correct':
        return { ...base, borderColor: 'var(--success-border)', backgroundColor: 'var(--success-bg)', color: 'var(--success-text)' };
      case 'wrong':
        return { ...base, borderColor: 'var(--error-border)', backgroundColor: 'var(--error-bg)', color: 'var(--error-text)' };
      case 'dimmed':
        return { ...base, borderColor: 'var(--border-default)', backgroundColor: 'var(--bg-surface-hover)', color: 'var(--text-muted)', opacity: 0.6 };
      case 'selected':
        return { ...base, borderColor: 'var(--text-accent)', backgroundColor: 'var(--bg-accent)', color: 'var(--text-primary)', cursor: 'pointer' };
      default:
        return { ...base, borderColor: 'var(--border-default)', backgroundColor: 'var(--bg-surface)', color: 'var(--text-primary)', cursor: 'pointer' };
    }
  }

  function getOptionSymbol(state, optionIndex) {
    if (state === 'correct') {
      return (
        <span className="w-7 h-7 flex items-center justify-center flex-shrink-0">
          <CheckCircle size={20} style={{ color: 'var(--success-icon)' }} role="img" aria-label="Correct answer" />
        </span>
      );
    }
    if (state === 'wrong') {
      return (
        <span className="w-7 h-7 flex items-center justify-center flex-shrink-0">
          <XCircle size={20} style={{ color: 'var(--error-icon)' }} role="img" aria-label="Your incorrect selection" />
        </span>
      );
    }
    const letter = String.fromCharCode(65 + optionIndex);
    const isSelected = state === 'selected';
    return (
      <span
        className="w-7 h-7 rounded-full text-base font-bold flex items-center justify-center flex-shrink-0"
        style={{
          backgroundColor: isSelected ? 'var(--btn-accent)' : 'var(--bg-surface-hover)',
          color: isSelected ? 'var(--text-on-accent)' : 'var(--text-muted)',
        }}
      >
        {letter}
      </span>
    );
  }

  function renderShortcutHint(i) {
    if (!shortcutsEnabled) return null;
    return (
      <kbd
        className="hidden sm:inline text-base px-1.5 py-0.5 rounded font-mono"
        style={{ backgroundColor: 'var(--bg-surface-hover)', color: 'var(--text-muted)', opacity: hasAnswered ? 0.4 : 1 }}
        aria-hidden="true"
      >
        {i + 1}
      </kbd>
    );
  }

  function handleKeyDown(e) {
    if (hasAnswered) return;
    if (e.target.isContentEditable || ['INPUT', 'TEXTAREA', 'SELECT'].includes(e.target.tagName) && e.target.type !== 'radio') return;

    // Enter on a radio checks the pending answer. Enter is not a printable
    // character, so this stays on regardless of the single-key preference
    // (WCAG 2.1.4 only governs letter, number, punctuation and symbol keys).
    if (!instantMode && e.key === 'Enter' && e.target.type === 'radio') {
      e.preventDefault();
      checkAnswer();
      return;
    }

    // Single-key shortcuts are opt-in (WCAG 2.1.4): in instant mode a stray
    // letter or digit submits a scored answer, so they must never fire unless
    // chosen.
    if (!shortcutsEnabled) return;
    if (e.ctrlKey || e.metaKey || e.altKey || e.shiftKey || e.repeat) return;

    const key = e.key.toLowerCase();
    if (/^[a-z]$/.test(key)) {
      const letterIndex = key.charCodeAt(0) - 97; // a=0, b=1, c=2, d=3
      if (letterIndex >= 0 && letterIndex < question.options.length) {
        e.preventDefault();
        choose(letterIndex);
        return;
      }
    }
    const num = parseInt(e.key, 10);
    if (num >= 1 && num <= question.options.length) {
      e.preventDefault();
      choose(num - 1);
    }
  }

  const shortcutItems = instantMode
    ? ['1–4 or A–D: choose an answer (grades immediately)']
    : ['1–4 or A–D: choose an answer'];
  const alwaysOnItems = instantMode
    ? []
    : ['Arrow keys: move between answers', 'Enter: check the selected answer'];

  return (
    <div onKeyDown={handleKeyDown}>
      <h2
        ref={headingRef}
        tabIndex={-1}
        className="text-xl font-bold mb-6 leading-relaxed"
        style={{ color: 'var(--text-primary)' }}
      >
        {question.question}
      </h2>

      {instantMode ? (
        <div role="group" aria-label="Answer options" className="space-y-3">
          {question.options.map((option, i) => {
            const state = getOptionState(i);
            return (
              <button
                key={i}
                type="button"
                onClick={() => choose(i)}
                disabled={hasAnswered}
                style={getOptionStyles(state)}
              >
                {getOptionSymbol(state, i)}
                <span className="flex-1">{option}</span>
                {renderShortcutHint(i)}
              </button>
            );
          })}
        </div>
      ) : (
        <fieldset className="border-0 m-0 p-0">
          <legend className="sr-only">Answer options</legend>
          <div className="space-y-3">
            {question.options.map((option, i) => {
              const state = getOptionState(i);
              const isChecked = hasAnswered ? feedback.selected === i : pending === i;
              return (
                <label key={i} className="quiz-option" style={getOptionStyles(state)}>
                  <input
                    type="radio"
                    className="sr-only"
                    name={radioGroupName}
                    value={i}
                    checked={isChecked}
                    disabled={hasAnswered}
                    onChange={() => choose(i)}
                  />
                  {getOptionSymbol(state, i)}
                  <span className="flex-1">{option}</span>
                  {renderShortcutHint(i)}
                </label>
              );
            })}
          </div>
        </fieldset>
      )}

      {!instantMode && !hasAnswered && (
        <button
          type="button"
          onClick={checkAnswer}
          aria-disabled={pending === null}
          className="mt-5 w-full py-3 px-6 font-semibold rounded-xl transition-colors"
          style={{
            backgroundColor: pending === null ? 'var(--bg-surface-hover)' : 'var(--btn-accent)',
            color: pending === null ? 'var(--text-muted)' : 'var(--text-on-accent)',
            border: '2px solid',
            borderColor: pending === null ? 'var(--border-default)' : 'var(--btn-accent)',
          }}
        >
          Check answer
        </button>
      )}

      <KeyboardShortcutsDisclosure items={shortcutItems} alwaysOnItems={alwaysOnItems} />
    </div>
  );
}
