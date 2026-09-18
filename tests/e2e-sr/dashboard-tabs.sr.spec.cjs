/**
 * NVDA journey: the course selector tablist on the dashboard (APG tabs
 * pattern with automatic activation). Arrow keys must move focus and
 * selection together and announce the new tab with its position.
 */
const { nvdaTest: test } = require('@guidepup/playwright');
const { expect } = require('@playwright/test');
const h = require('./helpers.cjs');

test.use({ nvdaStartOptions: { capture: true } });

test.describe('Course selector tabs with NVDA', () => {
  test.afterEach(async ({ page }) => { await h.resetState(page); });

  test('arrow keys move selection and announce the tab', async ({ page, nvda }) => {
    await h.gotoRoute(page, '#/');
    await page.evaluate(() => localStorage.setItem('pourcast-course', JSON.stringify('cpacc')));
    await page.reload();
    await page.waitForTimeout(500);
    await h.focusBrowser(page, nvda, h.TITLE);

    await page.locator('#cpacc-tab').focus();
    await h.delay(300);
    const cpaccPhrase = await h.reportFocus(nvda);

    await h.press(page, nvda, 'ArrowRight');
    await h.delay(700);
    const wasPhrase = await nvda.lastSpokenPhrase();
    const afterRight = { focus: await h.describeFocus(page), wasSelected: await page.locator('#was-tab').getAttribute('aria-selected'), h1: await page.locator('h1:visible').first().textContent() };

    await h.press(page, nvda, 'Home');
    await h.delay(700);
    const homePhrase = await nvda.lastSpokenPhrase();
    const afterHome = { cpaccSelected: await page.locator('#cpacc-tab').getAttribute('aria-selected') };

    // Tab out of the tablist should land in the visible panel, not the hidden one.
    await h.press(page, nvda, 'Tab');
    await h.delay(500);
    const afterTab = { phrase: await nvda.lastSpokenPhrase(), focus: await h.describeFocus(page) };

    await h.saveSpeechLog(nvda, 'course-tabs', { cpaccPhrase, wasPhrase, afterRight, homePhrase, afterHome, afterTab });

    expect(afterRight.wasSelected).toBe('true');
    expect(afterRight.h1).toMatch(/WAS/);
    expect(afterHome.cpaccSelected).toBe('true');
    expect(cpaccPhrase, 'tab role and selection state announced').toMatch(/tab/i);
    expect(cpaccPhrase).toMatch(/selected/i);
    expect(wasPhrase, 'new tab announced with its name').toMatch(/WAS/);
    expect(wasPhrase, 'position in set announced').toMatch(/2 of 2/i);
    expect(afterTab.focus && afterTab.focus.text, 'Tab lands on the first link in the CPACC panel').toMatch(/CPACC Mock Exam/i);
  });
});
