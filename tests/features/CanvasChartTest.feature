Feature: Canvas Chart Test

Scenario: Verify bar chart for expenses shows correct values
  Given login page is opened
  When user login with username "pranit" and password "123456"
  And clicks user expenses link
  Then verify bar chart shows correct data as expected
  When click on show date for next year
  Then verify new data is added to bar chart
  