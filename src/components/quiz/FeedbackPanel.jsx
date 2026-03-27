import { useState, useRef, useEffect, useMemo } from 'react';
import { CheckCircle, XCircle, ChevronDown, ChevronUp, Flag } from 'lucide-react';
import { getEncouragement } from '../../utils/encouragement';
import TopicLinks from './TopicLinks';

export default function FeedbackPanel({ question, feedback, onNext, isFlagged, onToggleFlag }) {
  const [showExplanation, setShowExplanation] = useState(false);
  const [showNoteInput, setShowNoteInput] = useState(false);
  const [noteText, setNoteText] = useState('');
  const noteInputRef = useRef(null);
  const panelRef = useRef(null);
  const { isCorrect, selected } = feedback;

  useEffect(() => {
    panelRef.current?.focus();
  }, []);

  const encouragement = useMemo(() => isCorrect ? getEncouragement() : null, [isCorrect]);
  const allTopicLinks = question.topicLinks || [];

  return (
    <div
      ref={panelRef}
      tabIndex={-1}
      role="region"
      aria-label={isCorrect ? 'Correct answer feedback' : 'Incorrect answer feedback'}
      className="rounded-xl p-5 mt-4 border-2"
      style={{
        backgroundColor: isCorrect ? 'var(--success-bg)' : 'var(--error-bg)',
        borderColor: isCorrect ? 'var(--success-border)' : 'var(--error-border)',
      }}
    >
      <div className="flex items-start gap-3 mb-3">
        {isCorrect ? (
          <CheckCircle size={28} style={{ color: 'var(--success-icon)', flexShrink: 0, marginTop: '2px' }} aria-hidden="true" />
        ) : (
          <XCircle size={28} style={{ color: 'var(--error-icon)', flexShrink: 0, marginTop: '2px' }} aria-hidden="true" />
        )}
        <div>
          <h3
            className="text-lg font-bold"
            style={{ color: isCorrect ? 'var(--success-text)' : 'var(--error-text)' }}
          >
            {isCorrect ? encouragement : 'Not quite right'}
          </h3>

          {!isCorrect && (
            <div className="mt-2 space-y-2">
              {question.wrongExplanations?.[selected] && (
                <p className="text-base" style={{ color: 'var(--error-text)' }}>
                  <strong>You selected: &ldquo;{question.options[selected]}&rdquo;</strong>
                  {' '}&mdash; {question.wrongExplanations[selected]}
                </p>
              )}
              <p className="text-base" style={{ color: 'var(--text-primary)' }}>
                <strong>The correct answer is: &ldquo;{question.options[question.correct]}&rdquo;</strong>
                {' '}&mdash; {question.explanation}
              </p>
            </div>
          )}

          {isCorrect && (
            <div className="mt-2">
              <button
                onClick={() => setShowExplanation(!showExplanation)}
                aria-expanded={showExplanation}
                className="flex items-center gap-1 text-base font-medium transition-colors bg-transparent border-0 cursor-pointer p-0"
                style={{ color: 'var(--success-text)' }}
              >
                {showExplanation ? (
                  <ChevronUp size={16} aria-hidden="true" />
                ) : (
                  <ChevronDown size={16} aria-hidden="true" />
                )}
                {showExplanation ? 'Hide explanation' : 'Review the explanation'}
              </button>
              {showExplanation && (
                <p className="text-base mt-2" style={{ color: 'var(--text-primary)' }}>
                  {question.explanation}
                </p>
              )}
            </div>
          )}
        </div>
      </div>

      <TopicLinks
        slugs={allTopicLinks}
        label={isCorrect ? 'Dive deeper:' : 'Learn more about these topics:'}
      />

      {onToggleFlag && (
        <div className="mt-4">
          {!isFlagged && !showNoteInput && (
            <button
              onClick={() => {
                setShowNoteInput(true);
                setTimeout(() => noteInputRef.current?.focus(), 0);
              }}
              aria-pressed={false}
              className="flex items-center gap-2 py-2 px-3 rounded-lg text-base font-medium transition-colors border-2 bg-transparent cursor-pointer"
              style={{
                borderColor: 'var(--info-border)',
                color: 'var(--info-text)',
              }}
            >
              <Flag size={16} aria-hidden="true" />
              Flag this question
            </button>
          )}

          {!isFlagged && showNoteInput && (
            <div className="flex flex-col gap-2">
              <label
                htmlFor="flag-note"
                className="text-base font-medium"
                style={{ color: 'var(--info-text)' }}
              >
                Why are you flagging this? (optional)
              </label>
              <input
                ref={noteInputRef}
                id="flag-note"
                type="text"
                maxLength={100}
                value={noteText}
                onChange={(e) => setNoteText(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    onToggleFlag(noteText.trim() || null);
                    setShowNoteInput(false);
                    setNoteText('');
                  }
                }}
                placeholder="e.g., Seems like WAS material"
                className="py-2 px-3 rounded-lg text-base border-2"
                style={{
                  borderColor: 'var(--info-border)',
                  backgroundColor: 'var(--bg-surface)',
                  color: 'var(--text-primary)',
                }}
              />
              <div className="flex gap-2">
                <button
                  onClick={() => {
                    onToggleFlag(noteText.trim() || null);
                    setShowNoteInput(false);
                    setNoteText('');
                  }}
                  className="flex items-center gap-2 py-2 px-3 rounded-lg text-base font-medium transition-colors border-0 cursor-pointer"
                  style={{
                    backgroundColor: 'var(--info-border)',
                    color: '#fff',
                  }}
                >
                  <Flag size={16} aria-hidden="true" />
                  Flag
                </button>
                <button
                  onClick={() => {
                    setShowNoteInput(false);
                    setNoteText('');
                  }}
                  className="py-2 px-3 rounded-lg text-base font-medium transition-colors border-2 bg-transparent cursor-pointer"
                  style={{
                    borderColor: 'var(--border-default)',
                    color: 'var(--text-muted)',
                  }}
                >
                  Cancel
                </button>
              </div>
            </div>
          )}

          {isFlagged && (
            <button
              onClick={() => onToggleFlag()}
              aria-pressed={true}
              className="flex items-center gap-2 py-2 px-3 rounded-lg text-base font-medium transition-colors border-2 cursor-pointer"
              style={{
                borderColor: 'var(--info-border)',
                backgroundColor: 'var(--info-bg)',
                color: 'var(--info-text)',
              }}
            >
              <Flag size={16} aria-hidden="true" fill="currentColor" />
              Flagged
            </button>
          )}
        </div>
      )}

      <button
        onClick={onNext}
        className="mt-4 w-full py-3 px-6 font-semibold rounded-xl transition-colors"
        style={{
          backgroundColor: 'var(--btn-accent)',
          color: 'var(--text-on-accent)',
        }}
      >
        Continue
      </button>
    </div>
  );
}
