from playwright.sync_api import Page


class LoginPage:
    def __init__(self, page: Page, base_url: str):
        self.page = page
        self.base_url = base_url

        # TODO: Define locators using page.locator()
        # Hint: inspect saucedemo.com login page for correct selectors
        self.username_input = None   # TODO: locator for username field
        self.password_input = None   # TODO: locator for password field
        self.login_button = None     # TODO: locator for login button
        self.error_message = None    # TODO: locator for error message (data-test='error')

    def navigate(self):
        # TODO: Navigate to self.base_url
        pass

    def login(self, username: str, password: str):
        # TODO: Fill username, fill password, click login button
        pass

    def get_error_message(self) -> str:
        # TODO: Return the inner text of the error message
        pass

    def is_error_visible(self) -> bool:
        # TODO: Return True if the error message is visible
        pass
