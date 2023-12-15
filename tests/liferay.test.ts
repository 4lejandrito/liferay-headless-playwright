import { test, expect, Page } from '@playwright/test';

async function login(page: Page) {
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByLabel('Email Address').fill('test@liferay.com');
  await page.getByLabel('Password').fill('test');
  await page.getByLabel('Sign In- Loading').getByRole('button', { name: 'Sign In' }).press('Enter');
}

test('can login', async ({ page }) => {
  await page.goto('http://localhost:8080/');
  await expect(page.locator('#main-content')).toContainText('Welcome to Liferay');
  await login(page)
  await expect(page.getByRole('heading', { name: 'Home' })).toContainText('Home');
});