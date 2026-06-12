import ModalDialog from '../common/ModalDialog';

export default function SubmitConfirmDialog({ isOpen, onClose, onSubmit, answeredCount, totalQuestions, flaggedCount }) {
  const unanswered = totalQuestions - answeredCount;

  return (
    <ModalDialog isOpen={isOpen} onClose={onClose} labelledBy="submit-confirm-title">
      <h2
        id="submit-confirm-title"
        className="text-xl font-bold mb-2"
        style={{ color: 'var(--text-primary)' }}
      >
        Submit test?
      </h2>
      <p className="text-base mb-5" style={{ color: 'var(--text-secondary)' }}>
        You have answered {answeredCount} of {totalQuestions} questions.
        {unanswered > 0 && ` ${unanswered} unanswered question${unanswered === 1 ? '' : 's'} will be marked incorrect.`}
        {flaggedCount > 0 && ` You still have ${flaggedCount} question${flaggedCount === 1 ? '' : 's'} flagged for review.`}
        {' '}This can&apos;t be undone.
      </p>
      <div className="flex items-center justify-end gap-3 flex-wrap">
        {/* Safe default gets initial focus */}
        <button
          autoFocus
          onClick={onClose}
          className="px-4 py-2 rounded-xl text-base font-medium border-2 hover-surface"
          style={{ borderColor: 'var(--border-default)', color: 'var(--text-primary)' }}
        >
          Return to test
        </button>
        <button
          onClick={onSubmit}
          className="px-4 py-2 rounded-xl text-base font-bold"
          style={{ backgroundColor: 'var(--btn-accent)', color: 'var(--text-on-accent)' }}
        >
          Submit test
        </button>
      </div>
    </ModalDialog>
  );
}
