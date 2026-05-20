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
    this.inventoryItems = page.locator(".inventory_item");
    this.itemNames = page.locator(".inventory_item_name");
    this.sortDropdown = page.locator("[data-test='product-sort-container']");
    this.cartBadge = page.locator(".shopping_cart_badge");
    this.cartLink = page.locator(".shopping_cart_link");
  }

  async addItemToCart(itemName: string) {
    const item = this.page.locator(`.inventory_item:has-text('${itemName}')`);
    await item.locator("button").click();
  }

  async getCartCount(): Promise<number> {
    if (await this.cartBadge.isVisible()) {
      return parseInt(await this.cartBadge.innerText());
    }
    return 0;
  }

  async goToCart() {
    await this.cartLink.click();
  }

  async sortBy(option: "az" | "za" | "lohi" | "hilo") {
    await this.sortDropdown.selectOption(option);
  }

  async getItemNames(): Promise<string[]> {
    return await this.itemNames.allInnerTexts();
  }

  async goToItem(itemName: string) {
    await this.page.locator(`.inventory_item_name:has-text('${itemName}')`).click();
  }
}
