/* global eyes */

import { When, Then } from 'cucumber';
import { dashboardPage } from '../../pages/dashboardPage';

When(/^amount header is clicked in Recent Transactions table$/, () => {
    $(dashboardPage.elements.amountHeader).click();
});

Then(
    /^table must sort in ascending order of amount with data intact$/,
    async () => {
        await eyes.checkElementBySelector(
            dashboardPage.elements.transactionTable,
        );
    },
);
