import { createContext, useState, useCallback } from 'react';

export const AnnounceContext = createContext(null);

export default function LiveRegion({ children }) {
  const [message, setMessage] = useState('');

  const announce = useCallback((text) => {
    setMessage('');
    // Brief delay ensures screen readers detect the change
    requestAnimationFrame(() => setMessage(text));
  }, []);

  return (
    <AnnounceContext.Provider value={announce}>
      {children}
      <div
        role="status"
        aria-live="polite"
        aria-atomic="true"
        className="sr-only"
      >
        {message}
      </div>
    </AnnounceContext.Provider>
  );
}
