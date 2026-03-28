/**
 * Returns the current local date as a YYYY-MM-DD string.
 * Use this everywhere dates are stored or compared to ensure timezone consistency.
 */
export function getLocalDateString(date = new Date()) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

/**
 * Returns yesterday's local date as a YYYY-MM-DD string.
 */
export function getYesterdayDateString() {
  const d = new Date();
  d.setDate(d.getDate() - 1);
  return getLocalDateString(d);
}
