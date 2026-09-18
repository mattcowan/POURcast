/**
 * Playwright config for the screen-reader (NVDA) journeys in tests/e2e-sr.
 *
 * Separate from playwright.config.cjs on purpose: these tests drive a real,
 * headed Firefox with a silent portable NVDA attached (Guidepup), so they
 * cannot run in parallel, cannot run headless, and take the keyboard while
 * they run. Run them with `npm run test:sr` on demand, never on every PR.
 *
 * Prerequisites (once per machine):
 *   npx @guidepup/setup setup --ci
 *   npx @guidepup/setup install nvda
 *   npx playwright install firefox
 *
 * Template: ~/.claude/skills/shared/qa/templates/playwright.nvda.config.js
 */
const { defineConfig, devices } = require('@playwright/test');
const { screenReaderConfig } = require('@guidepup/playwright');

const project = {
  // The app is served under Vite's `base` (/pourcast/); routes hang off the hash.
  baseURL: process.env.QA_BASE_URL || 'http://localhost:4173/pourcast/',
  storageState: null,   // no login: everything lives in localStorage
  globalSetup: null,
  webServer: {
    command: 'npm run preview -- --port 4173 --strictPort',
    url: 'http://localhost:4173/pourcast/',
    reuseExistingServer: true,
    timeout: 60 * 1000,
  },
};

module.exports = defineConfig({
  ...screenReaderConfig,
  testDir: './tests/e2e-sr',
  testMatch: /.*\.sr\.spec\.cjs/,
  timeout: 5 * 60 * 1000,
  reportSlowTests: null,
  retries: 0,
  forbidOnly: !!process.env.CI,
  reporter: [['list'], ['html', { open: 'never', outputFolder: 'playwright-report-sr' }]],

  use: {
    ...screenReaderConfig.use,
    baseURL: project.baseURL,
    ...(project.storageState ? { storageState: project.storageState } : {}),
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
    video: 'off',
    viewport: { width: 1400, height: 900 },
  },

  projects: [
    {
      name: 'firefox-nvda',
      use: { ...devices['Desktop Firefox'], headless: false },
    },
  ],

  ...(project.globalSetup ? { globalSetup: project.globalSetup } : {}),
  ...(project.webServer ? { webServer: project.webServer } : {}),
});
