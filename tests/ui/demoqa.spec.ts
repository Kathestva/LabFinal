import { test, expect } from '@playwright/test';

test('DemoQA: fill text box and assert', async ({ page }) => {
  // Navegar a la página
  await page.goto('https://demoqa.com/text-box');

  // Completar el formulario
  await page.fill('#userName', 'Carlos Tester');
  await page.fill('#userEmail', 'carlos@example.com');
  await page.fill('#currentAddress', 'Calle 123');
  await page.fill('#permanentAddress', 'Calle 456');

  // Enviar formulario
  await page.click('#submit');

  // Validar la salida
  const output = page.locator('#output');
  await expect(output).toContainText('Carlos Tester');
  await expect(output).toContainText('carlos@example.com');
  await expect(output).toContainText('Calle 123');
  await expect(output).toContainText('Calle 456');
});
