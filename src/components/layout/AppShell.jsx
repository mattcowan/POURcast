import Header from './Header';
import LiveRegion from '../common/LiveRegion';

export default function AppShell({ stats, children }) {
  return (
    <LiveRegion>
      <div className="min-h-screen flex flex-col" style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
        <a href="#main-content" className="skip-nav">
          Skip to main content
        </a>
        <Header stats={stats} />
        <main id="main-content" className="flex-1">
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
  );
}
