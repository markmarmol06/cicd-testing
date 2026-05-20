# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: playwright-typescript/tests/cart.spec.ts >> Cart >> cart page shows added item
- Location: playwright-typescript/tests/cart.spec.ts:31:7

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
  20 |   }
  21 | 
  22 |   async login(username: string, password: string) {
  23 |     await this.usernameInput.fill(username);
  24 |     await this.passwordInput.fill(password);
  25 |     await this.loginButton.click();
  26 |   }
  27 | 
  28 |   async getErrorMessage(): Promise<string> {
  29 |     return await this.errorMessage.innerText();
  30 |   }
  31 | 
  32 |   async isErrorVisible(): Promise<boolean> {
  33 |     return await this.errorMessage.isVisible();
  34 |   }
  35 | }
  36 | 
```