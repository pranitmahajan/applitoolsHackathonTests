
Feature: Data-Driven Test

Background: Open login page
  Given login page is opened

Scenario: Verify empty username and password error is thrown
  When login button is clicked
  Then "Both Username and Password must be present" error is thrown

Scenario: Verify empty password error is thrown
  When "pranit" is entered as username
  And login button is clicked
  Then "Password must be present" error is thrown

Scenario: Verify empty username error is thrown
  When "123456" is entered as password
  And login button is clicked
  Then "Username must be present" error is thrown

Scenario: Verify successfull login
  When user login with username "pranit" and password "123456"
  Then login is successfull
