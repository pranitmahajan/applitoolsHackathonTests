Feature: Table Sort Test

Scenario: Verify sorting in acsending order of amount on Recent Transactions table
  Given login page is opened
  When user login with username "pranit" and password "123456"
  And amount header is clicked in Recent Transactions table
  Then table must sort in ascending order of amount with data intact
