/**
 * Headless QA sweep for POURcast (run: npm run test:qa).
 *
 * For every route: landmarks and headings, a keyboard walk with focus-visible
 * checks, an axe run per theme (full rules on light, color-contrast on the
 * rest), and a 320 px reflow check. Plus the app-specific journeys that the
 * 2026-09-16 QA found worth pinning: the skip link must leave the page
 * intact, the results-page retry buttons must start a quiz, and the
 * confirm-answer mode must not grade until asked.
 *
 * Failing assertions are information, not noise: they encode findings from
 * _private/qa-2026-09-16-app.md until those are fixed.
 *
 * Template: ~/.claude/skills/web-app-qa/templates/sweep.spec.js
 */
const fs = require('fs');
const path = require('path');
const { test, expect } = require('@playwright/test');
const AxeBuilder = require('@axe-core/playwright').default;

const ROUTES = ['#/', '#/quiz/domain1', '#/learn', '#/learn/medical-model', '#/practice', '#/activity', '#/flagged/cpacc'];
const THEMES = ['light', 'dark', 'hc-light', 'hc-dark'];
const A11Y_KEY = 'pourcast-a11y';
const MAX_TAB_STOPS = 25;

const OUT_DIR = path.resolve(__dirname, 'qa-output');
const results = { recordedAt: new Date().toISOString(), routes: {}, journeys: {} };

async function seedTheme(page, theme) {
  await page.evaluate(({ key, theme }) => {
    const prefs = JSON.parse(localStorage.getItem(key) || '{}');
    prefs.theme = theme;
    localStorage.setItem(key, JSON.stringify(prefs));
  }, { key: A11Y_KEY, theme });
  await page.reload();
  await page.waitForTimeout(400);
}

// A visually hidden input draws its ring on the wrapping label (.quiz-option,
// .practice-option), so a stop counts as ringed when either the element or
// its label has a visible outline.
const describeFocus = (page) => page.evaluate(() => {
  const a = document.activeElement; if (!a) return null;
  const own = getComputedStyle(a);
  const label = a.closest('label');
  const lab = label ? getComputedStyle(label) : null;
  const visible = (cs) => cs && cs.outlineStyle !== 'none' && parseFloat(cs.outlineWidth) > 0;
  return { tag: a.tagName, role: a.getAttribute('role'), label: a.getAttribute('aria-label'), text: (a.textContent || '').trim().slice(0, 50), focusVisible: a.matches(':focus-visible'), outline: `${own.outlineStyle} ${own.outlineWidth}`, labelOutline: lab ? `${lab.outlineStyle} ${lab.outlineWidth}` : null, ringed: visible(own) || visible(lab) };
});

const answerFirstOption = async (page) => {
  const radio = page.locator('label.quiz-option').first();
  if (await radio.count()) {
    await radio.click();
    await page.getByRole('button', { name: 'Check answer' }).click();
  } else {
    await page.getByRole('group', { name: 'Answer options' }).getByRole('button').first().click();
  }
  await page.waitForTimeout(250);
};

test.afterAll(async () => {
  fs.mkdirSync(OUT_DIR, { recursive: true });
  fs.writeFileSync(path.join(OUT_DIR, `sweep-${Date.now()}.json`), JSON.stringify(results, null, 2));
});

