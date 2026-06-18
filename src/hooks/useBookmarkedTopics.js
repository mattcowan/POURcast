import { useCallback, useMemo } from 'react';
import { useLocalStorage } from './useLocalStorage';

/**
 * Tracks which knowledge base topics the user has bookmarked.
 * Topics are identified globally by slug.
 * Shape: { 'medical-model': true, 'wcag-principles': true }
 */
export function useBookmarkedTopics() {
  const [stored, setBookmarks] = useLocalStorage('pourcast-bookmarks', {});
  // Coerce to a safe object — a corrupted or imported non-object value (e.g. the
  // JSON literal null) must not crash indexing or the spread/destructure below.
  // Callers receive the coerced map, never the invalid shape.
  const bookmarks = useMemo(
    () => (stored && typeof stored === 'object' ? stored : {}),
    [stored]
  );

  const isBookmarked = useCallback((slug) => bookmarks[slug] === true, [bookmarks]);

  const toggleBookmark = useCallback((slug) => {
    setBookmarks((prev) => {
      const safe = prev && typeof prev === 'object' ? prev : {};
      if (safe[slug]) {
        const { [slug]: _omit, ...rest } = safe;
        return rest;
      }
      return { ...safe, [slug]: true };
    });
  }, [setBookmarks]);

  return { bookmarks, isBookmarked, toggleBookmark };
}
