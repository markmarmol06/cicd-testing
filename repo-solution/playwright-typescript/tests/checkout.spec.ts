import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { InventoryPage } from "../pages/InventoryPage";
import { CartPage, CheckoutPage } from "../pages/CartAndCheckoutPage";

const USERNAME = process.env.SAUCE_USERNAME || "standard_user";
const PASSWORD = process.env.SAUCE_PASSWORD || "secret_sauce";

test.describe("Checkout", () => {
  test.beforeEach(async ({ page }) => {
    const login = new LoginPage(page);
    await login.navigate();
    await login.login(USERNAME, PASSWORD);
  });

  test("complete checkout flow end-to-end", async ({ page }) => {
    // Add item
    const inventory = new InventoryPage(page);
    await inventory.addItemToCart("Sauce Labs Backpack");
    await inventory.goToCart();

    // Proceed to checkout
    const cart = new CartPage(page);
    await cart.proceedToCheckout();

    // Fill customer info
    const checkout = new CheckoutPage(page);
    await checkout.fillCustomerInfo("Juan", "dela Cruz", "1600");
    await checkout.continueToOverview();

    // Finish order
    await checkout.finishOrder();

    expect(await checkout.isOrderComplete()).toBe(true);
    expect(await checkout.getCompleteHeader()).toContain("Thank you for your order");
  });
});
