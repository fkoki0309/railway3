import { test, expect, type Page } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:5173/');
});

test("login error", async ({ page }) => {
  //email error
  await page.getByPlaceholder('Email').fill('test');
  await page.getByPlaceholder('login').click();
  await expect(page.getByPlaceholder('errorMessage')).toContainText('正しいメールアドレスを入力してください');

});

test("login success", async ({ page }) => {
  //email success
  await page.getByPlaceholder('Email').fill('test@example.com');
  await page.getByPlaceholder('login').click();

});