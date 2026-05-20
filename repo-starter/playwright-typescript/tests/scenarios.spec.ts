import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { InventoryPage } from "../pages/InventoryPage";
import { CartPage, CheckoutPage } from "../pages/CartAndCheckoutPage";

const USERNAME = process.env.SAUCE_USERNAME || "standard_user";
const PASSWORD = process.env.SAUCE_PASSWORD || "secret_sauce";

// ── Login Tests ───────────────────────────────────────────────────────────────
test.describe("Login", () => {

  test("successful login with valid credentials", async ({ page }) => {
    const login = new LoginPage(page);
    await login.navigate();
    await login.login(USERNAME, PASSWORD);

    // TODO: Assert page URL matches /inventory/
  });

  test("failed login with invalid password", async ({ page }) => {
    const login = new LoginPage(page);
    await login.navigate();
    await login.login(USERNAME, "wrong_password");

    // TODO: Assert error is visible
    // TODO: Assert error contains 'Username and password do not match'
  });

  test("failed login with empty credentials", async ({ page }) => {
    const login = new LoginPage(page);
    await login.navigate();
    await login.login("", "");

    // TODO: Assert error is visible
    // TODO: Assert error contains 'Username is required'
  });

  test("logout flow", async ({ page }) => {
    const login = new LoginPage(page);
    await login.navigate();
    await login.login(USERNAME, PASSWORD);

    // TODO: Open the burger menu (#react-burger-menu-btn)
    // TODO: Click logout (#logout_sidebar_link)
    // TODO: Assert URL is "/"
    // TODO: Assert login button is visible
  });
});

// ── Cart Tests ────────────────────────────────────────────────────────────────
test.describe("Cart", () => {
  test.beforeEach(async ({ page }) => {
    const login = new LoginPage(page);
    await login.navigate();
    await login.login(USERNAME, PASSWORD);
  });

  test("add item to cart increments badge count", async ({ page }) => {
    const inventory = new InventoryPage(page);
    await inventory.addItemToCart("Sauce Labs Backpack");

    // TODO: Assert cart count is 1
  });

  test("cart page shows added item", async ({ page }) => {
    const inventory = new InventoryPage(page);
    await inventory.addItemToCart("Sauce Labs Backpack");
    await inventory.goToCart();

    const cart = new CartPage(page);
    // TODO: Assert item count is 1
    // TODO: Assert item names contain 'Sauce Labs Backpack'
  });
});

// ── Checkout Tests ────────────────────────────────────────────────────────────
test.describe("Checkout", () => {
  test.beforeEach(async ({ page }) => {
    const login = new LoginPage(page);
    await login.navigate();
    await login.login(USERNAME, PASSWORD);
  });

  test("complete checkout flow end-to-end", async ({ page }) => {
    const inventory = new InventoryPage(page);
    await inventory.addItemToCart("Sauce Labs Backpack");
    await inventory.goToCart();

    const cart = new CartPage(page);
    await cart.proceedToCheckout();

    const checkout = new CheckoutPage(page);
    await checkout.fillCustomerInfo("Juan", "dela Cruz", "1600");
    await checkout.continueToOverview();
    await checkout.finishOrder();

    // TODO: Assert order is complete
    // TODO: Assert complete header contains 'Thank you for your order'
  });
});

// ── Products Tests ────────────────────────────────────────────────────────────
test.describe("Products", () => {
  test.beforeEach(async ({ page }) => {
    const login = new LoginPage(page);
    await login.navigate();
    await login.login(USERNAME, PASSWORD);
  });

  test("sort products A to Z", async ({ page }) => {
    const inventory = new InventoryPage(page);
    await inventory.sortBy("az");
    const names = await inventory.getItemNames();

    // TODO: Assert names equals [...names].sort()
  });

  test("product detail page opens correctly", async ({ page }) => {
    const inventory = new InventoryPage(page);
    await inventory.goToItem("Sauce Labs Backpack");

    // TODO: Assert .inventory_details_name is visible
    // TODO: Assert it contains 'Sauce Labs Backpack'
  });
});
