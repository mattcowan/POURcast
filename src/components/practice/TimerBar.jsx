import { useRef, useEffect } from 'react';
import { AlertTriangle, Eye, EyeOff, TimerIcon } from 'lucide-react';
import { useAnnounce } from '../../hooks/useAnnounce';
import {
  TIMER_MILESTONES_SEC,
  ASSERTIVE_MILESTONES_SEC,
  TIMER_WARN_THRESHOLD_SEC,
} from '../../data/practiceConfig';
import { formatClock, formatSpoken } from '../../utils/formatTime';

/**
 * Countdown display. The ticking clock is aria-hidden — screen reader users
 * get milestone announcements (60/30/15/5/1 minutes) instead of a chatterbox.
 * The visual timer can be hidden to reduce anxiety; announcements still fire.
 */
export default function TimerBar({ remainingSec, isRunning, hidden, onToggleHidden }) {
  const announce = useAnnounce();
  const announcedRef = useRef(null);

  useEffect(() => {
    // Seed on first render: milestones already passed must not replay on resume
    if (announcedRef.current === null) {
      announcedRef.current = new Set(TIMER_MILESTONES_SEC.filter((m) => remainingSec <= m));
      return;
    }
    if (!isRunning) return;
    for (const m of TIMER_MILESTONES_SEC) {
      if (remainingSec <= m && !announcedRef.current.has(m)) {
        announcedRef.current.add(m);
        announce(
          `${formatSpoken(m)} remaining`,
          ASSERTIVE_MILESTONES_SEC.includes(m) ? 'assertive' : undefined
        );
      }
    }
  }, [remainingSec, isRunning, announce]);

  const warn = remainingSec <= TIMER_WARN_THRESHOLD_SEC;

  return (
    <div
      className="flex items-center justify-between gap-3 rounded-xl border-2 px-4 py-2 mb-5"
      style={{
        borderColor: warn && !hidden ? 'var(--warning-border)' : 'var(--border-default)',
        backgroundColor: warn && !hidden ? 'var(--warning-bg)' : 'var(--bg-surface)',
      }}
    >
      <div className="flex items-center gap-3" aria-hidden="true">
        {!hidden ? (
          <>
            <TimerIcon size={18} style={{ color: warn ? 'var(--warning-text)' : 'var(--text-muted)' }} />
            <span
              className="font-mono text-lg font-bold"
              style={{ color: warn ? 'var(--warning-text)' : 'var(--text-primary)' }}
            >
              {formatClock(remainingSec)}
            </span>
            {warn && (
              <span
                className="inline-flex items-center gap-1 text-base font-medium"
                style={{ color: 'var(--warning-text)' }}
              >
                <AlertTriangle size={16} />
                Time running low
              </span>
            )}
          </>
        ) : (
          <span className="text-base" style={{ color: 'var(--text-muted)' }}>
            Timer hidden — you&apos;ll still get time warnings
          </span>
        )}
      </div>
      <button
        onClick={onToggleHidden}
        aria-pressed={hidden}
        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-base font-medium hover-surface"
        style={{ color: 'var(--text-secondary)' }}
      >
        {hidden ? (
          <>
            <Eye size={16} aria-hidden="true" />
            Show timer
          </>
        ) : (
          <>
            <EyeOff size={16} aria-hidden="true" />
            Hide timer
          </>
        )}
      </button>
    </div>
  );
}
