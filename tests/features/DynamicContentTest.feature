Feature: DynamicContentTest

Scenario: Verify existence of dynamic ads after login
  Given login page is opened with ads enabled
  When user login with username "pranit" and password "123456"
  Then verify 2 ads are present on page
  