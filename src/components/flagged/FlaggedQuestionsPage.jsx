import { useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Flag, Trash2 } from 'lucide-react';
import { usePageFocus } from '../../hooks/usePageFocus';
import { useAnnounce } from '../../hooks/useAnnounce';
import { getQuestionsByIds } from '../../utils/getQuestionsByIds';

const COURSE_LABELS = {
  cpacc: 'CPACC',
  was: 'WAS',
};

export default function FlaggedQuestionsPage({ flaggedBank, domains }) {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const headingRef = useRef(null);
  const announce = useAnnounce();

  usePageFocus(headingRef);

  const entries = flaggedBank.getFlaggedEntries(courseId);
  const flaggedIds = Object.keys(entries).map(Number);
  const questions = getQuestionsByIds(flaggedIds, domains);

  // Build a lookup: question ID → domain title
  const domainByQuestionId = {};
  for (const domain of domains) {
    for (const q of domain.questions) {
      if (flaggedIds.includes(q.id)) {
        domainByQuestionId[q.id] = domain.title;
      }
    }
  }

  function handleUnflag(questionId) {
    flaggedBank.unflagQuestion(courseId, questionId);
    const remaining = flaggedBank.getFlaggedCount(courseId) - 1;
    announce(`Question unflagged. ${remaining} flagged question${remaining !== 1 ? 's' : ''} remaining.`);
  }

  function handleClearAll() {
    flaggedBank.clearFlagged(courseId);
    announce('All flagged questions cleared.');
  }

  const courseLabel = COURSE_LABELS[courseId] || courseId;

  return (
    <div className="max-w-2xl mx-auto px-4 py-6">
      <div className="flex items-center gap-4 mb-6">
        <button
          onClick={() => navigate('/')}
          aria-label="Back to dashboard"
          className="p-2 rounded-lg transition-colors"
          style={{ color: 'var(--text-muted)' }}
        >
          <ArrowLeft size={20} aria-hidden="true" />
        </button>
        <h1
          ref={headingRef}
          tabIndex={-1}
          className="text-2xl font-bold"
          style={{ color: 'var(--text-primary)' }}
        >
          Flagged Questions — {courseLabel}
        </h1>
      </div>

      {questions.length === 0 ? (
        <div className="text-center py-12">
          <Flag size={48} style={{ color: 'var(--text-muted)', margin: '0 auto 16px' }} aria-hidden="true" />
          <p className="text-lg" style={{ color: 'var(--text-muted)' }}>
            No flagged questions for {courseLabel}.
          </p>
          <button
            onClick={() => navigate('/')}
            className="mt-4 py-2 px-4 rounded-lg font-medium transition-colors border-0 cursor-pointer"
            style={{
              backgroundColor: 'var(--btn-accent)',
              color: 'var(--text-on-accent)',
            }}
          >
            Back to Dashboard
          </button>
        </div>
      ) : (
        <>
          <ul className="space-y-4" role="list">
            {questions.map((q) => (
              <li
                key={q.id}
                className="p-4 rounded-xl border-2"
                style={{
                  borderColor: 'var(--border-default)',
                  backgroundColor: 'var(--bg-surface)',
                }}
              >
                <div className="flex items-start gap-3">
                  <Flag
                    size={18}
                    style={{ color: 'var(--info-text)', flexShrink: 0, marginTop: '3px' }}
                    aria-hidden="true"
                    fill="currentColor"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-base font-medium" style={{ color: 'var(--text-primary)' }}>
                      {q.question}
                    </p>
                    <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2">
                      <span className="text-base" style={{ color: 'var(--text-muted)' }}>
                        ID: {q.id}
                      </span>
                      {domainByQuestionId[q.id] && (
                        <span className="text-base" style={{ color: 'var(--text-muted)' }}>
                          {domainByQuestionId[q.id]}
                        </span>
                      )}
                    </div>
                    {entries[q.id] && (
                      <p
                        className="mt-2 text-base italic px-3 py-2 rounded-lg"
                        style={{
                          color: 'var(--info-text)',
                          backgroundColor: 'var(--info-bg)',
                        }}
                      >
                        {entries[q.id]}
                      </p>
                    )}
                  </div>
                  <button
                    onClick={() => handleUnflag(q.id)}
                    aria-label={`Unflag question ${q.id}`}
                    className="p-2 rounded-lg transition-colors border-0 bg-transparent cursor-pointer flex-shrink-0"
                    style={{ color: 'var(--text-muted)' }}
                  >
                    <Trash2 size={18} aria-hidden="true" />
                  </button>
                </div>
              </li>
            ))}
          </ul>

          {questions.length > 1 && (
            <button
              onClick={handleClearAll}
              className="mt-6 w-full py-3 px-6 font-medium rounded-xl transition-colors border-2 bg-transparent cursor-pointer"
              style={{
                borderColor: 'var(--border-default)',
                color: 'var(--text-muted)',
              }}
            >
              Clear all flags for {courseLabel}
            </button>
          )}
        </>
      )}
    </div>
  );
}
