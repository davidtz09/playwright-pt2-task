const { test, expect } = require('@playwright/test');
const { LoginPage } = require('./pages/login.page');
const { InventoryPage } = require('./pages/inventory.page');
const { CartPage } = require('./pages/cart.page');
const { CheckoutPage } = require('./pages/checkout.page');

test('Task Test @taskTest', async ({ page }) => {
  test.setTimeout(120000);

  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);

  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

  await inventoryPage.addBackpackToCart();
  await inventoryPage.openCart();
  await cartPage.startCheckout();
  await checkoutPage.completeInformation('Juan', 'Perez', '12345');
  await checkoutPage.finishOrder();
});
