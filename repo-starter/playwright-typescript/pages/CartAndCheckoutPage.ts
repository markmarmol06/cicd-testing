import { Page, Locator } from "@playwright/test";

export class CartPage {
  readonly page: Page;
  readonly cartItems: Locator;
  readonly itemNames: Locator;
  readonly checkoutButton: Locator;

  constructor(page: Page) {
    this.page = page;
    // TODO: Initialize locators
    this.cartItems = page.locator("");      // TODO: .cart_item
    this.itemNames = page.locator("");      // TODO: .inventory_item_name
    this.checkoutButton = page.locator(""); // TODO: data-test='checkout'
  }

  async getItemCount(): Promise<number> {
    // TODO: Return number of cart items
    return 0;
  }

  async getItemNames(): Promise<string[]> {
    // TODO: Return list of item names
    return [];
  }

  async proceedToCheckout() {
    // TODO: Click checkout button
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
    // TODO: Initialize all locators
    this.firstNameInput = page.locator("");  // TODO: data-test='firstName'
    this.lastNameInput = page.locator("");   // TODO: data-test='lastName'
    this.postalCodeInput = page.locator(""); // TODO: data-test='postalCode'
    this.continueButton = page.locator("");  // TODO: data-test='continue'
    this.finishButton = page.locator("");    // TODO: data-test='finish'
    this.completeHeader = page.locator("");  // TODO: .complete-header
  }

  async fillCustomerInfo(firstName: string, lastName: string, postalCode: string) {
    // TODO: Fill all three fields
  }

  async continueToOverview() {
    // TODO: Click continue button
  }

  async finishOrder() {
    // TODO: Click finish button
  }

  async getCompleteHeader(): Promise<string> {
    // TODO: Return complete header text
    return "";
  }

  async isOrderComplete(): Promise<boolean> {
    // TODO: Return true if complete header is visible
    return false;
  }
}
