/* global assert */

import { When, Then } from 'cucumber';
import { dashboardPage } from '../../pages/dashboardPage';

When(/^amount header is clicked in Recent Transactions table$/, () => {
    $(dashboardPage.elements.amountHeader).click();
});

Then(/^table must sort in ascending order of amount with data intact$/, () => {
    const totalRows = $$(dashboardPage.elements.amountCells).length;

    // Verify ascending order
    $$(dashboardPage.elements.amountCells).forEach((amountCell, i) => {
        if (i < totalRows - 1) {
            let currentAmount = amountCell.getText();
            let nextAmount = $$(dashboardPage.elements.amountCells)[
                i + 1
            ].getText();
            currentAmount = currentAmount
                .replace(/ /g, '')
                .replace(/USD/g, '')
                .replace(/,/g, '');
            nextAmount = nextAmount
                .replace(/ /g, '')
                .replace(/USD/g, '')
                .replace(/,/g, '');
            assert(
                parseFloat(currentAmount) < parseFloat(nextAmount),
                'Recent transactions are not in ascending order',
            );
        }
    });

    // Verifying data is intact is hard to automate here functionally,
    // because there is no unique field in table rows to save data.
    // Image comparison will be best approach here.
});
