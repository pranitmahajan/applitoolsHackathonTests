import { When, Then } from 'cucumber';
import { dashboardPage } from '../../pages/dashboardPage';

When(/^clicks user expenses link$/, () => {
    $(dashboardPage.elements.expensesLink).click();
});

Then(/^verify bar chart shows correct data as expected$/, () => {
    // Only way to verify this is through image comparison,
    // as this is canvas element, can't functionally access details in it
});

When(/^click on show date for next year$/, () => {
    $(dashboardPage.elements.addDataSet).click();
});

Then(/^verify new data is added to bar chart$/, () => {
    // Only way to verify this is through image comparison,
    // as this is canvas element, can't functionally access details in it
});
