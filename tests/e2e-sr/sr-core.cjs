/**
 * Screen-reader helper core for NVDA journeys (Guidepup + Playwright).
 *
 * Copy to tests/e2e-sr/sr-core.cjs. Product-specific helpers (a WordPress
 * login and block helpers, an app's route and state seeding) live in the
 * project's tests/e2e-sr/helpers.cjs, which requires this file.
 *
 * How Guidepup captures speech (read from @guidepup/guidepup NVDAClient):
 * a phrase is recorded ONLY around a Guidepup command (`nvda.press`,
 * `nvda.perform`, `nvda.click`, ...). Before each command it cancels current
 * speech, sends the keys, then collects what NVDA says until speech goes
 * quiet. Speech caused by a Playwright click or `page.keyboard` is never
 * logged. So:
 *  - build state with Playwright; nothing to hear there;
 *  - every step whose announcement matters goes through `nvda.*`: focus the
 *    control with Playwright, then activate/navigate with `nvda.press`;
 *  - start NVDA with `test.use({ nvdaStartOptions: { capture: true } })` so
 *    the whole announcement is kept, not just its first chunk.
 */
const fs = require('fs');
const path = require('path');
const { WindowsKeyCodes, WindowsModifiers } = require('@guidepup/guidepup');

// Not under test-results: Playwright wipes that folder at the start of every run.
const LOG_DIR = path.resolve(__dirname, 'logs');

const delay = (ms) => new Promise((r) => setTimeout(r, ms));

/**
 * Bring the browser window to the front so NVDA's keystrokes land in it.
 * Guidepup's navigateToWebContent() also clicks the page body (which has
 * hung in headed Firefox) and presses Ctrl+Home; this only checks the window
 * title through NVDA, requires document.hasFocus() in the page, and
 * Alt+Esc-cycles applications until both hold. Pick a `wanted` regex that
 * cannot match your editor's window title (VS Code shows the folder name). Throws when it never does: every later keystroke would otherwise
 * land in whatever application is in the foreground.
 */
async function focusBrowser(page, nvda, wanted) {
  await page.bringToFront();
  await delay(300);
  const seen = [];
  let focused = false;
  for (let i = 0; i < 8; i++) {
    await nvda.perform(nvda.keyboardCommands.reportTitle);
    const title = await nvda.lastSpokenPhrase();
    // Two independent checks: NVDA's title must match AND the page itself
    // must report OS focus. A loose regex once matched the code editor's
    // window title (it shows the repo folder name) and every keystroke went
    // into a chat box; document.hasFocus() is false in that case.
    const pageHasFocus = await page.evaluate(() => document.hasFocus()).catch(() => false);
    seen.push({ title, pageHasFocus });
    if (wanted.test(title) && pageHasFocus) { focused = true; break; }
    await nvda.perform({ keyCode: [WindowsKeyCodes.Escape], modifiers: [WindowsModifiers.Alt] }, { capture: false });
    await delay(500);
    await page.bringToFront();
    await delay(300);
  }
  if (!focused) {
    throw new Error(`Could not bring the browser to the front for NVDA (title regex ${wanted}). Seen: ${JSON.stringify(seen)}`);
  }
  await nvda.clearSpokenPhraseLog();
  return seen;
}

/**
 * Make sure NVDA is in focus mode. The NVDA+Space toggle is silent in
 * Guidepup's profile, so `probe()` (does the widget react to a key?) decides
 * whether a second toggle is needed. Returns the phrases heard.
 */
async function ensureFocusMode(nvda, probe) {
  const heard = [];
  await nvda.perform(nvda.keyboardCommands.toggleBetweenBrowseAndFocusMode);
  await delay(300);
  heard.push(await nvda.lastSpokenPhrase());
  if (/browse mode/i.test(heard[0])) {
    await nvda.perform(nvda.keyboardCommands.toggleBetweenBrowseAndFocusMode);
    await delay(300);
    heard.push(await nvda.lastSpokenPhrase());
  } else if (!/focus mode/i.test(heard[0]) && probe) {
    const reacted = await probe();
    if (!reacted) {
      await nvda.perform(nvda.keyboardCommands.toggleBetweenBrowseAndFocusMode);
      await delay(300);
      heard.push(await nvda.lastSpokenPhrase());
    }
  }
  return heard;
}

/**
 * Refuse to send a key unless the page still owns OS focus. Every NVDA
 * keystroke goes to whatever window is in front; if the browser lost focus
 * mid-journey (a notification, another app), the keys would land there.
 */
async function assertPageFocused(page, what) {
  const ok = await page.evaluate(() => document.hasFocus()).catch(() => false);
  if (!ok) throw new Error(`Browser lost OS focus before "${what}"; refusing to send keys to another window.`);
}

