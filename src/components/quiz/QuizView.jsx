import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useAnnounce } from '../../hooks/useAnnounce';
import QuizCard from './QuizCard';
import FeedbackPanel from './FeedbackPanel';
import ProgressBar from './ProgressBar';

export default function QuizView({ quiz, domains, onUpdateStats }) {
  const { domainId } = useParams();
  const navigate = useNavigate();
  const announce = useAnnounce();

  useEffect(() => {
    const domain = domains.find((d) => d.id === domainId);
    if (domain && (!quiz.domain || quiz.domain.id !== domainId)) {
      quiz.startQuiz(domain);
    }
  }, [domainId, domains, quiz]);

  useEffect(() => {
    if (quiz.isComplete) {
      const percentage = Math.round((quiz.score / quiz.totalQuestions) * 100);
      onUpdateStats(quiz.domain.id, percentage);
      navigate('/results');
    }
  }, [quiz.isComplete, quiz.score, quiz.totalQuestions, quiz.domain, navigate, onUpdateStats]);

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
        />
      )}
    </div>
  );
}
