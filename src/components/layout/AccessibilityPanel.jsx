import { useState, useRef, useEffect } from 'react';
import { Settings, RotateCcw, Sun, Moon, Eye, EyeOff } from 'lucide-react';
import { useAccessibility } from '../../hooks/useAccessibility.jsx';

const THEMES = [
  { value: 'light', label: 'Light', Icon: Sun },
  { value: 'dark', label: 'Dark', Icon: Moon },
  { value: 'hc-light', label: 'High Contrast Light', Icon: Eye },
  { value: 'hc-dark', label: 'High Contrast Dark', Icon: EyeOff },
];

const FONT_FAMILIES = [
  { value: 'atkinson', label: 'Atkinson Hyperlegible' },
  { value: 'sans-serif', label: 'Inter' },
  { value: 'serif', label: 'Lora' },
  { value: 'comic-sans', label: 'Comic Neue' },
];

const FONT_SIZES = [
  { value: 'default', label: 'Default (16px)' },
  { value: 'large', label: 'Large (18px)' },
  { value: 'largest', label: 'Largest (20px)' },
];

const LETTER_SPACING = [
  { value: 'default', label: 'Default' },
  { value: 'increased', label: 'Increased' },
];

const LINE_HEIGHT = [
  { value: 'default', label: 'Default (1.5x)' },
  { value: 'increased', label: 'Increased (2x)' },
];

const MOTION = [
  { value: 'system', label: 'System default' },
  { value: 'reduce', label: 'Reduce motion' },
  { value: 'no-preference', label: 'Allow motion' },
];

export default function AccessibilityPanel() {
  const [isOpen, setIsOpen] = useState(false);
  const panelRef = useRef(null);
  const buttonRef = useRef(null);
  const dialogRef = useRef(null);
  const { prefs, updatePref, resetPrefs } = useAccessibility();

  // Close on Escape, focus dialog on open
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
      if (panelRef.current && !panelRef.current.contains(e.target)) {
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
    <div className="relative" ref={panelRef}>
      <button
        ref={buttonRef}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="dialog"
        aria-label="Accessibility settings"
        className="p-2 rounded-lg transition-colors"
        style={{
          color: 'var(--text-muted)',
          backgroundColor: isOpen ? 'var(--bg-surface-hover)' : 'transparent',
        }}
      >
        <Settings size={20} aria-hidden="true" />
      </button>

      {isOpen && (
        <div
          ref={dialogRef}
          tabIndex={-1}
          role="dialog"
          aria-label="Accessibility preferences"
          className="absolute right-0 top-full mt-2 w-96 rounded-xl border-2 p-5 shadow-lg z-50 max-h-[80vh] overflow-y-auto"
          style={{
            backgroundColor: 'var(--bg-surface)',
            borderColor: 'var(--border-default)',
          }}
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold" style={{ color: 'var(--text-primary)' }}>
              Accessibility
            </h2>
            <button
              onClick={resetPrefs}
              className="flex items-center gap-1 px-2 py-1 rounded text-base font-medium transition-colors"
              style={{ color: 'var(--text-muted)' }}
              aria-label="Reset all preferences to defaults"
            >
              <RotateCcw size={14} aria-hidden="true" />
              Reset
            </button>
          </div>

          {/* Theme */}
          <SettingGroup label="Theme">
            <div className="grid grid-cols-2 gap-2">
              {THEMES.map(({ value, label, Icon }) => (
                <OptionButton
                  key={value}
                  selected={prefs.theme === value}
                  onClick={() => updatePref('theme', value)}
                >
                  <Icon size={16} aria-hidden="true" />
                  {label}
                </OptionButton>
              ))}
            </div>
          </SettingGroup>

          {/* Font family */}
          <SettingGroup label="Font">
            <div className="flex flex-col gap-2">
              {FONT_FAMILIES.map(({ value, label }) => (
                <OptionButton
                  key={value}
                  selected={prefs.fontFamily === value}
                  onClick={() => updatePref('fontFamily', value)}
                >
                  <span style={{
                    fontFamily: value === 'atkinson' ? "'Atkinson Hyperlegible', sans-serif"
                      : value === 'serif' ? "'Lora', Georgia, serif"
                      : value === 'comic-sans' ? "'Comic Neue', 'Comic Sans MS', cursive"
                      : "'Inter', system-ui, sans-serif"
                  }}>
                    {label}
                  </span>
                </OptionButton>
              ))}
            </div>
          </SettingGroup>

          {/* Font size */}
          <SettingGroup label="Font size">
            <div className="flex flex-col gap-2">
              {FONT_SIZES.map(({ value, label }) => (
                <OptionButton
                  key={value}
                  selected={prefs.fontSize === value}
                  onClick={() => updatePref('fontSize', value)}
                >
                  {label}
                </OptionButton>
              ))}
            </div>
          </SettingGroup>

          {/* Letter spacing */}
          <SettingGroup label="Letter spacing">
            <div className="flex gap-2">
              {LETTER_SPACING.map(({ value, label }) => (
                <OptionButton
                  key={value}
                  selected={prefs.letterSpacing === value}
                  onClick={() => updatePref('letterSpacing', value)}
                  className="flex-1"
                >
                  {label}
                </OptionButton>
              ))}
            </div>
          </SettingGroup>

          {/* Line height */}
          <SettingGroup label="Line height">
            <div className="flex gap-2">
              {LINE_HEIGHT.map(({ value, label }) => (
                <OptionButton
                  key={value}
                  selected={prefs.lineHeight === value}
                  onClick={() => updatePref('lineHeight', value)}
                  className="flex-1"
                >
                  {label}
                </OptionButton>
              ))}
            </div>
          </SettingGroup>

          {/* Underline links */}
          <SettingGroup label="Links">
            <ToggleSwitch
              checked={prefs.underlineLinks}
              onChange={(val) => updatePref('underlineLinks', val)}
              label="Underline all links"
            />
          </SettingGroup>

          {/* Reduce motion */}
          <SettingGroup label="Motion">
            <div className="flex flex-col gap-2">
              {MOTION.map(({ value, label }) => (
                <OptionButton
                  key={value}
                  selected={prefs.reduceMotion === value}
                  onClick={() => updatePref('reduceMotion', value)}
                >
                  {label}
                </OptionButton>
              ))}
            </div>
          </SettingGroup>
        </div>
      )}
    </div>
  );
}

