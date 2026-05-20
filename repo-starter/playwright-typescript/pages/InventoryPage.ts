import { Page, Locator } from "@playwright/test";

export class InventoryPage {
  readonly page: Page;
  readonly inventoryItems: Locator;
  readonly itemNames: Locator;
  readonly sortDropdown: Locator;
  readonly cartBadge: Locator;
  readonly cartLink: Locator;

  constructor(page: Page) {
    this.page = page;
    // TODO: Initialize all locators
    this.inventoryItems = page.locator(""); // TODO: .inventory_item
    this.itemNames = page.locator("");      // TODO: .inventory_item_name
    this.sortDropdown = page.locator("");   // TODO: data-test='product-sort-container'
    this.cartBadge = page.locator("");      // TODO: .shopping_cart_badge
    this.cartLink = page.locator("");       // TODO: .shopping_cart_link
  }

  async addItemToCart(itemName: string) {
    // TODO: Find the item by name and click its button
  }

  async getCartCount(): Promise<number> {
    // TODO: Return cart badge count (0 if not visible)
    return 0;
  }

  async goToCart() {
    // TODO: Click cart link
  }

  async sortBy(option: "az" | "za" | "lohi" | "hilo") {
    // TODO: Select option from dropdown
  }

  async getItemNames(): Promise<string[]> {
    // TODO: Return all item name strings
    return [];
  }

  async goToItem(itemName: string) {
    // TODO: Click item name to open detail page
  }
}
