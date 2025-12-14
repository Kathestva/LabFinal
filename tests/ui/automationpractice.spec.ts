import { test, expect } from '@playwright/test';

test('AutomationPractice: search and assert results', async ({ page }) => {
  // Navegar a la página
  await page.goto('http://automationpractice.pl/index.php');

  // Asegurarse de que el campo de búsqueda esté visible
  const searchInput = page.locator('#search_query_top');
  await expect(searchInput).toBeVisible();

  // Completar la búsqueda
  await searchInput.fill('dress');

  // Hacer clic en el botón de búsqueda
  const submitButton = page.locator('button[name="submit_search"]');
  await expect(submitButton).toBeVisible();
  await submitButton.click();

  // Validar que la URL cambió correctamente
  await expect(page).toHaveURL(/search/);

  // Verificar que la lista de productos sea visible
  const productList = page.locator('.product_list');
  await expect(productList).toBeVisible();

  // Validar que al menos un producto exista
  const products = productList.locator('.ajax_block_product');
  const count = await products.count();
  expect(count).toBeGreaterThan(0);
});
