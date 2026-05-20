import pytest
from playwright.sync_api import Page, expect
from pages.inventory_page import InventoryPage
from pages.cart_page import CartPage


class TestCart:

    def test_add_item_to_cart(self, logged_in_page: Page):
        """Adding an item to cart increments cart badge count."""
        inventory = InventoryPage(logged_in_page)
        inventory.add_item_to_cart("Sauce Labs Backpack")

        assert inventory.get_cart_count() == 1

    def test_add_multiple_items_to_cart(self, logged_in_page: Page):
        """Multiple items can be added to cart."""
        inventory = InventoryPage(logged_in_page)
        inventory.add_item_to_cart("Sauce Labs Backpack")
        inventory.add_item_to_cart("Sauce Labs Bike Light")

        assert inventory.get_cart_count() == 2

    def test_cart_contains_added_item(self, logged_in_page: Page):
        """Cart page shows the item that was added."""
        inventory = InventoryPage(logged_in_page)
        inventory.add_item_to_cart("Sauce Labs Backpack")
        inventory.go_to_cart()

        cart = CartPage(logged_in_page)
        assert cart.get_item_count() == 1
        assert "Sauce Labs Backpack" in cart.get_item_names()
