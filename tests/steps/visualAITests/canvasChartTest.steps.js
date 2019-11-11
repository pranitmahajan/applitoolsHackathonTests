/* global eyes */

import { When, Then } from 'cucumber';
import { dashboardPage } from '../../pages/dashboardPage';

When(/^clicks user expenses link$/, () => {
    $(dashboardPage.elements.expensesLink).click();
});

Then(/^verify bar chart shows correct data as expected$/, async () => {
    await eyes.checkElementBySelector(dashboardPage.elements.barChart);
});

When(/^click on show date for next year$/, () => {
    $(dashboardPage.elements.addDataSet).click();
});

Then(/^verify new data is added to bar chart$/, async () => {
    await eyes.checkElementBySelector(dashboardPage.elements.barChart);
});
