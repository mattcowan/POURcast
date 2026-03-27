import { useCallback, lazy, Suspense } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { useLocalStorage } from './hooks/useLocalStorage';
import { useQuiz } from './hooks/useQuiz';
import { useMissedBank } from './hooks/useMissedBank';
import { useFlaggedBank } from './hooks/useFlaggedBank';
import { AccessibilityProvider } from './hooks/useAccessibility.jsx';
import AppShell from './components/layout/AppShell';
import Dashboard from './components/dashboard/Dashboard';
import QuizView from './components/quiz/QuizView';
import SuccessScreen from './components/success/SuccessScreen';

import { domain1 } from './data/questions/cpacc-domain1';
import { domain2 } from './data/questions/cpacc-domain2';
import { domain3 } from './data/questions/cpacc-domain3';
import { wasDomain1 } from './data/questions/was-domain1';
import { wasDomain2 } from './data/questions/was-domain2';
import { getQuestionsByIds } from './utils/getQuestionsByIds';

const KnowledgeHome = lazy(() => import('./components/knowledge/KnowledgeHome'));
const TopicPage = lazy(() => import('./components/knowledge/TopicPage'));
const FlaggedQuestionsPage = lazy(() => import('./components/flagged/FlaggedQuestionsPage'));

const CPACC_DOMAINS = [domain1, domain2, domain3];
const WAS_DOMAINS = [wasDomain1, wasDomain2];
const ALL_DOMAINS = [...CPACC_DOMAINS, ...WAS_DOMAINS];

const DOMAINS_BY_COURSE = {
  cpacc: CPACC_DOMAINS,
  was: WAS_DOMAINS,
};

const INITIAL_STATS = {
  version: 1,
  xp: 0,
  streak: 0,
  completedDomains: { cpacc: 0, was: 0 },
  domainStats: {},
  lastStudyDate: null,
};

export default function App() {
  const [stats, setStats] = useLocalStorage('pourcast-stats', INITIAL_STATS);
  const quiz = useQuiz();
  const missedBank = useMissedBank();
  const flaggedBank = useFlaggedBank();

  const updateStats = useCallback(
    (domainId, percentage, score) => {
      setStats((prev) => {
        const domainHistory = prev.domainStats?.[domainId]?.history || [];
        const newHistory = [...domainHistory, percentage].slice(-10);

        // Find which course this domain belongs to and track completion within that course
        const domain = ALL_DOMAINS.find((d) => d.id === domainId);
        const courseId = domain?.courseId || 'cpacc';
        const courseDomains = DOMAINS_BY_COURSE[courseId] || [];
        const domainIndex = courseDomains.findIndex((d) => d.id === domainId);
        let completedCount = prev.completedDomains?.[courseId] || 0;
        if (percentage >= 60 && domainIndex >= 0 && domainIndex >= completedCount) {
          completedCount = domainIndex + 1;
        }

        // Calculate XP from passed-in score
        const xpGained = score * 10;

        // Update streak
        const today = new Date().toDateString();
        const isNewDay = prev.lastStudyDate !== today;
        const streak = isNewDay ? (prev.streak || 0) + 1 : prev.streak || 0;

        return {
          ...prev,
          xp: (prev.xp || 0) + xpGained,
          streak,
          lastStudyDate: today,
          completedDomains: {
            ...prev.completedDomains,
            [courseId]: Math.max(completedCount, prev.completedDomains?.[courseId] || 0),
          },
          domainStats: {
            ...prev.domainStats,
            [domainId]: { history: newHistory },
          },
        };
      });
    },
    [setStats]
  );

  const startReview = useCallback((courseId) => {
    const missedIds = missedBank.getMissedIds(courseId);
    const questions = getQuestionsByIds(missedIds, ALL_DOMAINS);
    if (questions.length === 0) return false;
    const reviewDomain = {
      id: `review-${courseId}`,
      courseId,
      title: 'Missed Questions Review',
      questions,
    };
    quiz.startQuiz(reviewDomain, null, true);
    return true;
  }, [missedBank, quiz]);

  return (
    <AccessibilityProvider>
    <HashRouter>
      <AppShell stats={stats}>
        <Suspense
          fallback={
            <div className="flex items-center justify-center py-20">
              <p style={{ color: 'var(--text-muted)' }}>Loading...</p>
            </div>
          }
        >
          <Routes>
            <Route
              path="/"
              element={
                <Dashboard
                  cpaccDomains={CPACC_DOMAINS}
                  wasDomains={WAS_DOMAINS}
                  stats={stats}
                  missedBank={missedBank}
                  flaggedBank={flaggedBank}
                  onStartReview={startReview}
                />
              }
            />
            <Route
              path="/quiz/:domainId"
              element={
                <QuizView
                  quiz={quiz}
                  domains={ALL_DOMAINS}
                  onUpdateStats={updateStats}
                  missedBank={missedBank}
                  flaggedBank={flaggedBank}
                />
              }
            />
            <Route
              path="/results"
              element={<SuccessScreen quiz={quiz} />}
            />
            <Route path="/learn" element={<KnowledgeHome />} />
            <Route path="/learn/:slug" element={<TopicPage />} />
            <Route
              path="/flagged/:courseId"
              element={
                <FlaggedQuestionsPage
                  flaggedBank={flaggedBank}
                  domains={ALL_DOMAINS}
                />
              }
            />
          </Routes>
        </Suspense>
      </AppShell>
    </HashRouter>
    </AccessibilityProvider>
  );
}
