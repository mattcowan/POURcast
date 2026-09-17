/**
 * NVDA journey: a quick-quiz question in the default confirm-answer mode.
 * Fresh load of /quiz/domain1 → heading → radios → Enter to check → feedback
 * region → Continue → next heading. Records every phrase; the assertions at
 * the end encode what a screen-reader user should hear.
 */
const { nvdaTest: test } = require('@guidepup/playwright');
const { expect } = require('@playwright/test');
const h = require('./helpers.cjs');

test.use({ nvdaStartOptions: { capture: true } });

test.describe('Quick quiz (confirm mode) with NVDA', () => {
  test.afterEach(async ({ page }) => { await h.resetState(page); });

  test('heading, radio group, check answer, feedback, continue', async ({ page, nvda }) => {
    await h.seedPrefs(page, { keyboardShortcuts: false, quizAutoGrade: false, theme: 'light' });
    await h.gotoRoute(page, '#/quiz/domain1');
    const focusTitles = await h.focusBrowser(page, nvda, h.TITLE);

    // Fresh load: QuizCard focuses the question heading.
    const landingPhrase = await h.reportFocus(nvda);
    const landingFocus = await h.describeFocus(page);

    // Tab into the radio group; record what the first option announces.
    const stops = await h.tabUntil(page, nvda, (el) => el.type === 'radio', 4);
    const firstRadio = stops[stops.length - 1];

    // Arrow to the second option (checks it), then Enter to check the answer.
    await h.press(page, nvda, 'ArrowDown');
    await h.delay(600);
    const arrowPhrase = await nvda.lastSpokenPhrase();
    const pendingChecked = await page.locator('input[type="radio"]').nth(1).isChecked();
    const noFeedbackYet = (await page.locator('[role="region"]').count()) === 0;

    await h.press(page, nvda, 'Enter');
    await h.delay(1200);
    const checkPhrase = await nvda.lastSpokenPhrase();
    const feedbackFocus = await h.describeFocus(page);
    const feedbackLabel = await page.locator('[role="region"]').first().getAttribute('aria-label').catch(() => null);
    const live = await h.liveText(page);

    // Browse-mode read back up through the graded options: the disabled
    // radios are not Tab stops, so this is how a screen-reader user learns
    // which option was correct. Focus is on the feedback region (not a form
    // control), so NVDA is in browse mode and ArrowUp moves by line.
    const readBack = [];
    for (let i = 0; i < 20; i++) {
      await h.press(page, nvda, 'ArrowUp');
      await h.delay(500);
      const phrase = await nvda.lastSpokenPhrase();
      readBack.push(phrase);
      if (/level 2/i.test(phrase)) break; // reached the question heading (the only level-2 heading on the card)
    }

    // Walk the feedback panel to Continue (Tab from wherever browse mode left us).
    const feedbackStops = await h.tabUntil(page, nvda, (el) => /^Continue$/.test(el.text), 12);
    await h.press(page, nvda, 'Enter');
    await h.delay(1000);
    const nextPhrase = await nvda.lastSpokenPhrase();
    const nextFocus = await h.describeFocus(page);
    const nextLive = await h.liveText(page);

    const summary = h.summarizeStops([...stops, ...feedbackStops]);
    const log = await h.saveSpeechLog(nvda, 'quiz-confirm-mode', {
      focusTitles, landingPhrase, landingFocus, stops, firstRadio, arrowPhrase, pendingChecked, noFeedbackYet,
      checkPhrase, feedbackFocus, feedbackLabel, live, readBack, feedbackStops, nextPhrase, nextFocus, nextLive, ...summary,
    });

    // Product.
    expect(landingFocus && landingFocus.tag, 'fresh load focuses the question heading').toBe('H2');
    expect(pendingChecked, 'ArrowDown checks the second radio without grading').toBe(true);
    expect(noFeedbackYet, 'no feedback until the answer is checked').toBe(true);
    expect(feedbackLabel, 'Enter on a radio grades the pending answer').toMatch(/answer feedback/i);
    expect(feedbackFocus && feedbackFocus.role, 'focus moves to the feedback region').toBe('region');
    expect(nextFocus && nextFocus.tag, 'Continue focuses the next question heading').toBe('H2');

    // Screen reader.
    expect(landingPhrase, 'heading announced with its level').toMatch(/heading|level 2/i);
    expect(firstRadio.phrase, 'first option announced as a radio button').toMatch(/radio/i);
    expect(firstRadio.phrase, 'radio group named by the legend').toMatch(/answer options/i);
    expect(checkPhrase, 'feedback region announced by name').toMatch(/feedback/i);
    expect(h.spoke(log, /correct|incorrect|not quite/i), 'the result was spoken').toBe(true);
    expect(readBack.join(' | '), 'browse mode reads the result icons on the graded options').toMatch(/Correct answer|incorrect selection/i);
    expect(summary.silentStops, `silent Tab stops: ${JSON.stringify(summary.silentStops)}`).toEqual([]);
    expect(summary.unnamedControls, `unnamed controls: ${JSON.stringify(summary.unnamedControls)}`).toEqual([]);
  });
});
