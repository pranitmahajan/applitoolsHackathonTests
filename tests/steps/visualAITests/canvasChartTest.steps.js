/* global eyes, configuration, testName */

import { When, Then } from 'cucumber';
import { dashboardPage } from '../../pages/dashboardPage';

When(/^clicks user expenses link$/, () => {
    $(dashboardPage.elements.expensesLink).click();
});

Then(/^verify bar chart shows correct data as expected$/, async () => {
    eyes.setBatch('Expense bar chart Tests', 'Bar chart');
    configuration.setTestName(`${testName}-Expense bar chart`);
    await eyes.open(browser);
    await eyes.checkElementBySelector(dashboardPage.elements.barChart);
    await eyes.closeAsync();
});

When(/^click on show date for next year$/, () => {
    $(dashboardPage.elements.addDataSet).click();
});

Then(/^verify new data is added to bar chart$/, async () => {
    eyes.setBatch('Expense bar chart Tests', 'Bar chart');
    configuration.setTestName(`${testName}-New added expense bar chart`);
    await eyes.open(browser);
    await eyes.checkElementBySelector(dashboardPage.elements.barChart);
    await eyes.closeAsync();
});
