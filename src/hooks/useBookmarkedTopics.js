import { useCallback } from 'react';
import { useLocalStorage } from './useLocalStorage';

/**
 * Tracks which knowledge base topics the user has bookmarked.
 * Topics are identified globally by slug.
 * Shape: { 'medical-model': true, 'wcag-principles': true }
 */
export function useBookmarkedTopics() {
  const [bookmarks, setBookmarks] = useLocalStorage('pourcast-bookmarks', {});

  const isBookmarked = useCallback((slug) => bookmarks[slug] === true, [bookmarks]);

  const toggleBookmark = useCallback((slug) => {
    setBookmarks((prev) => {
      if (prev[slug]) {
        const { [slug]: _omit, ...rest } = prev;
        return rest;
      }
      return { ...prev, [slug]: true };
    });
  }, [setBookmarks]);

  return { bookmarks, isBookmarked, toggleBookmark };
}
