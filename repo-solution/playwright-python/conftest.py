import os
import pytest
from playwright.sync_api import Page
from pages.login_page import LoginPage


BASE_URL = os.getenv("BASE_URL", "https://www.saucedemo.com")
USERNAME = os.getenv("SAUCE_USERNAME", "standard_user")
PASSWORD = os.getenv("SAUCE_PASSWORD", "secret_sauce")


@pytest.fixture
def base_url():
    return BASE_URL


@pytest.fixture
def credentials():
    return {"username": USERNAME, "password": PASSWORD}


@pytest.fixture
def logged_in_page(page: Page):
    """Returns a page already logged in to saucedemo."""
    login = LoginPage(page, BASE_URL)
    login.navigate()
    login.login(USERNAME, PASSWORD)
    return page
