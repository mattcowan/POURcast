import { createContext, useContext } from 'react';

/**
 * "Has the user navigated inside the app since it loaded?"
 *
 * Provided by AppShell from router state (see `useNavigatedTracker`), so it
 * is true for every page after the first in-app navigation, including pages
 * that never call `usePageFocus` themselves and including Back/Forward
 * returns to the very first entry. A reload remounts AppShell and resets it.
 */
export const HasNavigatedContext = createContext(false);

export function useHasNavigated() {
  return useContext(HasNavigatedContext);
}
