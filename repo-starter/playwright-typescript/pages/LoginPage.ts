import { Page, Locator } from "@playwright/test";

export class LoginPage {
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly errorMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    // TODO: Initialize locators using page.locator()
    // Hint: inspect saucedemo.com for correct selectors
    this.usernameInput = page.locator(""); // TODO
    this.passwordInput = page.locator(""); // TODO
    this.loginButton = page.locator("");   // TODO
    this.errorMessage = page.locator(""); // TODO: data-test='error'
  }

  async navigate() {
    // TODO: Navigate to "/"
  }

  async login(username: string, password: string) {
    // TODO: Fill username, fill password, click login button
  }

  async getErrorMessage(): Promise<string> {
    // TODO: Return inner text of error message
    return "";
  }

  async isErrorVisible(): Promise<boolean> {
    // TODO: Return true if error message is visible
    return false;
  }
}
