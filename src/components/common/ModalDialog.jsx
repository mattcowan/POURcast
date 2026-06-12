import { useEffect, useRef } from 'react';

/**
 * Shared modal built on the native <dialog> element: focus trap, Escape to
 * close, and focus restoration to the invoker all come from the platform.
 * Initial focus goes to the first focusable child (or one with autoFocus).
 */
export default function ModalDialog({ isOpen, onClose, labelledBy, className = '', children }) {
  const dialogRef = useRef(null);
  const onCloseRef = useRef(onClose);

  useEffect(() => {
    onCloseRef.current = onClose;
  }, [onClose]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (isOpen && !dialog.open) {
      dialog.showModal();
    } else if (!isOpen && dialog.open) {
      dialog.close();
    }
  }, [isOpen]);

  // Native close (Escape) needs to sync React state
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return undefined;
    const handleClose = () => onCloseRef.current?.();
    dialog.addEventListener('close', handleClose);
    return () => dialog.removeEventListener('close', handleClose);
  }, []);

  function handleBackdropClick(e) {
    if (e.target === dialogRef.current) {
      dialogRef.current.close();
    }
  }

  return (
    <dialog
      ref={dialogRef}
      className={`practice-dialog ${className}`}
      aria-labelledby={labelledBy}
      onClick={handleBackdropClick}
    >
      {children}
    </dialog>
  );
}
