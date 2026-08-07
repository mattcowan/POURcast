import { useRef } from 'react';
import { DatabaseBackup, Download, Upload } from 'lucide-react';
import { useAnnounce } from '../../hooks/useAnnounce';
import { usePopover } from '../../hooks/usePopover';
import { downloadJson } from '../../utils/exportCsv';
import { gatherExport, parseImport, mergeImport } from '../../utils/dataTransfer';

function backupFilename() {
  const d = new Date();
  const stamp = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(
    d.getDate()
  ).padStart(2, '0')}`;
  return `pourcast-backup-${stamp}.json`;
}

export default function DataPanel() {
  const { isOpen, setIsOpen, containerRef, triggerRef, panelRef } = usePopover();
  const fileRef = useRef(null);
  const announce = useAnnounce();

  function handleExport() {
    downloadJson(backupFilename(), gatherExport());
    announce('Data exported. File downloaded.');
  }

  function handleFile(e) {
    const file = e.target.files?.[0];
    e.target.value = ''; // allow re-selecting the same file
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      try {
        const envelope = parseImport(String(reader.result));
        const merged = mergeImport(envelope);
        if (merged.length === 0) {
          // Valid backup but nothing applied (no recognized keys, or writes failed).
          announce('Nothing was imported: no usable data in this file.', 'assertive');
          return;
        }
        announce('Data imported and merged. Reloading.');
        // Hooks read storage once at mount; reload so everything reflects the merge.
        window.location.reload();
      } catch (err) {
        announce(`Could not import: ${err.message}.`, 'assertive');
      }
    };
    reader.onerror = () => {
      announce('Could not import: the file could not be read.', 'assertive');
    };
    reader.readAsText(file);
  }

  return (
    <div className="relative" ref={containerRef}>
      <button
        ref={triggerRef}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="dialog"
        aria-label="Export or import data"
        className="p-2 rounded-lg transition-colors"
        style={{
          color: 'var(--text-muted)',
          backgroundColor: isOpen ? 'var(--bg-surface-hover)' : 'transparent',
        }}
      >
        <DatabaseBackup size={20} aria-hidden="true" />
      </button>

      {isOpen && (
        <div
          ref={panelRef}
          tabIndex={-1}
          role="dialog"
          aria-label="Export or import data"
          className="absolute right-0 top-full mt-2 w-80 rounded-xl border-2 p-5 shadow-lg z-50"
          style={{
            backgroundColor: 'var(--bg-surface)',
            borderColor: 'var(--border-default)',
          }}
        >
          <h2 className="text-lg font-bold mb-1" style={{ color: 'var(--text-primary)' }}>
            Export &amp; import
          </h2>
          <p className="text-base mb-4" style={{ color: 'var(--text-muted)' }}>
            Move your settings, progress, and test history between devices. Importing merges
            into this device. Nothing is uploaded anywhere.
          </p>

          <div className="flex flex-col gap-2">
            <button
              onClick={handleExport}
              className="flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-base font-semibold transition-colors border-2"
              style={{
                backgroundColor: 'var(--bg-accent)',
                borderColor: 'var(--text-accent)',
                color: 'var(--text-accent)',
              }}
            >
              <Download size={18} aria-hidden="true" />
              Export to file
            </button>

            <button
              onClick={() => fileRef.current?.click()}
              className="flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-base font-semibold transition-colors border-2"
              style={{
                backgroundColor: 'var(--bg-surface)',
                borderColor: 'var(--border-default)',
                color: 'var(--text-secondary)',
              }}
            >
              <Upload size={18} aria-hidden="true" />
              Import from file
            </button>

            <input
              ref={fileRef}
              type="file"
              accept="application/json,.json"
              onChange={handleFile}
              className="sr-only"
              aria-hidden="true"
              tabIndex={-1}
            />
          </div>
        </div>
      )}
    </div>
  );
}
