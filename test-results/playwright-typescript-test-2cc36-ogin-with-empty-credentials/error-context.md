# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: playwright-typescript/tests/login.spec.ts >> Login >> failed login with empty credentials
- Location: playwright-typescript/tests/login.spec.ts:25:7

# Error details

```
Error: page.goto: Protocol error (Page.navigate): Cannot navigate to invalid URL
Call log:
  - navigating to "/", waiting until "load"

```

# Test source

```ts
  1  | import { Page, Locator } from "@playwright/test";
  2  | 
  3  | export class LoginPage {
  4  |   readonly page: Page;
  5  |   readonly usernameInput: Locator;
  6  |   readonly passwordInput: Locator;
  7  |   readonly loginButton: Locator;
  8  |   readonly errorMessage: Locator;
  9  | 
  10 |   constructor(page: Page) {
  11 |     this.page = page;
  12 |     this.usernameInput = page.locator("#user-name");
  13 |     this.passwordInput = page.locator("#password");
  14 |     this.loginButton = page.locator("#login-button");
  15 |     this.errorMessage = page.locator("[data-test='error']");
  16 |   }
  17 | 
  18 |   async navigate() {
> 19 |     await this.page.goto("/");
     |                     ^ Error: page.goto: Protocol error (Page.navigate): Cannot navigate to invalid URL
  20 |     //  await this.page.goto("https://www.saucedemo.com/");
  21 |   }
  22 | 
  23 |   async login(username: string, password: string) {
  24 |     await this.usernameInput.fill(username);
  25 |     await this.passwordInput.fill(password);
  26 |     await this.loginButton.click();
  27 |   }
  28 | 
  29 |   async getErrorMessage(): Promise<string> {
  30 |     return await this.errorMessage.innerText();
  31 |   }
  32 | 
  33 |   async isErrorVisible(): Promise<boolean> {
  34 |     return await this.errorMessage.isVisible();
  35 |   }
  36 | }
  37 | 
```