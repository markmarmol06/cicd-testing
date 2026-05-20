from playwright.sync_api import Page


class CartPage:
    def __init__(self, page: Page):
        self.page = page

        # TODO: Define locators for the cart page
        self.cart_items = None       # TODO: .cart_item
        self.item_names = None       # TODO: .inventory_item_name
        self.checkout_button = None  # TODO: data-test='checkout'

    def get_item_count(self) -> int:
        # TODO: Return number of items in the cart
        pass

    def get_item_names(self) -> list[str]:
        # TODO: Return list of item name strings in the cart
        pass

    def proceed_to_checkout(self):
        # TODO: Click the checkout button
        pass


class CheckoutPage:
    def __init__(self, page: Page):
        self.page = page

        # TODO: Define locators for checkout steps 1 and 2
        self.first_name_input = None   # TODO: data-test='firstName'
        self.last_name_input = None    # TODO: data-test='lastName'
        self.postal_code_input = None  # TODO: data-test='postalCode'
        self.continue_button = None    # TODO: data-test='continue'
        self.finish_button = None      # TODO: data-test='finish'
        self.complete_header = None    # TODO: .complete-header

    def fill_customer_info(self, first_name: str, last_name: str, postal_code: str):
        # TODO: Fill in the three fields
        pass

    def continue_to_overview(self):
        # TODO: Click the continue button
        pass

    def finish_order(self):
        # TODO: Click the finish button
        pass

    def get_complete_header(self) -> str:
        # TODO: Return the text of the order complete header
        pass

    def is_order_complete(self) -> bool:
        # TODO: Return True if the complete header is visible
        pass
