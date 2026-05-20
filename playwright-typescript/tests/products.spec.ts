import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { InventoryPage } from "../pages/InventoryPage";

const USERNAME = process.env.SAUCE_USERNAME || "standard_user";
const PASSWORD = process.env.SAUCE_PASSWORD || "secret_sauce";

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
    expect(names).toEqual([...names].sort());
  });

  test("sort products Z to A", async ({ page }) => {
    const inventory = new InventoryPage(page);
    await inventory.sortBy("za");

    const names = await inventory.getItemNames();
    expect(names).toEqual([...names].sort().reverse());
  });

  test("product detail page opens correctly", async ({ page }) => {
    const inventory = new InventoryPage(page);
    await inventory.goToItem("Sauce Labs Backpack");

    const detailName = page.locator(".inventory_details_name");
    await expect(detailName).toBeVisible();
    expect(await detailName.innerText()).toContain("Sauce Labs Backpack");
  });
});
