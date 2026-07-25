import { test, expect } from '@playwright/test';

test('Verify Playwright homepage', async ({ page }) => {
  // Navigate to the Playwright website
  await page.goto('https://playwright.dev/');

  // Verify the page title
  await expect(page).toHaveTitle(/Playwright/);

  // Verify the main heading is visible
  await expect(
    page.getByRole('heading', { name: 'Playwright enables reliable end-to-end testing for modern web apps.' })
  ).toBeVisible();

  // Take a screenshot (saved in the configured artifacts directory)
  await page.screenshot({
    path: 'artifacts/screenshots/playwright-homepage.png',
    fullPage: true,
  });

  // Print a success message
  console.log('Playwright homepage verified successfully.');
});