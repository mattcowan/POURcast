/**
 * Playwright config for the headless QA sweep (tests/e2e/*.spec.cjs).
 * The NVDA journeys have their own config (playwright.nvda.config.cjs) because
 * they must run headed, serially, in Firefox.
 *
 * Run: npm run test:qa   (starts `vite preview` on 4173 if nothing is there)
 */
const { defineConfig, devices } = require('@playwright/test');

const BASE_URL = process.env.QA_BASE_URL || 'http://localhost:4173/pourcast/';

module.exports = defineConfig({
  testDir: './tests/e2e',
  testMatch: /.*\.spec\.cjs/,
  timeout: 120 * 1000,
  retries: 0,
  reporter: [['list'], ['html', { open: 'never', outputFolder: 'playwright-report' }]],
  use: {
    baseURL: BASE_URL,
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
    viewport: { width: 1280, height: 800 },
  },
  projects: [{ name: 'chromium', use: { ...devices['Desktop Chrome'] } }],
  webServer: {
    command: 'npm run preview -- --port 4173 --strictPort',
    url: BASE_URL,
    reuseExistingServer: true,
    timeout: 60 * 1000,
  },
});
