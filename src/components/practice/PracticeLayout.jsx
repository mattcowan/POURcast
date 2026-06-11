import { Routes, Route, useMatch } from 'react-router-dom';
import { usePracticeTest } from '../../hooks/usePracticeTest';
import { PRACTICE_CONFIG } from '../../data/practiceConfig';
import PracticeHome from './PracticeHome';
import PracticeTestView from './PracticeTestView';
import PracticeResults from './PracticeResults';

/**
 * Owns the single usePracticeTest instance for all /practice routes so the
 * session, timer, and history state are shared (and never duplicated against
 * the same localStorage keys).
 */
export default function PracticeLayout({ allDomains, domainsByCourse, onPracticeComplete }) {
  const match = useMatch('/practice/test/:courseId');
  const matchedCourse = match?.params?.courseId;
  const activeCourseId = matchedCourse && PRACTICE_CONFIG[matchedCourse] ? matchedCourse : null;

  const practice = usePracticeTest(allDomains, domainsByCourse, activeCourseId, onPracticeComplete);

  return (
    <Routes>
      <Route index element={<PracticeHome practice={practice} />} />
      <Route path="test/:courseId" element={<PracticeTestView practice={practice} courseId={activeCourseId} />} />
      <Route path="results/:attemptId" element={<PracticeResults practice={practice} allDomains={allDomains} />} />
    </Routes>
  );
}
