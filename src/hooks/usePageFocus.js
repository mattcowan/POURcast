import { useEffect, useRef } from 'react';

// Tracks whether the app has completed its initial render.
// On initial load: don't steal focus (let skip-nav be first Tab stop).
// On subsequent route changes: focus the heading for screen readers.
let hasNavigated = false;

export function usePageFocus(ref) {
  const isFirstMount = useRef(true);

  useEffect(() => {
    if (isFirstMount.current) {
      isFirstMount.current = false;
      if (!hasNavigated) {
        hasNavigated = true;
        return; // Skip focus on initial page load
      }
    }
    ref.current?.focus();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
}
