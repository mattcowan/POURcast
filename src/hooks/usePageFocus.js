import { useEffect } from 'react';
import { useNavigationType } from 'react-router-dom';

// On the initial page load (and on a reload) focus stays where the browser
// put it, so the skip link is the first Tab stop. After any in-app
// navigation, the destination page's heading receives focus for screen
// reader users.
//
// "Has the user navigated yet" is decided from the router's navigation type,
// not from whether this hook has mounted before: pages such as the quiz and
// the mock exam do not use the hook, and a reload on one of them used to make
// the next page look like the initial load, leaving focus on <body>.
let hasNavigated = false;

export function usePageFocus(ref) {
  const navigationType = useNavigationType();

  useEffect(() => {
    // PUSH and REPLACE are in-app navigations; POP is the initial load, a
    // reload, or Back/Forward (which also deserve focus once the app has
    // navigated at least once).
    if (navigationType !== 'POP') hasNavigated = true;
    if (!hasNavigated) return;
    ref.current?.focus();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
}
