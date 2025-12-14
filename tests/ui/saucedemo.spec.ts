import { test, expect } from '@playwright/test';

test('SauceDemo E2E: login -> add item -> checkout flow', async ({ page }) => {
  // Navegar a la página
  await page.goto('https://www.saucedemo.com/');

  // Login
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  // Validar login exitoso
  await expect(page).toHaveURL(/.*inventory\.html/);
  await expect(page.locator('.inventory_list')).toBeVisible();

  // Abrir producto
  await page.click('text=Sauce Labs Backpack');

  // Agregar al carrito
  await page.click('button[id^="add-to-cart"]');

  // Ir al carrito
  await page.click('#shopping_cart_container');

  // Validar que el producto esté en el carrito
  await expect(page.locator('.cart_item')).toHaveCount(1);
  await expect(page.locator('.inventory_item_name')).toHaveText('Sauce Labs Backpack');
});
