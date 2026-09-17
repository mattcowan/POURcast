import { useState } from 'react';
import { useLocation, useNavigationType } from 'react-router-dom';
import Header from './Header';
import LiveRegion from '../common/LiveRegion';
import { HasNavigatedContext } from '../../hooks/useHasNavigated';

/**
 * Latches to true on the first in-app navigation and stays true until the
 * app reloads. Computed during render (not in an effect) so a page mounting
 * in the same commit as the navigation already sees the new value; child
 * effects run before parent effects, so an effect here would be one
 * navigation late.
 *
 * PUSH/REPLACE always count. POP counts when the location key differs from
 * the one the app loaded with (Back/Forward to a later entry). Back to the
 * very first entry keeps the load key, which is why the latch exists.
 */
function useNavigatedTracker() {
  const location = useLocation();
  const navigationType = useNavigationType();
  const [initialKey] = useState(location.key);
  const [latched, setLatched] = useState(false);
  const navigatedNow = navigationType !== 'POP' || location.key !== initialKey;
  if (navigatedNow && !latched) {
    // Derived-state update during render: React re-renders immediately,
    // before children, so the latch is visible to this same navigation.
    setLatched(true);
  }
  return latched || navigatedNow;
}

export default function AppShell({ stats, children }) {
  const hasNavigated = useNavigatedTracker();

  return (
    <HasNavigatedContext.Provider value={hasNavigated}>
    <LiveRegion>
      <div className="min-h-screen flex flex-col" style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
        <a
          href="#main-content"
          className="skip-nav"
          onClick={(e) => {
            // HashRouter owns the fragment: letting the browser navigate to
            // "#main-content" would change the route to /main-content and
            // render nothing. Move focus directly instead.
            e.preventDefault();
            document.getElementById('main-content')?.focus();
          }}
        >
          Skip to main content
        </a>
        <Header stats={stats} />
        <main id="main-content" className="flex-1" tabIndex={-1}>
          {children}
        </main>
        <footer
          className="border-t py-4 text-center text-base"
          style={{ borderColor: 'var(--border-default)', color: 'var(--text-muted)' }}
        >
          <p>
            POURcast &mdash; Your Curb Cut to Certification
          </p>
        </footer>
      </div>
    </LiveRegion>
    </HasNavigatedContext.Provider>
  );
}
