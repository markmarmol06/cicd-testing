import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { InventoryPage } from "../pages/InventoryPage";
import { CartPage } from "../pages/CartAndCheckoutPage";

const USERNAME = process.env.SAUCE_USERNAME || "standard_user";
const PASSWORD = process.env.SAUCE_PASSWORD || "secret_sauce";

test.describe("Cart", () => {
  test.beforeEach(async ({ page }) => {
    const login = new LoginPage(page);
    await login.navigate();
    await login.login(USERNAME, PASSWORD);
  });

  test("add item to cart increments badge count", async ({ page }) => {
    const inventory = new InventoryPage(page);
    await inventory.addItemToCart("Sauce Labs Backpack");

    expect(await inventory.getCartCount()).toBe(1);
  });

  test("add multiple items to cart", async ({ page }) => {
    const inventory = new InventoryPage(page);
    await inventory.addItemToCart("Sauce Labs Backpack");
    await inventory.addItemToCart("Sauce Labs Bike Light");

    expect(await inventory.getCartCount()).toBe(2);
  });

  test("cart page shows added item", async ({ page }) => {
    const inventory = new InventoryPage(page);
    await inventory.addItemToCart("Sauce Labs Backpack");
    await inventory.goToCart();

    const cart = new CartPage(page);
    expect(await cart.getItemCount()).toBe(1);
    expect(await cart.getItemNames()).toContain("Sauce Labs Backpack");
  });
});
