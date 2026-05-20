from playwright.sync_api import Page


class CartPage:
    def __init__(self, page: Page):
        self.page = page

        # Locators
        self.cart_items = page.locator(".cart_item")
        self.item_names = page.locator(".inventory_item_name")
        self.checkout_button = page.locator("[data-test='checkout']")
        self.continue_shopping_button = page.locator("[data-test='continue-shopping']")

    def get_item_count(self) -> int:
        return self.cart_items.count()

    def get_item_names(self) -> list[str]:
        return self.item_names.all_inner_texts()

    def proceed_to_checkout(self):
        self.checkout_button.click()
