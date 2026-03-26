import { useCallback } from 'react';
import { useLocalStorage } from './useLocalStorage';

/**
 * Manages a persistent bank of missed question IDs, keyed by courseId.
 * Shape: { cpacc: [id1, id2, ...], was: [id3, ...] }
 */
export function useMissedBank() {
  const [bank, setBank] = useLocalStorage('pourcast-missed', {});

  const addMissed = useCallback((courseId, questionIds) => {
    if (!questionIds.length) return;
    setBank((prev) => {
      const existing = prev[courseId] || [];
      const merged = [...new Set([...existing, ...questionIds])];
      return { ...prev, [courseId]: merged };
    });
  }, [setBank]);

  const removeMissed = useCallback((courseId, questionIds) => {
    if (!questionIds.length) return;
    const idSet = new Set(questionIds);
    setBank((prev) => {
      const existing = prev[courseId] || [];
      const filtered = existing.filter((id) => !idSet.has(id));
      return { ...prev, [courseId]: filtered };
    });
  }, [setBank]);

  const getMissedIds = useCallback((courseId) => {
    return bank[courseId] || [];
  }, [bank]);

  return { bank, addMissed, removeMissed, getMissedIds };
}