function SettingGroup({ label, children }) {
  return (
    <fieldset className="mb-4 border-0 p-0 m-0">
      <legend
        className="text-base font-semibold mb-2 block"
        style={{ color: 'var(--text-secondary)' }}
      >
        {label}
      </legend>
      {children}
    </fieldset>
  );
}

function OptionButton({ selected, onClick, children, className = '' }) {
  return (
    <button
      onClick={onClick}
      aria-pressed={selected}
      className={`flex items-center gap-2 px-3 py-2 rounded-lg text-base font-medium transition-colors border-2 text-left ${className}`}
      style={{
        backgroundColor: selected ? 'var(--bg-accent)' : 'var(--bg-surface)',
        borderColor: selected ? 'var(--text-accent)' : 'var(--border-default)',
        color: selected ? 'var(--text-accent)' : 'var(--text-secondary)',
      }}
    >
      {children}
    </button>
  );
}

function ToggleSwitch({ checked, onChange, label }) {
  return (
    <label className="flex items-center justify-between cursor-pointer">
      <span className="text-base" style={{ color: 'var(--text-secondary)' }}>
        {label}
      </span>
      <button
        role="switch"
        aria-checked={checked}
        onClick={() => onChange(!checked)}
        className="relative w-11 h-6 rounded-full transition-colors border-2"
        style={{
          backgroundColor: checked ? 'var(--text-accent)' : 'var(--bg-surface-hover)',
          borderColor: checked ? 'var(--text-accent)' : 'var(--border-default)',
        }}
      >
        <span
          className="block w-4 h-4 rounded-full transition-transform absolute top-0.5"
          style={{
            backgroundColor: checked ? 'var(--text-on-accent)' : 'var(--text-muted)',
            transform: checked ? 'translateX(22px)' : 'translateX(3px)',
          }}
        />
      </button>
    </label>
  );
}