for (const route of ROUTES) {
  test(`structure + keyboard walk: ${route}`, async ({ page }) => {
    await page.goto(route);
    await page.waitForTimeout(500);
    const structure = await page.evaluate(() => ({
      landmarks: [...document.querySelectorAll('header,nav,main,footer,aside,[role]')].map((e) => e.tagName + (e.getAttribute('role') ? `[${e.getAttribute('role')}]` : '') + (e.getAttribute('aria-label') ? ` "${e.getAttribute('aria-label')}"` : '')),
      headings: [...document.querySelectorAll('h1,h2,h3,h4')].filter((h) => !h.closest('[hidden]') && !h.closest('dialog:not([open])')).map((h) => `${h.tagName}: ${h.textContent.trim().slice(0, 60)}`),
    }));
    const stops = [];
    for (let i = 0; i < MAX_TAB_STOPS; i++) {
      await page.keyboard.press('Tab');
      const el = await describeFocus(page);
      stops.push(el);
      if (el && el.tag === 'BODY') break;
    }
    const noRing = stops.filter((s) => s && s.tag !== 'BODY' && s.focusVisible && !s.ringed);
    results.routes[route] = { ...(results.routes[route] || {}), structure, stops, noRing };
    expect(structure.headings.filter((h) => h.startsWith('H1')).length, 'exactly one H1').toBe(1);
    expect(noRing, `focus-visible stops with no outline: ${JSON.stringify(noRing)}`).toEqual([]);
  });

  test(`axe per theme: ${route}`, async ({ page }) => {
    const axe = {};
    for (const theme of THEMES) {
      await page.goto(route);
      await seedTheme(page, theme);
      const applied = await page.evaluate(() => document.documentElement.getAttribute('data-theme'));
      expect(applied, 'theme must be applied before axe runs').toBe(theme);
      const analyze = async () => {
        const builder = new AxeBuilder({ page });
        const run = theme === 'light'
          ? await builder.withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa', 'best-practice']).analyze()
          : await builder.withRules(['color-contrast']).analyze();
        return run.violations.map((v) => ({ id: v.id, impact: v.impact, nodes: v.nodes.slice(0, 5).map((n) => ({ target: n.target.join(' '), data: n.any[0] && n.any[0].data ? { fg: n.any[0].data.fgColor, bg: n.any[0].data.bgColor, ratio: n.any[0].data.contrastRatio } : null })) }));
      };
      // axe skips disabled controls, so the quiz must be scanned both before
      // answering (radios + "Check answer" live) and after (feedback panel).
      axe[theme] = await analyze();
      if (route === '#/quiz/domain1') {
        await page.locator('label.quiz-option').first().click();
        // Buttons animate their colors (transition-colors, 150 ms); axe
        // samples the interpolated values if it runs before they settle.
        await page.waitForTimeout(300);
        axe[`${theme} (option picked)`] = await analyze();
        await answerFirstOption(page);
        await page.waitForTimeout(300);
        axe[`${theme} (answered)`] = await analyze();
      }
    }
    results.routes[route] = { ...(results.routes[route] || {}), axe };
    const serious = Object.entries(axe).flatMap(([t, vs]) => vs.filter((v) => ['serious', 'critical'].includes(v.impact)).map((v) => `${t}:${v.id}`));
    expect(serious, `serious/critical axe violations: ${serious.join(', ')}`).toEqual([]);
  });

  test(`reflow at 320px: ${route}`, async ({ page }) => {
    await page.setViewportSize({ width: 320, height: 700 });
    await page.goto(route);
    await page.waitForTimeout(500);
    const reflow = await page.evaluate(() => ({
      scrollWidth: document.documentElement.scrollWidth,
      innerWidth: window.innerWidth,
      wide: [...document.querySelectorAll('body *')].filter((e) => e.getBoundingClientRect().right > window.innerWidth + 1 && getComputedStyle(e).display !== 'none').slice(0, 5).map((e) => `${e.tagName}.${String(e.className).slice(0, 40)} right=${Math.round(e.getBoundingClientRect().right)}`),
    }));
    results.routes[route] = { ...(results.routes[route] || {}), reflow };
    expect(reflow.scrollWidth, `horizontal overflow: ${reflow.wide.join(' | ')}`).toBeLessThanOrEqual(reflow.innerWidth);
  });
}

test('skip link keeps the page content (hash router)', async ({ page }) => {
  await page.goto('#/');
  await page.waitForTimeout(400);
  const before = await page.evaluate(() => document.querySelector('main').innerText.length);
  await page.keyboard.press('Tab');
  await page.keyboard.press('Enter');
  await page.waitForTimeout(400);
  const after = await page.evaluate(() => ({ len: document.querySelector('main').innerText.length, focus: document.activeElement.tagName, url: location.hash }));
  results.journeys.skipLink = { before, after };
  expect(after.focus, 'skip link focuses main').toBe('MAIN');
  expect(after.len, 'main still has content after the skip link').toBeGreaterThan(before / 2);
});

