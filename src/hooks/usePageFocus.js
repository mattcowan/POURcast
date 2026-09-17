import { useEffect } from 'react';
import { useHasNavigated } from './useHasNavigated';

// On the initial page load (and on a reload) focus stays where the browser
// put it, so the skip link is the first Tab stop. After any in-app
// navigation, the destination page's heading receives focus for screen
// reader users.
//
// Whether the app has navigated is tracked once, at the router level in
// AppShell, not by this hook's own mount history: pages such as the quiz and
// the mock exam do not use the hook, and deciding from "has this hook run
// before" made a reload on one of them (or a Back from one of them to the
// first entry) look like the initial load, leaving focus on <body>.
export function usePageFocus(ref) {
  const hasNavigated = useHasNavigated();

  useEffect(() => {
    if (!hasNavigated) return;
    ref.current?.focus();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
}
