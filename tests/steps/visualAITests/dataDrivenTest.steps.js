/* global eyes, Target, configuration, testName */

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

Then(/^"([^"]*)" error is thrown$/, async (msg) => {
    eyes.setBatch('Login Tests', 'Login Error Messages');
    configuration.setTestName(`${testName}-${msg}`);
    await eyes.open(browser);
    await eyes.check('Login Window With Errors', Target.window());
    await eyes.closeAsync();
});

When(
    /^user login with username "([^"]*)" and password "([^"]*)"$/,
    (username, password) => {
        loginPage.login(username, password);
    },
);

Then(/^login is successfull$/, async () => {
    eyes.setBatch('Login Tests', 'Login Error Messages');
    configuration.setTestName(`${testName} - Succesfull Login`);
    await eyes.open(browser);
    await eyes.check('Dashboard Page', Target.window());
    await eyes.closeAsync();
});
