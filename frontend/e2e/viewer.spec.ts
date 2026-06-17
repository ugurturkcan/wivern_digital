import { test, expect } from '@playwright/test';

test.describe('Viewer 3D Page', () => {
  test('should load the viewer successfully', async ({ page }) => {
    await page.goto('/viewer');

    // Wait for the Canvas and loading to finish
    await expect(page.locator('canvas').first()).toBeVisible({ timeout: 15000 });
    
    // Wait for the spinner to disappear
    await expect(page.getByText('Initializing Engine')).toBeHidden({ timeout: 15000 });

    // Verify the page title/badge is there
    await expect(page.getByText('Full-Scale Interactive Avatar')).toBeVisible();

    // Take a visual snapshot of the loaded viewer UI
    await expect(page).toHaveScreenshot('viewer-loaded.png', {
      maxDiffPixels: 200, // Allow rendering differences in WebGL
      animations: 'disabled'
    });
  });
});
