import { useCallback } from 'react';
import { useLocalStorage } from './useLocalStorage';

/**
 * Manages a persistent bank of flagged question IDs with optional notes, keyed by courseId.
 * Shape: { cpacc: { 101: "seems like WAS", 105: null }, was: {} }
 */
export function useFlaggedBank() {
  const [bank, setBank] = useLocalStorage('pourcast-flagged', {});

  const flagQuestion = useCallback((courseId, questionId, note = null) => {
    setBank((prev) => {
      const existing = prev[courseId] || {};
      return { ...prev, [courseId]: { ...existing, [questionId]: note } };
    });
  }, [setBank]);

  const unflagQuestion = useCallback((courseId, questionId) => {
    setBank((prev) => {
      const existing = prev[courseId] || {};
      const { [questionId]: _, ...rest } = existing;
      return { ...prev, [courseId]: rest };
    });
  }, [setBank]);

  const isFlagged = useCallback((courseId, questionId) => {
    const entries = bank[courseId] || {};
    return questionId in entries;
  }, [bank]);

  const getFlaggedEntries = useCallback((courseId) => {
    return bank[courseId] || {};
  }, [bank]);

  const getFlaggedCount = useCallback((courseId) => {
    return Object.keys(bank[courseId] || {}).length;
  }, [bank]);

  const clearFlagged = useCallback((courseId) => {
    setBank((prev) => ({ ...prev, [courseId]: {} }));
  }, [setBank]);

  return { bank, flagQuestion, unflagQuestion, isFlagged, getFlaggedEntries, getFlaggedCount, clearFlagged };
}
