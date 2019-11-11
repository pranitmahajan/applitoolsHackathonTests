
Feature: Login Page UI Elements Test

Scenario: Verify if all login page element exist on page
  Given login page is opened
  Then all elements on login page should be displayed

@traditionalTestsOnly
Scenario: Verify if header and labels on login page have expected text
  Given login page is opened
  Then login form header should be "Login Form"
  And username label should be "Username"
  And password label should be "Password"
  And login button text should be "Log In"
  And remember me text should be "Remember Me"

