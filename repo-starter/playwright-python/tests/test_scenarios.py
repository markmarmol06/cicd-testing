import pytest
from playwright.sync_api import Page
from pages.inventory_page import InventoryPage
from pages.cart_and_checkout_page import CartPage, CheckoutPage


class TestCart:

    def test_add_item_to_cart(self, logged_in_page: Page):
        inventory = InventoryPage(logged_in_page)
        inventory.add_item_to_cart("Sauce Labs Backpack")

        # TODO: Assert cart count equals 1
        pass

    def test_add_multiple_items_to_cart(self, logged_in_page: Page):
        inventory = InventoryPage(logged_in_page)
        inventory.add_item_to_cart("Sauce Labs Backpack")
        inventory.add_item_to_cart("Sauce Labs Bike Light")

        # TODO: Assert cart count equals 2
        pass

    def test_cart_contains_added_item(self, logged_in_page: Page):
        inventory = InventoryPage(logged_in_page)
        inventory.add_item_to_cart("Sauce Labs Backpack")
        inventory.go_to_cart()

        cart = CartPage(logged_in_page)
        # TODO: Assert cart item count is 1
        # TODO: Assert 'Sauce Labs Backpack' is in cart item names
        pass


class TestCheckout:

    def test_complete_checkout_flow(self, logged_in_page: Page):
        inventory = InventoryPage(logged_in_page)
        inventory.add_item_to_cart("Sauce Labs Backpack")
        inventory.go_to_cart()

        cart = CartPage(logged_in_page)
        cart.proceed_to_checkout()

        checkout = CheckoutPage(logged_in_page)
        checkout.fill_customer_info("Juan", "dela Cruz", "1600")
        checkout.continue_to_overview()
        checkout.finish_order()

        # TODO: Assert order is complete
        # TODO: Assert complete header contains 'Thank you for your order'
        pass


class TestProducts:

    def test_sort_products_a_to_z(self, logged_in_page: Page):
        inventory = InventoryPage(logged_in_page)
        inventory.sort_by("az")
        names = inventory.get_item_names()

        # TODO: Assert names list equals sorted(names)
        pass

    def test_sort_products_z_to_a(self, logged_in_page: Page):
        inventory = InventoryPage(logged_in_page)
        inventory.sort_by("za")
        names = inventory.get_item_names()

        # TODO: Assert names list equals sorted(names, reverse=True)
        pass

    def test_product_detail_page(self, logged_in_page: Page):
        inventory = InventoryPage(logged_in_page)
        inventory.go_to_item("Sauce Labs Backpack")

        # TODO: Assert .inventory_details_name is visible
        # TODO: Assert it contains 'Sauce Labs Backpack'
        pass
