/* global eyes, Target */

import { When, Then } from 'cucumber';
import { loginPage } from '../../pages/loginPage';

When(/^"([^"]*)" is entered as username$/, (username) => {
    $(loginPage.elements.usernameInput).addValue(username);
});

When(/^"([^"]*)" is entered as password$/, (password) => {
    $(loginPage.elements.passwordInput).addValue(password);
});

When(/^login button is clicked$/, () => {
    $(loginPage.elements.loginButton).click();
});

// eslint-disable-next-line no-unused-vars
Then(/^"([^"]*)" error is thrown$/, async (m) => {
    await eyes.check('Login Window With Errors', Target.window());
});

When(
    /^user login with username "([^"]*)" and password "([^"]*)"$/,
    (username, password) => {
        loginPage.login(username, password);
    },
);

Then(/^login is successfull$/, async () => {
    await eyes.check('Dashboard Page', Target.window());
});
