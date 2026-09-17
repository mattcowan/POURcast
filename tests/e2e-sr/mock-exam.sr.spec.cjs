/**
 * NVDA journey: start a CPACC mock exam, answer with the radio group,
 * eliminate an option, flag the question, open the question navigator
 * dialog, close it, then submit through the confirm dialog and land on the
 * results heading. Clears the practice session and history afterwards.
 */
const { nvdaTest: test } = require('@guidepup/playwright');
const { expect } = require('@playwright/test');
const h = require('./helpers.cjs');

test.use({ nvdaStartOptions: { capture: true } });

const DIALOG = 'dialog[open]';

test.describe('Mock exam with NVDA', () => {
  test.afterEach(async ({ page }) => { await h.resetState(page); });

  test('start, answer, eliminate, flag, navigator, submit', async ({ page, nvda }) => {
    await h.seedPrefs(page, { theme: 'light', keyboardShortcuts: false });
    await page.evaluate(() => { localStorage.removeItem('pourcast-practice-session'); localStorage.removeItem('pourcast-practice-history'); });
    await h.gotoRoute(page, '#/practice');
    const focusTitles = await h.focusBrowser(page, nvda, h.TITLE);

    const startPhrase = await h.activate(page, nvda, page.getByRole('button', { name: 'Start mock exam' }).first());
    await page.waitForURL(/practice\/test\/cpacc/);
    await h.delay(800);
    const questionFocus = await h.describeFocus(page);
    const questionPhrase = await h.reportFocus(nvda);

    const toRadio = await h.tabUntil(page, nvda, (el) => el.type === 'radio', 6);
    await h.press(page, nvda, 'Space');
    await h.delay(600);
    const selectPhrase = await nvda.lastSpokenPhrase();
    const checked = await page.locator('input[type="radio"]:checked').count();

    const eliminate = page.getByRole('button', { name: 'Eliminate option C' });
    const eliminatePhrase = await h.activate(page, nvda, eliminate);
    await h.delay(600);
    const eliminated = { pressed: await eliminate.getAttribute('aria-pressed'), live: await h.liveText(page) };

    const flag = page.getByRole('button', { name: 'Flag for review' });
    const flagPhrase = await h.activate(page, nvda, flag);
    await h.delay(600);
    const flagged = { text: await page.getByRole('button', { name: 'Flagged' }).count(), live: await h.liveText(page) };

    const navPhrase = await h.activate(page, nvda, page.getByRole('button', { name: /All questions/ }));
    await page.waitForSelector(DIALOG, { timeout: 10000 });
    // 100 buttons take NVDA a moment to walk; the open phrase can come back
    // empty inside Guidepup's capture window. Give it time, then ask NVDA
    // what has focus as a second reading.
    await h.delay(1500);
    const navFocus = await h.describeFocus(page);
    const navFocusPhrase = await h.reportFocus(nvda);
    const navStops = await h.tabUntil(page, nvda, () => false, 3);
    const navClose = await h.closeModalWithEscape(page, nvda, DIALOG);
    const afterNavClose = await h.describeFocus(page);

    const submitPhrase = await h.activate(page, nvda, page.getByRole('button', { name: 'Submit', exact: true }));
    await page.waitForSelector(DIALOG, { timeout: 10000 });
    const submitDialogFocus = await h.describeFocus(page);
    const confirm = page.getByRole('button', { name: 'Submit test' });
    const confirmPhrase = await h.activate(page, nvda, confirm);
    await page.waitForURL(/practice\/results\//, { timeout: 10000 });
    await h.delay(1000);
    const resultsFocus = await h.describeFocus(page);
    const resultsPhrase = await h.reportFocus(nvda);

    const summary = h.summarizeStops([...toRadio, ...navStops]);
    await h.saveSpeechLog(nvda, 'mock-exam', {
      focusTitles, startPhrase, questionFocus, questionPhrase, toRadio, selectPhrase, checked, eliminatePhrase, eliminated,
      flagPhrase, flagged, navPhrase, navFocus, navFocusPhrase, navStops, navClose, afterNavClose, submitPhrase, submitDialogFocus, confirmPhrase, resultsFocus, resultsPhrase, ...summary,
    });

    expect(questionFocus && questionFocus.tag, 'starting the exam focuses the question heading').toBe('H2');
    expect(checked, 'Space checks the radio').toBe(1);
    expect(eliminated.pressed).toBe('true');
    expect(flagged.text).toBe(1);
    expect(navFocus && navFocus.ariaLabel, 'navigator opens with focus on a question button').toMatch(/^Question 1/);
    expect(navClose.closed).toBe(true);
    expect(afterNavClose && afterNavClose.text, 'focus returns to the navigator trigger').toMatch(/All questions/);
    expect(submitDialogFocus && submitDialogFocus.text, 'safe default focused in the submit dialog').toBe('Return to test');
    expect(resultsFocus && resultsFocus.tag, 'results heading focused after submit').toBe('H1');

    expect(questionPhrase).toMatch(/heading/i);
    expect(toRadio[toRadio.length - 1].phrase, 'radio announced with the legend').toMatch(/answer choices/i);
    expect(selectPhrase).toMatch(/checked/i);
    expect(eliminatePhrase, 'eliminate button state spoken').toMatch(/pressed/i);
    expect(navPhrase, 'navigator announced as a dialog on open (D1: needs the grid to mount after the entry announcement)').toMatch(/Question navigator, dialog/i);
    expect(navFocusPhrase, 'focus ends on the current question button').toMatch(/current question, button/i);
    expect(submitPhrase, 'submit confirm announced as a dialog').toMatch(/dialog/i);
    expect(resultsPhrase, 'results heading spoken').toMatch(/passed/i);
    expect(summary.silentStops, `silent Tab stops: ${JSON.stringify(summary.silentStops)}`).toEqual([]);
  });
});
