import pytest
from playwright.sync_api import Page, expect
from pages.inventory_page import InventoryPage
from pages.cart_page import CartPage
from pages.checkout_page import CheckoutPage


class TestCheckout:

    def test_complete_checkout_flow(self, logged_in_page: Page):
        """User can complete a full checkout flow end-to-end."""
        # Add item
        inventory = InventoryPage(logged_in_page)
        inventory.add_item_to_cart("Sauce Labs Backpack")
        inventory.go_to_cart()

        # Proceed to checkout
        cart = CartPage(logged_in_page)
        cart.proceed_to_checkout()

        # Fill customer info
        checkout = CheckoutPage(logged_in_page)
        checkout.fill_customer_info("Juan", "dela Cruz", "1600")
        checkout.continue_to_overview()

        # Finish order
        checkout.finish_order()

        assert checkout.is_order_complete()
        assert "Thank you for your order" in checkout.get_complete_header()
