import { test, expect, type Page } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:5173/');
});

test("login error", async ({ page }) => {
  //email error
  await page.getByRole('textbox', { name: 'Email' }).fill('test');
  //password error
  await page.getByRole('textbox', { name: 'Password' }).fill('test');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByTestId('passwordErrorMessage')).toContainText('パスワードは6文字以上で入力してください');
  await expect(page.getByTestId('emailErrorMessage')).toContainText('正しいメールアドレスを入力してください');

});

test("login success", async ({ page }) => {
  //email success
  await page.getByRole('textbox', { name: 'Email' }).fill('test@example.com');
  await page.getByRole('textbox', { name: 'Password' }).fill('test123');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByTestId('passwordErrorMessage')).toContainText('');
  await expect(page.getByTestId('emailErrorMessage')).toContainText('');
});

test("login no data",async ({page})=>{
  await page.getByRole('textbox', { name: 'Email' }).fill('');
  await page.getByRole('textbox', { name: 'Password' }).fill('');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByTestId('passwordErrorMessage')).toContainText('パスワードは6文字以上で入力してください');
  await expect(page.getByTestId('emailErrorMessage')).toContainText('正しいメールアドレスを入力してください');
});