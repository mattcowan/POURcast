import { createContext, useState, useCallback } from 'react';

export const AnnounceContext = createContext(null);

export default function LiveRegion({ children }) {
  const [message, setMessage] = useState('');
  const [urgentMessage, setUrgentMessage] = useState('');

  // announce(text) is polite by default; announce(text, 'assertive') interrupts
  // (reserved for urgent messages like final time warnings).
  const announce = useCallback((text, priority = 'polite') => {
    if (priority === 'assertive') {
      setUrgentMessage('');
      requestAnimationFrame(() => setUrgentMessage(text));
    } else {
      setMessage('');
      // Brief delay ensures screen readers detect the change
      requestAnimationFrame(() => setMessage(text));
    }
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
      <div
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
        className="sr-only"
      >
        {urgentMessage}
      </div>
    </AnnounceContext.Provider>
  );
}
