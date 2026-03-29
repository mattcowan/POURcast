import { useEffect, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useAnnounce } from '../../hooks/useAnnounce';
import QuizCard from './QuizCard';
import FeedbackPanel from './FeedbackPanel';
import ProgressBar from './ProgressBar';

export default function QuizView({ quiz, domains, onUpdateStats, missedBank, flaggedBank }) {
  const { domainId } = useParams();
  const navigate = useNavigate();
  const announce = useAnnounce();
  const hasHandledCompletion = useRef(false);
  const isInitialMount = useRef(true);

  // Reset completion guard when a new quiz starts
  useEffect(() => {
    if (!quiz.isComplete) {
      hasHandledCompletion.current = false;
    }
  }, [quiz.isComplete]);

  useEffect(() => {
    const domain = domains.find((d) => d.id === domainId);
    // On initial mount, also restart if the previous quiz for this domain is stale (already complete)
    const isStaleCompletion = isInitialMount.current && quiz.isComplete;
    if (domain && (!quiz.domain || quiz.domain.id !== domainId || isStaleCompletion)) {
      hasHandledCompletion.current = true; // block stale completion effect
      quiz.startQuiz(domain);
    }
    isInitialMount.current = false;
  }, [domainId, domains, quiz]);

  useEffect(() => {
    if (quiz.isComplete && !hasHandledCompletion.current) {
      hasHandledCompletion.current = true;

      const percentage = Math.round((quiz.score / quiz.totalQuestions) * 100);
      const courseId = quiz.domain.courseId || 'cpacc';

      // Update missed bank: add newly missed, remove correctly answered
      if (missedBank) {
        const missedIds = quiz.missedQuestions.map((q) => q.id);
        const missedIdSet = new Set(missedIds);
        const allIds = quiz.questions.map((q) => q.id);
        const correctIds = allIds.filter((id) => !missedIdSet.has(id));
        missedBank.addMissed(courseId, missedIds);
        missedBank.removeMissed(courseId, correctIds);
      }

      // Update stats (skip domain stats for review quizzes)
      if (!quiz.isReview) {
        onUpdateStats(quiz.domain.id, percentage, quiz.score);
      }

      navigate('/results');
    }
  }, [quiz.isComplete, quiz.score, quiz.totalQuestions, quiz.questions, quiz.missedQuestions, quiz.domain, quiz.isReview, navigate, onUpdateStats, missedBank]);

  useEffect(() => {
    if (quiz.currentQuestion) {
      announce(`Question ${quiz.currentIndex + 1} of ${quiz.totalQuestions}`);
    }
  }, [quiz.currentIndex, quiz.totalQuestions, quiz.currentQuestion, announce]);

  useEffect(() => {
    if (quiz.feedback) {
      announce(quiz.feedback.isCorrect ? 'Correct!' : 'Incorrect');
    }
  }, [quiz.feedback, announce]);

  if (!quiz.currentQuestion) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-12 text-center">
        <p style={{ color: 'var(--text-muted)' }}>Loading quiz...</p>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-6">
      <h1 className="sr-only">{quiz.domain?.title || 'Quiz'}</h1>
      <div className="flex items-center gap-4 mb-6">
        <button
          onClick={() => {
            quiz.resetQuiz();
            navigate('/');
          }}
          aria-label="Quit lesson and return to dashboard"
          className="p-2 rounded-lg transition-colors"
          style={{ color: 'var(--text-muted)' }}
        >
          <ArrowLeft size={20} aria-hidden="true" />
        </button>
        <div className="flex-1">
          <ProgressBar current={quiz.currentIndex} total={quiz.totalQuestions} />
        </div>
      </div>

      <QuizCard
        question={quiz.currentQuestion}
        questionIndex={quiz.currentIndex}
        totalQuestions={quiz.totalQuestions}
        feedback={quiz.feedback}
        onAnswer={quiz.submitAnswer}
      />

      {quiz.feedback && (
        <FeedbackPanel
          question={quiz.currentQuestion}
          feedback={quiz.feedback}
          onNext={quiz.nextQuestion}
          isFlagged={flaggedBank?.isFlagged(quiz.domain?.courseId || 'cpacc', quiz.currentQuestion?.id)}
          onToggleFlag={(note) => {
            const courseId = quiz.domain?.courseId || 'cpacc';
            const qId = quiz.currentQuestion?.id;
            if (flaggedBank?.isFlagged(courseId, qId)) {
              flaggedBank.unflagQuestion(courseId, qId);
              announce('Question unflagged');
            } else {
              flaggedBank.flagQuestion(courseId, qId, note);
              announce('Question flagged');
            }
          }}
        />
      )}
    </div>
  );
}
