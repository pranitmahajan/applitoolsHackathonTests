/* global assert */

import { When, Then } from 'cucumber';
import { loginPage } from '../../pages/loginPage';
import { dashboardPage } from '../../pages/dashboardPage';

When(/^login button is clicked$/, () => {
    $(loginPage.elements.loginButton).click();
});

Then(/^"([^"]*)" error is thrown$/, (error) => {
    assert.equal(
        $(loginPage.elements.errorMsg).getText(),
        error,
        `Unexpected error text shown`,
    );
});

When(/^"([^"]*)" is entered as username$/, (username) => {
    $(loginPage.elements.usernameInput).addValue(username);
});

When(/^"([^"]*)" is entered as password$/, (password) => {
    $(loginPage.elements.passwordInput).addValue(password);
});

When(
    /^user login with username "([^"]*)" and password "([^"]*)"$/,
    (username, password) => {
        loginPage.login(username, password);
    },
);

Then(/^login is successfull$/, () => {
    $(dashboardPage.elements.loggedUsername).waitForDisplayed();
});
