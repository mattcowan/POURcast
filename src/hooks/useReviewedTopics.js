import { useCallback } from 'react';
import { useLocalStorage } from './useLocalStorage';

/**
 * Tracks which knowledge base topics the user has marked as reviewed.
 * Topics are identified globally by slug.
 * Shape: { 'medical-model': true, 'wcag-principles': true }
 */
export function useReviewedTopics() {
  const [reviewed, setReviewed] = useLocalStorage('pourcast-reviewed-topics', {});

  const isReviewed = useCallback((slug) => reviewed[slug] === true, [reviewed]);

  const setReviewedStatus = useCallback((slug, value) => {
    setReviewed((prev) => {
      if (value) return { ...prev, [slug]: true };
      const { [slug]: _omit, ...rest } = prev;
      return rest;
    });
  }, [setReviewed]);

  return { reviewed, isReviewed, setReviewedStatus };
}
