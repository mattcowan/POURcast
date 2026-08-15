/**
 * Escapes a CSV field: wraps in quotes if it contains commas, quotes, or newlines.
 * Internal quotes are doubled per RFC 4180.
 */
function escapeField(value) {
  let str = String(value ?? '');
  // Neutralize formula injection for spreadsheet apps
  if (/^[=+\-@]/.test(str)) {
    str = '\t' + str;
  }
  if (str.includes(',') || str.includes('"') || str.includes('\n') || str.includes('\t')) {
    return `"${str.replace(/"/g, '""')}"`;
  }
  return str;
}

/**
 * Generates a CSV string and triggers a browser download.
 * @param {string} filename - The download filename (e.g., "export.csv")
 * @param {string[]} headers - Column header names
 * @param {string[][]} rows - Array of row arrays (each row is an array of field values)
 */
export function downloadCsv(filename, headers, rows) {
  const lines = [
    headers.map(escapeField).join(','),
    ...rows.map((row) => row.map(escapeField).join(',')),
  ];
  const csv = lines.join('\n');
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  triggerDownload(filename, blob);
}

/**
 * Serializes an object to pretty-printed JSON and triggers a browser download.
 * @param {string} filename - The download filename (e.g., "backup.json")
 * @param {unknown} data - Any JSON-serializable value
 */
export function downloadJson(filename, data) {
  const json = JSON.stringify(data, null, 2);
  const blob = new Blob([json], { type: 'application/json;charset=utf-8;' });
  triggerDownload(filename, blob);
}

function triggerDownload(filename, blob) {
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  // The synthetic click must not bubble to document-level listeners — the
  // header popovers close on outside clicks, and this link counts as one.
  link.addEventListener('click', (e) => e.stopPropagation());
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
