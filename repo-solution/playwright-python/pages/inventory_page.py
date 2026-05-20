from playwright.sync_api import Page


class InventoryPage:
    def __init__(self, page: Page):
        self.page = page

        # Locators
        self.inventory_items = page.locator(".inventory_item")
        self.item_names = page.locator(".inventory_item_name")
        self.sort_dropdown = page.locator("[data-test='product-sort-container']")
        self.cart_badge = page.locator(".shopping_cart_badge")
        self.cart_link = page.locator(".shopping_cart_link")

    def get_item_count(self) -> int:
        return self.inventory_items.count()

    def add_item_to_cart(self, item_name: str):
        item = self.page.locator(f".inventory_item:has-text('{item_name}')")
        item.locator("button").click()

    def get_cart_count(self) -> int:
        if self.cart_badge.is_visible():
            return int(self.cart_badge.inner_text())
        return 0

    def go_to_cart(self):
        self.cart_link.click()

    def sort_by(self, option: str):
        """Options: 'az', 'za', 'lohi', 'hilo'"""
        self.sort_dropdown.select_option(option)

    def get_item_names(self) -> list[str]:
        return self.item_names.all_inner_texts()

    def go_to_item(self, item_name: str):
        self.page.locator(f".inventory_item_name:has-text('{item_name}')").click()
