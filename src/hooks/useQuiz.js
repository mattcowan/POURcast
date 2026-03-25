import { useState, useCallback } from 'react';
import { shuffle } from '../utils/shuffle';

const QUESTIONS_PER_LESSON = 10;

/**
 * Shuffle the options of a question, remapping `correct` and `wrongExplanations`
 * so the answer data stays consistent with the new option order.
 */
function shuffleOptions(question) {
  // Build an array of indices [0,1,2,3] and shuffle them
  const indices = question.options.map((_, i) => i);
  const shuffledIndices = shuffle(indices);

  const newOptions = shuffledIndices.map((i) => question.options[i]);
  const newCorrect = shuffledIndices.indexOf(question.correct);

  // Remap wrongExplanations keys from old indices to new indices
  let newWrongExplanations;
  if (question.wrongExplanations) {
    newWrongExplanations = {};
    for (const [oldIdx, text] of Object.entries(question.wrongExplanations)) {
      const newIdx = shuffledIndices.indexOf(Number(oldIdx));
      newWrongExplanations[newIdx] = text;
    }
  }

  return {
    ...question,
    options: newOptions,
    correct: newCorrect,
    wrongExplanations: newWrongExplanations || question.wrongExplanations,
  };
}

export function useQuiz() {
  const [domain, setDomain] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [feedback, setFeedback] = useState(null);
  const [score, setScore] = useState(0);
  const [missedQuestions, setMissedQuestions] = useState([]);
  const [isComplete, setIsComplete] = useState(false);

  const startQuiz = useCallback((domainData, retryQuestions = null) => {
    const pool = retryQuestions || domainData.questions;
    const shuffled = shuffle(pool);
    const selected = shuffled.slice(0, Math.min(shuffled.length, QUESTIONS_PER_LESSON))
      .map(shuffleOptions);
    setDomain(domainData);
    setQuestions(selected);
    setCurrentIndex(0);
    setScore(0);
    setMissedQuestions([]);
    setFeedback(null);
    setIsComplete(false);
  }, []);

  const submitAnswer = useCallback((selectedIndex) => {
    if (feedback !== null) return; // Guard against double submissions

    const question = questions[currentIndex];
    const isCorrect = selectedIndex === question.correct;

    if (isCorrect) {
      setScore((s) => s + 1);
    } else {
      setMissedQuestions((prev) => [...prev, question]);
    }

    setFeedback({ isCorrect, selected: selectedIndex });
  }, [questions, currentIndex, feedback]);

  const nextQuestion = useCallback(() => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((i) => i + 1);
      setFeedback(null);
    } else {
      setIsComplete(true);
    }
  }, [currentIndex, questions.length]);

  const resetQuiz = useCallback(() => {
    setDomain(null);
    setQuestions([]);
    setCurrentIndex(0);
    setScore(0);
    setMissedQuestions([]);
    setFeedback(null);
    setIsComplete(false);
  }, []);

  return {
    domain,
    questions,
    currentQuestion: questions[currentIndex] || null,
    currentIndex,
    totalQuestions: questions.length,
    feedback,
    score,
    missedQuestions,
    isComplete,
    startQuiz,
    submitAnswer,
    nextQuestion,
    resetQuiz,
  };
}