/** nvda.press with the focus guard. Use this in journeys instead of nvda.press directly. */
async function press(page, nvda, key) {
  await assertPageFocused(page, `press ${key}`);
  await nvda.press(key);
}

/** Describe document.activeElement in the top document. */
async function describeFocus(page) {
  return page.evaluate(() => {
    const a = document.activeElement;
    if (!a) return null;
    const labelEl = a.id ? document.querySelector('label[for="' + a.id + '"]') : null;
    const wrappingLabel = a.closest ? a.closest('label') : null;
    return {
      tag: a.tagName, type: a.type || null, role: a.getAttribute('role'), id: a.id || null,
      className: String(a.className || '').slice(0, 80), ariaLabel: a.getAttribute('aria-label'),
      labelText: labelEl ? labelEl.textContent.trim() : (wrappingLabel ? wrappingLabel.textContent.trim().slice(0, 80) : null),
      text: (a.textContent || '').trim().slice(0, 60),
      focusVisible: a.matches(':focus-visible'),
    };
  });
}

/** True when document.activeElement is inside the given selector. */
async function focusInside(page, selector) {
  return page.evaluate((sel) => { const m = document.querySelector(sel); return Boolean(m && m.contains(document.activeElement)); }, selector);
}

/** Current text of every aria-live region in the top document. */
async function liveText(page) {
  return page.evaluate(() => Array.from(document.querySelectorAll('[aria-live]')).map((e) => e.textContent.trim()).filter(Boolean));
}

/** Tab (through NVDA) until predicate(activeElementInfo) or max presses; returns every stop with its phrase. */
async function tabUntil(page, nvda, predicate, max) {
  const stops = [];
  for (let i = 0; i < max; i++) {
    await press(page, nvda, 'Tab');
    await delay(450);
    const el = await describeFocus(page);
    stops.push({ phrase: await nvda.lastSpokenPhrase(), el });
    if (el && predicate(el)) break;
  }
  return stops;
}

/** Focus an element with Playwright, activate it through NVDA, return the phrase. */
async function activate(page, nvda, locator, key = 'Enter') {
  await locator.waitFor({ timeout: 15000 });
  await locator.focus();
  await delay(300);
  await press(page, nvda, key);
  await delay(400);
  return nvda.lastSpokenPhrase();
}

/**
 * Close the open surface with Escape through NVDA. NVDA consumes the first
 * Escape when it uses it to leave focus mode, so a user may need two. A
 * protocol-level Escape afterwards tells NVDA-swallowed from ignored.
 */
async function closeModalWithEscape(page, nvda, openSelector) {
  const phrases = [];
  let closed = false;
  for (let i = 0; i < 2 && !closed; i++) {
    await press(page, nvda, 'Escape');
    await delay(700);
    phrases.push(await nvda.lastSpokenPhrase());
    closed = (await page.locator(openSelector).count()) === 0;
  }
  let closedByProtocolKey = null;
  let focusBefore = null;
  if (!closed) {
    focusBefore = await describeFocus(page);
    await page.keyboard.press('Escape');
    await delay(700);
    closedByProtocolKey = (await page.locator(openSelector).count()) === 0;
  }
  return { closed, phrases, escapesNeeded: phrases.length, closedByProtocolKey, focusBefore };
}

/** Save the spoken-phrase log (plus anything else) as JSON; return the log. */
async function saveSpeechLog(nvda, name, extra) {
  await delay(500);
  const log = await nvda.spokenPhraseLog();
  fs.mkdirSync(LOG_DIR, { recursive: true });
  fs.writeFileSync(path.join(LOG_DIR, `${name}.json`), JSON.stringify({ name, recordedAt: new Date().toISOString(), phrases: log, ...(extra || {}) }, null, 2));
  return log;
}

function spoke(log, pattern) { return log.some((phrase) => pattern.test(phrase)); }

/** Derived facts every journey reports: unnamed form controls, silent stops, longest phrase. */
function summarizeStops(stops) {
  const unnamedControls = stops
    .filter((s) => s.el && ['SELECT', 'INPUT', 'TEXTAREA'].includes(s.el.tag) && !s.el.ariaLabel && !s.el.labelText)
    .map((s) => ({ id: s.el.id, tag: s.el.tag, phrase: s.phrase }));
  const silentStops = stops.filter((s) => !s.phrase).map((s) => s.el);
  const longestPhrase = stops.reduce((m, s) => Math.max(m, (s.phrase || '').length), 0);
  return { unnamedControls, silentStops, longestPhrase };
}

module.exports = {
  LOG_DIR, delay, focusBrowser, ensureFocusMode, assertPageFocused, press, describeFocus, focusInside, liveText,
  tabUntil, activate, closeModalWithEscape, saveSpeechLog, spoke, summarizeStops,
};
