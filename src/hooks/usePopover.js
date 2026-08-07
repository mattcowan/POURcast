import { useEffect, useRef, useState } from 'react';

/**
 * Non-modal popover behavior for the header panels (stats, data, a11y prefs).
 *
 * On open, focus moves into the panel. The popover closes when the user
 * presses Escape (focus returns to the trigger), moves focus outside the
 * container (Tab away, or opening another popover), or clicks outside.
 * Outside clicks listen on `click` rather than `mousedown` so keyboard-fired
 * activations behave the same as mouse ones — otherwise a keyboard user
 * could hold several popovers open at once, and a single Escape would close
 * them all with competing focus restores.
 *
 * Wire up: `containerRef` on the wrapper around trigger + panel, `triggerRef`
 * on the trigger button, `panelRef` on the `role="dialog"` element
 * (needs `tabIndex={-1}`).
 */
export function usePopover() {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);
  const triggerRef = useRef(null);
  const panelRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return undefined;

    panelRef.current?.focus();

    function handleKeyDown(e) {
      if (e.key === 'Escape') {
        setIsOpen(false);
        triggerRef.current?.focus();
      }
    }

    function handleClickOutside(e) {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        // Browsers that don't move focus when clicking non-focusable areas
        // (Safari, Firefox on macOS) can leave focus inside the panel as it
        // unmounts, dropping it to <body>. Restore it to the trigger — but
        // only then, so browsers that already moved focus keep it where the
        // user clicked.
        if (containerRef.current.contains(document.activeElement)) {
          triggerRef.current?.focus();
        }
        setIsOpen(false);
      }
    }

    function handleFocusOut(e) {
      // Only close when focus lands on another element outside the container.
      // A null relatedTarget can mean the window itself lost focus (e.g. the
      // data panel's native file picker opening) — closing then would unmount
      // the control mid-interaction; outside clicks are handled above.
      if (
        e.relatedTarget &&
        containerRef.current &&
        !containerRef.current.contains(e.relatedTarget)
      ) {
        setIsOpen(false);
      }
    }

    const container = containerRef.current;
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('click', handleClickOutside);
    container?.addEventListener('focusout', handleFocusOut);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('click', handleClickOutside);
      container?.removeEventListener('focusout', handleFocusOut);
    };
  }, [isOpen]);

  return { isOpen, setIsOpen, containerRef, triggerRef, panelRef };
}
