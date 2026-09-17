/**
 * NVDA journey: the header popovers (usePopover). Opens the Accessibility
 * settings dialog through NVDA, walks its controls, flips the new
 * "Grade as soon as I pick an answer" switch, closes with Escape and checks
 * focus returns to the trigger. Then a shorter pass over the stats popover.
 */
const { nvdaTest: test } = require('@guidepup/playwright');
const { expect } = require('@playwright/test');
const h = require('./helpers.cjs');

test.use({ nvdaStartOptions: { capture: true } });

const DIALOG = '[role="dialog"]';

test.describe('Header popovers with NVDA', () => {
  test.afterEach(async ({ page }) => { await h.resetState(page); });

  test('accessibility settings: open, walk, toggle switch, escape, focus restore', async ({ page, nvda }) => {
    await h.seedPrefs(page, { theme: 'light', quizAutoGrade: false });
    await h.gotoRoute(page, '#/');
    const focusTitles = await h.focusBrowser(page, nvda, h.TITLE);

    const trigger = page.getByRole('button', { name: 'Accessibility settings' });
    const openPhrase = await h.activate(page, nvda, trigger);
    await page.waitForSelector(DIALOG, { timeout: 10000 });
    const focusAtOpen = await h.describeFocus(page);

    const stops = await h.tabUntil(page, nvda, () => false, 8);

    const sw = page.getByRole('switch', { name: 'Grade as soon as I pick an answer' });
    await sw.scrollIntoViewIfNeeded();
    await sw.focus();
    await h.delay(400);
    const switchFocusPhrase = await h.reportFocus(nvda);
    await h.press(page, nvda, 'Space');
    await h.delay(800);
    const toggled = { phrase: await nvda.lastSpokenPhrase(), checked: await sw.getAttribute('aria-checked'), inside: await h.focusInside(page, DIALOG) };
    await h.press(page, nvda, 'Space');
    await h.delay(600);
    const toggledBack = { phrase: await nvda.lastSpokenPhrase(), checked: await sw.getAttribute('aria-checked') };

    const close = await h.closeModalWithEscape(page, nvda, DIALOG);
    const focusAfterClose = await h.describeFocus(page);

    const summary = h.summarizeStops(stops);
    await h.saveSpeechLog(nvda, 'accessibility-panel', { focusTitles, openPhrase, focusAtOpen, stops, switchFocusPhrase, toggled, toggledBack, close, focusAfterClose, ...summary });

    expect(focusAtOpen && focusAtOpen.role, 'focus moves into the dialog on open').toBe('dialog');
    expect(toggled.checked, 'Space turns the switch on').toBe('true');
    expect(toggled.inside, 'focus stays in the dialog after toggling').toBe(true);
    expect(toggledBack.checked, 'Space again turns it off').toBe('false');
    expect(close.closed, 'Escape closes the popover').toBe(true);
    expect(focusAfterClose && focusAfterClose.ariaLabel, 'focus returns to the trigger').toBe('Accessibility settings');

    expect(openPhrase, 'dialog announced with its name').toMatch(/dialog/i);
    expect(openPhrase, 'dialog name spoken').toMatch(/accessibility preferences/i);
    expect(switchFocusPhrase, 'switch announced with its label').toMatch(/grade as soon as i pick an answer/i);
    expect(toggled.phrase, 'switch state change spoken').toMatch(/on|checked|pressed/i);
    expect(summary.longestPhrase, 'no single stop reads the whole panel').toBeLessThan(400);
    expect(summary.silentStops, `silent Tab stops: ${JSON.stringify(summary.silentStops)}`).toEqual([]);
  });

  test('stats popover: open and escape', async ({ page, nvda }) => {
    await h.gotoRoute(page, '#/');
    await h.focusBrowser(page, nvda, h.TITLE);
    const openPhrase = await h.activate(page, nvda, page.getByRole('button', { name: 'Your stats' }));
    await page.waitForSelector(DIALOG, { timeout: 10000 });
    // With no lessons recorded the popover has no focusable children, so a
    // Tab would leave it (and close it). Read the content, then Escape.
    const stops = [];
    const close = await h.closeModalWithEscape(page, nvda, DIALOG);
    const focusAfterClose = await h.describeFocus(page);
    await h.saveSpeechLog(nvda, 'stats-popover', { openPhrase, stops, close, focusAfterClose });
    expect(openPhrase).toMatch(/dialog/i);
    expect(openPhrase).toMatch(/your progress/i);
    expect(close.closed, 'Escape closes the stats popover').toBe(true);
    expect(
      focusAfterClose && (focusAfterClose.ariaLabel || focusAfterClose.text),
      'focus returns to the stats trigger',
    ).toMatch(/Your stats/i);
  });
});
