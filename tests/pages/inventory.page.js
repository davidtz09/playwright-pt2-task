class InventoryPage {
  constructor(page) {
    this.addBackpackButton = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
    this.cartLink = page.locator('[data-test="shopping-cart-link"]');
  }

  async addBackpackToCart() {
    await this.addBackpackButton.click();
  }

  async openCart() {
    await this.cartLink.click();
  }
}

module.exports = { InventoryPage };
