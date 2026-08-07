import { useAccessibility } from '../../hooks/useAccessibility';

/**
 * Disclosure listing a quiz surface's keyboard shortcuts, with the opt-in
 * toggle inline so the setting is discoverable exactly where it applies.
 * Single-key shortcuts default off (WCAG 2.1.4) so they can't override
 * screen reader, speech-input, or browser key commands unless the user
 * chooses them. The same preference is also exposed in the Accessibility
 * panel.
 */
export default function KeyboardShortcutsDisclosure({ items, alwaysOnItems = [] }) {
  const { prefs, updatePref } = useAccessibility();
  const enabled = prefs.keyboardShortcuts;

  return (
    <details className="mt-5">
      <summary
        className="text-base font-medium cursor-pointer"
        style={{ color: 'var(--text-muted)' }}
      >
        Keyboard shortcuts ({enabled ? 'on' : 'off'})
      </summary>
      <div className="mt-2 flex flex-col gap-2">
        <label
          className="flex items-center gap-2 text-base font-medium cursor-pointer"
          style={{ color: 'var(--text-secondary)' }}
        >
          <input
            type="checkbox"
            checked={enabled}
            onChange={(e) => updatePref('keyboardShortcuts', e.target.checked)}
          />
          Enable single-key shortcuts
        </label>
        <ul
          className="ml-4 space-y-1 list-disc text-base"
          style={{ color: 'var(--text-secondary)' }}
        >
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
          {alwaysOnItems.map((item) => (
            <li key={item}>{item} (always available)</li>
          ))}
        </ul>
      </div>
    </details>
  );
}
