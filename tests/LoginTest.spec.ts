import { test, expect, type Page } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:5173/');
});

test("email error", async ({ page }) => {
  await page.getByPlaceholder('Email').fill('test');
  await page.getByPlaceholder('login').click();
  await expect(page.getByPlaceholder('errorMessage')).toContainText('正しいメールアドレスを入力してください');

});

test("email success", async ({ page }) => {
  await page.getByPlaceholder('Email').fill('test@example.com');
  await page.getByPlaceholder('login').click();

});