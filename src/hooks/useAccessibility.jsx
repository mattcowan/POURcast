import { createContext, useContext, useEffect, useMemo } from 'react';
import { useLocalStorage } from './useLocalStorage';

const DEFAULTS = {
  theme: 'light',           // light | dark | hc-light | hc-dark
  fontFamily: 'atkinson',   // atkinson | sans-serif | serif | comic-sans
  fontSize: 'default',      // default | large | largest
  letterSpacing: 'default', // default | increased
  lineHeight: 'default',    // default | increased
  underlineLinks: false,
  reduceMotion: 'system',   // system | reduce | no-preference
};

const AccessibilityContext = createContext({
  prefs: DEFAULTS,
  setPrefs: () => {},
  updatePref: () => {},
  resetPrefs: () => {},
});

export function AccessibilityProvider({ children }) {
  const [prefs, setPrefs] = useLocalStorage('pourcast-a11y', DEFAULTS);

  // Merge with defaults in case new keys are added in future versions
  const mergedPrefs = useMemo(() => ({ ...DEFAULTS, ...prefs }), [prefs]);

  const updatePref = (key, value) => {
    setPrefs((prev) => ({ ...DEFAULTS, ...prev, [key]: value }));
  };

  const resetPrefs = () => setPrefs(DEFAULTS);

  // Apply preferences to the document
  useEffect(() => {
    const root = document.documentElement;

    // Theme
    root.setAttribute('data-theme', mergedPrefs.theme);

    // Font family
    root.setAttribute('data-font-family', mergedPrefs.fontFamily);

    // Font size
    root.setAttribute('data-font-size', mergedPrefs.fontSize);

    // Letter spacing
    root.setAttribute('data-letter-spacing', mergedPrefs.letterSpacing);

    // Line height
    root.setAttribute('data-line-height', mergedPrefs.lineHeight);

    // Underline links
    root.setAttribute('data-underline-links', mergedPrefs.underlineLinks ? 'true' : 'false');

    // Reduce motion
    root.setAttribute('data-reduce-motion', mergedPrefs.reduceMotion);
  }, [mergedPrefs]);

  return (
    <AccessibilityContext.Provider value={{ prefs: mergedPrefs, setPrefs, updatePref, resetPrefs }}>
      {children}
    </AccessibilityContext.Provider>
  );
}

export function useAccessibility() {
  return useContext(AccessibilityContext);
}
