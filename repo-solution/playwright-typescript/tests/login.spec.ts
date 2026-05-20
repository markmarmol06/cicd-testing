import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";

const USERNAME = process.env.SAUCE_USERNAME || "standard_user";
const PASSWORD = process.env.SAUCE_PASSWORD || "secret_sauce";

test.describe("Login", () => {
  test("successful login with valid credentials", async ({ page }) => {
    const login = new LoginPage(page);
    await login.navigate();
    await login.login(USERNAME, PASSWORD);

    await expect(page).toHaveURL(/inventory/);
  });

  test("failed login with invalid password", async ({ page }) => {
    const login = new LoginPage(page);
    await login.navigate();
    await login.login(USERNAME, "wrong_password");

    expect(await login.isErrorVisible()).toBe(true);
    expect(await login.getErrorMessage()).toContain("Username and password do not match");
  });

  test("failed login with empty credentials", async ({ page }) => {
    const login = new LoginPage(page);
    await login.navigate();
    await login.login("", "");

    expect(await login.isErrorVisible()).toBe(true);
    expect(await login.getErrorMessage()).toContain("Username is required");
  });

  test("logout flow", async ({ page }) => {
    const login = new LoginPage(page);
    await login.navigate();
    await login.login(USERNAME, PASSWORD);

    await page.locator("#react-burger-menu-btn").click();
    await page.locator("#logout_sidebar_link").click();

    await expect(page).toHaveURL("/");
    await expect(page.locator("#login-button")).toBeVisible();
  });
});
