import pytest
from playwright.sync_api import Page
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

        # TODO: Assert the page URL contains 'inventory'
        pass

    def test_failed_login_invalid_password(self, page: Page):
        """Login fails with an invalid password."""
        login = LoginPage(page, BASE_URL)
        login.navigate()
        login.login(USERNAME, "wrong_password")

        # TODO: Assert error is visible
        # TODO: Assert error message contains 'Username and password do not match'
        pass

    def test_failed_login_empty_credentials(self, page: Page):
        """Login fails when credentials are empty."""
        login = LoginPage(page, BASE_URL)
        login.navigate()
        login.login("", "")

        # TODO: Assert error is visible
        # TODO: Assert error message contains 'Username is required'
        pass

    def test_logout(self, logged_in_page: Page):
        """User can log out successfully."""
        page = logged_in_page

        # TODO: Open the burger menu
        # TODO: Click the logout link
        # TODO: Assert URL is back to base
        # TODO: Assert login button is visible
        pass
