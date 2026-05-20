from playwright.sync_api import Page


class InventoryPage:
    def __init__(self, page: Page):
        self.page = page

        # TODO: Define locators for the inventory page
        self.inventory_items = None  # TODO: .inventory_item
        self.item_names = None       # TODO: .inventory_item_name
        self.sort_dropdown = None    # TODO: data-test='product-sort-container'
        self.cart_badge = None       # TODO: .shopping_cart_badge
        self.cart_link = None        # TODO: .shopping_cart_link

    def add_item_to_cart(self, item_name: str):
        # TODO: Find the inventory item by name and click its Add to Cart button
        pass

    def get_cart_count(self) -> int:
        # TODO: Return the number shown in the cart badge (return 0 if not visible)
        pass

    def go_to_cart(self):
        # TODO: Click the cart link
        pass

    def sort_by(self, option: str):
        # TODO: Select the option from the sort dropdown
        # Options: 'az', 'za', 'lohi', 'hilo'
        pass

    def get_item_names(self) -> list[str]:
        # TODO: Return a list of all item name strings on the page
        pass

    def go_to_item(self, item_name: str):
        # TODO: Click the item name link to open the detail page
        pass
