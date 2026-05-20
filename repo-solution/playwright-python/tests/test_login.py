import pytest
from playwright.sync_api import Page, expect
from pages.login_page import LoginPage
import os

BASE_URL = os.getenv("BASE_URL", "https://www.saucedemo.com")
USERNAME = os.getenv("SAUCE_USERNAME", "standard_user")
PASSWORD = os.getenv("SAUCE_PASSWORD", "secret_sauce")


class TestLogin:

    def test_successful_login(self, page: Page):
        """User can log in with valid credentials."""
        login = LoginPage(page, BASE_URL)
        login.navigate()
        login.login(USERNAME, PASSWORD)

        expect(page).to_have_url(f"{BASE_URL}/inventory.html")

    def test_failed_login_invalid_password(self, page: Page):
        """Login fails with an invalid password."""
        login = LoginPage(page, BASE_URL)
        login.navigate()
        login.login(USERNAME, "wrong_password")

        assert login.is_error_visible(), "Error message should be visible"
        assert "Username and password do not match" in login.get_error_message()

    def test_failed_login_empty_credentials(self, page: Page):
        """Login fails when credentials are empty."""
        login = LoginPage(page, BASE_URL)
        login.navigate()
        login.login("", "")

        assert login.is_error_visible(), "Error message should be visible"
        assert "Username is required" in login.get_error_message()

    def test_logout(self, logged_in_page: Page):
        """User can log out successfully."""
        page = logged_in_page
        page.locator("#react-burger-menu-btn").click()
        page.locator("#logout_sidebar_link").click()

        expect(page).to_have_url(BASE_URL + "/")
        expect(page.locator("#login-button")).to_be_visible()
