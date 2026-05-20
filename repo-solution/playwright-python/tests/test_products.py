import pytest
from playwright.sync_api import Page
from pages.inventory_page import InventoryPage


class TestProducts:

    def test_sort_products_a_to_z(self, logged_in_page: Page):
        """Products can be sorted A to Z."""
        inventory = InventoryPage(logged_in_page)
        inventory.sort_by("az")

        names = inventory.get_item_names()
        assert names == sorted(names), "Products should be in A→Z order"

    def test_sort_products_z_to_a(self, logged_in_page: Page):
        """Products can be sorted Z to A."""
        inventory = InventoryPage(logged_in_page)
        inventory.sort_by("za")

        names = inventory.get_item_names()
        assert names == sorted(names, reverse=True), "Products should be in Z→A order"

    def test_product_detail_page(self, logged_in_page: Page):
        """Clicking a product name opens the product detail page."""
        inventory = InventoryPage(logged_in_page)
        inventory.go_to_item("Sauce Labs Backpack")

        detail_name = logged_in_page.locator(".inventory_details_name")
        assert detail_name.is_visible()
        assert "Sauce Labs Backpack" in detail_name.inner_text()
