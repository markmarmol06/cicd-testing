from playwright.sync_api import Page


class CheckoutPage:
    def __init__(self, page: Page):
        self.page = page

        # Step 1 locators
        self.first_name_input = page.locator("[data-test='firstName']")
        self.last_name_input = page.locator("[data-test='lastName']")
        self.postal_code_input = page.locator("[data-test='postalCode']")
        self.continue_button = page.locator("[data-test='continue']")

        # Step 2 locators
        self.finish_button = page.locator("[data-test='finish']")
        self.summary_total = page.locator(".summary_total_label")

        # Complete locators
        self.complete_header = page.locator(".complete-header")
        self.complete_text = page.locator(".complete-text")

    def fill_customer_info(self, first_name: str, last_name: str, postal_code: str):
        self.first_name_input.fill(first_name)
        self.last_name_input.fill(last_name)
        self.postal_code_input.fill(postal_code)

    def continue_to_overview(self):
        self.continue_button.click()

    def get_total(self) -> str:
        return self.summary_total.inner_text()

    def finish_order(self):
        self.finish_button.click()

    def get_complete_header(self) -> str:
        return self.complete_header.inner_text()

    def is_order_complete(self) -> bool:
        return self.complete_header.is_visible()
