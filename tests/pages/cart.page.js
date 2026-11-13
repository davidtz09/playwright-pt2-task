class CartPage {
  constructor(page) {
    this.checkoutButton = page.locator('[data-test="checkout"]');
  }

  async startCheckout() {
    await this.checkoutButton.click();
  }
}

module.exports = { CartPage };
