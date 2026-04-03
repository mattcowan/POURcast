import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BookOpen, GraduationCap, Trophy, Star, Flame, Dumbbell, TrendingUp } from 'lucide-react';
import AccessibilityPanel from './AccessibilityPanel';

export default function Header({ stats }) {
  const location = useLocation();
  const isLearn = location.pathname.startsWith('/learn');
  const isHome = location.pathname === '/';

  return (
    <header
      className="border-b sticky top-0 z-50"
      style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-default)' }}
    >
      <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-2 no-underline transition-colors"
          style={{ color: 'var(--text-accent)' }}
          aria-label="POURcast home"
        >
          <GraduationCap size={28} aria-hidden="true" />
          <div className="flex flex-col gap-0.5">
            <span className="text-lg font-bold leading-tight">POURcast</span>
            <span
              className="hidden sm:inline text-base leading-tight"
              style={{ color: 'var(--text-muted)' }}
            >
              Your Curb Cut to Certification
            </span>
          </div>
        </Link>

        <div className="flex items-center gap-2">
          <nav aria-label="Main navigation">
            <ul className="flex items-center gap-2 list-none m-0 p-0">
              <li>
                <NavLink to="/" active={isHome} label="Practice">
                  <Dumbbell size={16} aria-hidden="true" />
                </NavLink>
              </li>
              <li>
                <NavLink to="/learn" active={isLearn} label="The Study Shelf">
                  <BookOpen size={16} aria-hidden="true" />
                </NavLink>
              </li>
            </ul>
          </nav>

          <StatsPopover stats={stats} />
          <AccessibilityPanel />
        </div>
      </div>
    </header>
  );
}

function NavLink({ to, active, label, children }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      to={to}
      className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-base font-medium no-underline transition-colors"
      style={{
        backgroundColor: active ? 'var(--bg-accent)' : hovered ? 'var(--bg-surface-hover)' : 'transparent',
        color: active || hovered ? 'var(--text-accent)' : 'var(--text-muted)',
      }}
      aria-current={active ? 'page' : undefined}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
    >
      {children}
      <span className="hidden sm:inline">{label}</span>
    </Link>
  );
}

function StatsPopover({ stats }) {
  const [isOpen, setIsOpen] = useState(false);
  const popoverRef = useRef(null);
  const buttonRef = useRef(null);
  const dialogRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;

    // Move focus into dialog on open
    dialogRef.current?.focus();

    function handleKeyDown(e) {
      if (e.key === 'Escape') {
        setIsOpen(false);
        buttonRef.current?.focus();
      }
    }

    function handleClickOutside(e) {
      if (popoverRef.current && !popoverRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="relative" ref={popoverRef}>
      <button
        ref={buttonRef}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="dialog"
        aria-label="Your stats"
        className="p-2 rounded-lg transition-colors"
        style={{
          color: 'var(--xp-color)',
          backgroundColor: isOpen ? 'var(--bg-surface-hover)' : 'transparent',
        }}
      >
        <Trophy size={20} aria-hidden="true" />
      </button>

      {isOpen && (
        <div
          ref={dialogRef}
          tabIndex={-1}
          role="dialog"
          aria-label="Your progress"
          className="absolute right-0 top-full mt-2 w-56 rounded-xl border-2 p-4 shadow-lg z-50"
          style={{
            backgroundColor: 'var(--bg-surface)',
            borderColor: 'var(--border-default)',
          }}
        >
          <h2 className="text-base font-bold mb-3" style={{ color: 'var(--text-primary)' }}>
            Your Progress
          </h2>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Star size={18} style={{ color: 'var(--xp-color)' }} aria-hidden="true" />
              <div>
                <p className="text-base font-semibold" style={{ color: 'var(--text-primary)' }}>
                  {stats.xp} XP
                </p>
                <p className="text-base" style={{ color: 'var(--text-muted)' }}>
                  Experience points
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Flame size={18} style={{ color: 'var(--streak-color)' }} aria-hidden="true" />
              <div>
                <p className="text-base font-semibold" style={{ color: 'var(--text-primary)' }}>
                  {stats.streak || 0} day{stats.streak !== 1 ? 's' : ''}
                </p>
                <p className="text-base" style={{ color: 'var(--text-muted)' }}>
                  Study streak
                </p>
              </div>
            </div>
          </div>
          <TrendDots recentLessons={stats.recentLessons} />
          {stats.recentLessons && stats.recentLessons.length > 0 && (
            <ActivityLink onNavigate={() => setIsOpen(false)} />
          )}
        </div>
      )}
    </div>
  );
}

function TrendDots({ recentLessons }) {
  if (!recentLessons || recentLessons.length === 0) return null;

  const recent = recentLessons.slice(-5);
  const avg = Math.round(recent.reduce((sum, l) => sum + l.percentage, 0) / recent.length);

  function getDotColor(pct) {
    if (pct >= 80) return 'var(--success-icon)';
    if (pct >= 60) return 'var(--xp-color)';
    return 'var(--error-icon)';
  }

  return (
    <div
      className="mt-3 pt-3"
      style={{ borderTop: '1px solid var(--border-default)' }}
    >
      <div className="flex items-center gap-2 mb-2">
        <TrendingUp size={14} style={{ color: 'var(--text-muted)' }} aria-hidden="true" />
        <span className="text-base font-medium" style={{ color: 'var(--text-muted)' }}>
          Recent trend
        </span>
      </div>
      <div className="flex items-center gap-1.5 mb-1" aria-hidden="true">
        {recent.map((l, i) => (
          <span
            key={i}
            className="w-3 h-3 rounded-full"
            style={{ backgroundColor: getDotColor(l.percentage) }}
          />
        ))}
      </div>
      <p className="text-base" style={{ color: 'var(--text-muted)' }}>
        Avg: <strong style={{ color: 'var(--text-primary)' }}>{avg}%</strong>
        {' '}(last {recent.length})
      </p>
    </div>
  );
}

function ActivityLink({ onNavigate }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="mt-3 pt-3"
      style={{ borderTop: '1px solid var(--border-default)' }}
    >
      <Link
        to="/activity"
        onClick={onNavigate}
        className="flex items-center gap-2 px-2 py-1.5 rounded-lg text-base font-medium no-underline transition-colors"
        style={{
          color: 'var(--text-accent)',
          backgroundColor: hovered ? 'var(--bg-surface-hover)' : 'transparent',
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onFocus={() => setHovered(true)}
        onBlur={() => setHovered(false)}
      >
        <TrendingUp size={16} aria-hidden="true" />
        View all activity
      </Link>
    </div>
  );
}
