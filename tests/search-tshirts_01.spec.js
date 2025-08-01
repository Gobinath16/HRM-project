const { test, expect } = require('@playwright/test');

test('Search for T-shirts and verify Faded Short Sleeve T-shirts is listed', async ({ page }) => {
  await page.goto('http://www.automationpractice.pl/index.php');
  await page.fill('input[name="search_query"]', 'T-shirts');
  await page.click('button[name="submit_search"]');
  // Wait for results to load
  await expect(page.locator('body')).toContainText('Faded Short Sleeve T-shirts');
});
