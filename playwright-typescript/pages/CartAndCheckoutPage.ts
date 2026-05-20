import { Page, Locator } from "@playwright/test";

export class CartPage {
  readonly page: Page;
  readonly cartItems: Locator;
  readonly itemNames: Locator;
  readonly checkoutButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.cartItems = page.locator(".cart_item");
    this.itemNames = page.locator(".inventory_item_name");
    this.checkoutButton = page.locator("[data-test='checkout']");
  }

  async getItemCount(): Promise<number> {
    return await this.cartItems.count();
  }

  async getItemNames(): Promise<string[]> {
    return await this.itemNames.allInnerTexts();
  }

  async proceedToCheckout() {
    await this.checkoutButton.click();
  }
}

export class CheckoutPage {
  readonly page: Page;
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly postalCodeInput: Locator;
  readonly continueButton: Locator;
  readonly finishButton: Locator;
  readonly completeHeader: Locator;

  constructor(page: Page) {
    this.page = page;
    this.firstNameInput = page.locator("[data-test='firstName']");
    this.lastNameInput = page.locator("[data-test='lastName']");
    this.postalCodeInput = page.locator("[data-test='postalCode']");
    this.continueButton = page.locator("[data-test='continue']");
    this.finishButton = page.locator("[data-test='finish']");
    this.completeHeader = page.locator(".complete-header");
  }

  async fillCustomerInfo(firstName: string, lastName: string, postalCode: string) {
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
    await this.postalCodeInput.fill(postalCode);
  }

  async continueToOverview() {
    await this.continueButton.click();
  }

  async finishOrder() {
    await this.finishButton.click();
  }

  async getCompleteHeader(): Promise<string> {
    return await this.completeHeader.innerText();
  }

  async isOrderComplete(): Promise<boolean> {
    return await this.completeHeader.isVisible();
  }
}
