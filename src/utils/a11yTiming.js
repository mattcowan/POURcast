/**
 * Delay before moving focus after a DOM state change that a screen reader
 * must see first (aria-expanded flipping, a dialog finishing its open).
 *
 * Firefox hands NVDA the focus event before the attribute/tree change when
 * both happen in the same task, so a synchronous focus() after a state
 * update was read with the stale state (QA 2026-09-16, D1/D2). One value,
 * shared by every site that needs it, so the workaround is tuned in one
 * place and removed in one place when it stops being necessary.
 */
export const FOCUS_AFTER_A11Y_TREE_MS = 50;

/**
 * Delay before mounting a large control grid inside a dialog that just
 * opened. The screen reader reads the dialog on entry asynchronously; if
 * ~100 buttons land in the tree before that happens, NVDA on Firefox drops
 * the announcement entirely (QA 2026-09-17, D1: 10 buttons announced, 100
 * did not, and a 0 ms deferral was not enough).
 */
export const DIALOG_GRID_MOUNT_DELAY_MS = 250;
