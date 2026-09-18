/**
 * POURcast-specific helpers for the NVDA journeys. The screen-reader core
 * (focus the browser, Tab walks, Escape handling, speech logs) is ./sr-core.cjs,
 * copied from ~/.claude/skills/shared/qa/templates/sr-core.js.
 *
 * Everything the app knows lives in localStorage, so a journey seeds the keys
 * it needs and reloads (a hash-only navigation does not remount the app).
 */
const core = require('./sr-core.cjs');

// Must NOT match the editor's window title: VS Code shows the repo folder
// ("pourcast - Visual Studio Code"), and a loose /POURcast/i once sent every
// NVDA keystroke into the Claude chat box instead of Firefox.
const TITLE = /Curb Cut to Certification/;

const A11Y_KEY = 'pourcast-a11y';
const PRACTICE_KEYS = ['pourcast-practice-session', 'pourcast-practice-history', 'pourcast-practice-prefs'];

/** Go to a hash route under the app's base (baseURL already includes /pourcast/). */
async function gotoRoute(page, hash) {
  await page.goto(hash.startsWith('#') ? hash : `#${hash}`);
  await page.waitForTimeout(600);
}

/** Merge a patch into the accessibility prefs, then reload so the provider re-reads them. */
async function seedPrefs(page, patch) {
  await page.goto('#/');
  await page.evaluate(({ key, patch }) => {
    const prefs = JSON.parse(localStorage.getItem(key) || '{}');
    localStorage.setItem(key, JSON.stringify({ ...prefs, ...patch }));
  }, { key: A11Y_KEY, patch });
  await page.reload();
  await page.waitForTimeout(500);
}

/** Clear anything a journey may have created. Each Playwright context is fresh, but be explicit. */
async function resetState(page) {
  await page.evaluate((keys) => { keys.forEach((k) => localStorage.removeItem(k)); }, [A11Y_KEY, ...PRACTICE_KEYS]).catch(() => {});
}

/** What NVDA says about the element that currently has focus (NVDA+Tab). */
async function reportFocus(nvda) {
  await nvda.perform(nvda.keyboardCommands.reportCurrentFocus);
  await core.delay(400);
  return nvda.lastSpokenPhrase();
}

module.exports = { ...core, TITLE, A11Y_KEY, gotoRoute, seedPrefs, resetState, reportFocus };
