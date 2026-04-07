import { useRef, useEffect } from 'react';
import { CheckCircle, XCircle } from 'lucide-react';

export default function QuizCard({ question, questionIndex, totalQuestions, feedback, onAnswer }) {
  const headingRef = useRef(null);

  useEffect(() => {
    headingRef.current?.focus();
  }, [question.id]);

  const hasAnswered = feedback !== null;

  function getOptionState(optionIndex) {
    if (!hasAnswered) return 'default';
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
      default:
        return { ...base, borderColor: 'var(--border-default)', backgroundColor: 'var(--bg-surface)', color: 'var(--text-primary)', cursor: 'pointer' };
    }
  }

  function getOptionSymbol(state, optionIndex) {
    if (state === 'correct') {
      return (
        <span className="w-7 h-7 flex items-center justify-center flex-shrink-0">
          <CheckCircle size={20} style={{ color: 'var(--success-icon)' }} aria-label="Correct answer" />
        </span>
      );
    }
    if (state === 'wrong') {
      return (
        <span className="w-7 h-7 flex items-center justify-center flex-shrink-0">
          <XCircle size={20} style={{ color: 'var(--error-icon)' }} aria-label="Your incorrect selection" />
        </span>
      );
    }
    const letter = String.fromCharCode(65 + optionIndex);
    return (
      <span
        className="w-7 h-7 rounded-full text-base font-bold flex items-center justify-center flex-shrink-0"
        style={{ backgroundColor: 'var(--bg-surface-hover)', color: 'var(--text-muted)' }}
      >
        {letter}
      </span>
    );
  }

  function handleKeyDown(e) {
    if (hasAnswered || e.ctrlKey || e.metaKey || e.altKey) return;

    const key = e.key.toLowerCase();
    if (/^[a-z]$/.test(key)) {
      const letterIndex = key.charCodeAt(0) - 97; // a=0, b=1, c=2, d=3
      if (letterIndex >= 0 && letterIndex < question.options.length) {
        onAnswer(letterIndex);
        return;
      }
    }
    const num = parseInt(e.key, 10);
    if (num >= 1 && num <= question.options.length) {
      onAnswer(num - 1);
    }
  }

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

      <div role="group" aria-label="Answer options" className="space-y-3">
        {question.options.map((option, i) => {
          const state = getOptionState(i);
          return (
            <button
              key={i}
              onClick={() => !hasAnswered && onAnswer(i)}
              disabled={hasAnswered}
              aria-disabled={hasAnswered}
              style={getOptionStyles(state)}
            >
              {getOptionSymbol(state, i)}
              <span className="flex-1">{option}</span>
              <kbd
                className="hidden sm:inline text-base px-1.5 py-0.5 rounded font-mono"
                style={{ backgroundColor: 'var(--bg-surface-hover)', color: 'var(--text-muted)', opacity: hasAnswered ? 0.4 : 1 }}
                aria-hidden="true"
              >
                {i + 1}
              </kbd>
            </button>
          );
        })}
      </div>
    </div>
  );
}