test('results page retry buttons start a quiz', async ({ page }) => {
  await page.goto('#/quiz/domain2');
  await page.waitForTimeout(500);
  for (let i = 0; i < 10; i++) {
    await answerFirstOption(page);
    await page.getByRole('button', { name: 'Continue' }).click();
    await page.waitForTimeout(200);
  }
  await expect(page).toHaveURL(/#\/results/);
  await page.getByRole('button', { name: 'Retry All Questions' }).click();
  await page.waitForTimeout(900);
  results.journeys.retryAll = { url: page.url() };
  expect(page.url(), 'Retry All should land on the quiz, not the dashboard').toMatch(/#\/quiz\/domain2/);
});

test('flagging a question keeps keyboard focus on the toggle', async ({ page }) => {
  await page.goto('#/quiz/domain1');
  await page.waitForTimeout(500);
  await answerFirstOption(page);
  const flag = page.getByRole('button', { name: 'Flag this question' });
  await flag.focus();
  await page.keyboard.press('Enter');
  await page.waitForTimeout(200);
  const focused = await page.evaluate(() => ({ tag: document.activeElement.tagName, text: document.activeElement.textContent.trim(), pressed: document.activeElement.getAttribute('aria-pressed') }));
  results.journeys.flagFocus = focused;
  expect(focused.tag).toBe('BUTTON');
  expect(focused.text).toBe('Flagged');
  expect(focused.pressed).toBe('true');
  await page.keyboard.press('Enter');
  await page.waitForTimeout(200);
  const unflagged = await page.evaluate(() => document.activeElement.textContent.trim());
  expect(unflagged, 'unflagging keeps focus on the same button').toBe('Flag this question');
});

test('heading receives focus after a reload on a page without the page-focus hook', async ({ page }) => {
  await page.goto('#/quiz/domain3');
  await page.reload();
  await page.waitForTimeout(500);
  for (let i = 0; i < 10; i++) {
    await answerFirstOption(page);
    await page.getByRole('button', { name: 'Continue' }).click();
    await page.waitForTimeout(200);
  }
  await expect(page).toHaveURL(/#\/results/);
  await page.waitForTimeout(300);
  const focused = await page.evaluate(() => document.activeElement.tagName);
  results.journeys.reloadFocus = focused;
  expect(focused, 'results H1 focused even though the quiz page was reloaded').toBe('H1');
});

test('Back to the first entry still focuses the heading', async ({ page }) => {
  await page.goto('#/');
  await page.reload();
  await page.waitForTimeout(400);
  await page.getByRole('link', { name: /Disabilities, Barriers/ }).click(); // PUSH into a page without the hook
  await page.waitForTimeout(400);
  await page.goBack(); // POP back to the load entry
  await page.waitForTimeout(500);
  const focused = await page.evaluate(() => ({ tag: document.activeElement.tagName, text: document.activeElement.textContent.trim() }));
  results.journeys.backFocus = focused;
  expect(focused.tag, 'dashboard H1 focused after Back').toBe('H1');
});

test('closing one popover does not steal focus from a sibling opened right after', async ({ page }) => {
  await page.goto('#/');
  await page.waitForTimeout(400);
  await page.getByRole('button', { name: 'Your stats' }).focus();
  await page.keyboard.press('Enter');
  await page.waitForTimeout(150);
  // Escape (schedules the deferred focus restore) and open the sibling in the same tick.
  await page.evaluate(() => {
    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
    document.querySelector('button[aria-label="Accessibility settings"]').click();
  });
  await page.waitForTimeout(300);
  const state = await page.evaluate(() => ({ dialog: document.querySelector('[role="dialog"]')?.getAttribute('aria-label') || null, focusInDialog: !!document.activeElement.closest('[role="dialog"]') }));
  results.journeys.popoverRace = state;
  expect(state.dialog).toBe('Accessibility preferences');
  expect(state.focusInDialog, 'focus stays in the newly opened popover').toBe(true);
});

test('letter shortcut stages a pick and Enter checks it', async ({ page }) => {
  await page.goto('#/quiz/domain1');
  await page.evaluate((key) => localStorage.setItem(key, JSON.stringify({ keyboardShortcuts: true, quizAutoGrade: false })), A11Y_KEY);
  await page.reload();
  await page.waitForTimeout(500);
  await page.locator('h2').first().focus();
  await page.keyboard.press('b');
  await page.waitForTimeout(100);
  const afterKey = await page.evaluate(() => ({ tag: document.activeElement.tagName, type: document.activeElement.type, checked: document.activeElement.checked }));
  expect(afterKey, 'the picked radio has focus').toEqual({ tag: 'INPUT', type: 'radio', checked: true });
  await expect(page.locator('[role="region"]')).toHaveCount(0);
  await page.keyboard.press('Enter');
  await expect(page.locator('[role="region"]')).toHaveAttribute('aria-label', /answer feedback/);
  await page.evaluate((key) => localStorage.removeItem(key), A11Y_KEY);
});

test('question navigator focuses the current question unless the user moved first', async ({ page }) => {
  await page.goto('#/practice');
  await page.evaluate(() => localStorage.removeItem('pourcast-practice-session'));
  await page.reload();
  await page.waitForTimeout(400);
  await page.getByRole('button', { name: 'Start mock exam' }).first().click();
  await page.waitForTimeout(500);
  const focusName = () => page.evaluate(() => { const a = document.activeElement; return (a.getAttribute('aria-label') || a.textContent.trim()).slice(0, 40); });
  // Untouched: after the grid mounts, focus lands on the current question.
  await page.getByRole('button', { name: /All questions/ }).focus();
  await page.keyboard.press('Enter');
  await page.waitForTimeout(600);
  const untouched = await focusName();
  await page.keyboard.press('Escape');
  await page.waitForTimeout(200);
  // User tabs right away: the deferred focus must not steal it back.
  await page.getByRole('button', { name: /All questions/ }).focus();
  await page.keyboard.press('Enter');
  await page.waitForTimeout(60);
  await page.keyboard.press('Tab');
  const afterTab = await focusName();
  await page.waitForTimeout(600);
  const afterDelay = await focusName();
  await page.keyboard.press('Escape');
  await page.evaluate(() => localStorage.removeItem('pourcast-practice-session'));
  results.journeys.navigatorFocus = { untouched, afterTab, afterDelay };
  expect(untouched).toMatch(/^Question 1:/);
  expect(afterDelay, 'focus stays where the user put it').toBe(afterTab);
  expect(afterDelay).not.toMatch(/^Question 1:/);
});

test('confirm-answer mode grades only on request', async ({ page }) => {
  await page.goto('#/quiz/domain1');
  await page.evaluate((key) => localStorage.removeItem(key), A11Y_KEY);
  await page.reload();
  await page.waitForTimeout(500);
  const radios = page.getByRole('radio');
  await expect(radios).toHaveCount(4);
  // aria-disabled (not disabled) keeps the button focusable; Playwright's
  // click() refuses aria-disabled targets, so activate it by keyboard.
  await page.getByRole('button', { name: 'Check answer' }).focus();
  await page.keyboard.press('Enter');
  await expect(page.locator('[role="region"]')).toHaveCount(0);
  await expect(page.locator('[role="status"]')).toHaveText(/Choose an answer first/);
  await radios.first().focus();
  await page.keyboard.press('Space');
  await page.keyboard.press('ArrowDown');
  await expect(radios.nth(1)).toBeChecked();
  await expect(page.locator('[role="region"]')).toHaveCount(0);
  await page.keyboard.press('Enter');
  await expect(page.locator('[role="region"]')).toHaveAttribute('aria-label', /answer feedback/);
  results.journeys.confirmMode = 'ok';
});
