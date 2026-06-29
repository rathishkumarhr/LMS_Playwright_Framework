import { test, expect } from '@playwright/test';

// Local lightweight BaseClass to avoid module resolution errors for the external file.
// Keeps the same API used in this spec (constructor(page) and async fill(locator, text)).
class BaseClass {
  page: any;
  constructor(page: any) {
    this.page = page;
  }
  async fill(locator: { fill: (s: string) => Promise<void> }, text: string) {
    await locator.fill(text);
  }
}



// test('has title', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);
// });

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });
test("Sample", async ({ page }) => {
  await page.goto("https://www.flipkart.com/");
  const baseClass = new BaseClass(page);
  
  const locator = page.getByText("Flipkart");
  await baseClass.fill(locator, "Hello");
});
