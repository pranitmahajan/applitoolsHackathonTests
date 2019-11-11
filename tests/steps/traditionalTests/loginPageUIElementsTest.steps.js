/* global assert, loginURL */

import { Given, Then } from 'cucumber';
import { loginPage } from '../../pages/loginPage';

Given(/^login page is opened$/, () => {
    browser.url(loginURL);
});

Then(/^all elements on login page should be displayed$/, () => {
    Object.keys(loginPage.elements).forEach((element) => {
        if (element === 'errorMsg')
            // verify that error message is hidden by default
            $(loginPage.elements[element]).waitForDisplayed(undefined, true);
        else $(loginPage.elements[element]).waitForDisplayed();
    });
});

Then(/^login form header should be "([^"]*)"$/, (header) => {
    assert.equal(
        $(loginPage.elements.header).getText(),
        header,
        `Unexpected login header text shown`,
    );
});

Then(/^username label should be "([^"]*)"$/, (userLabel) => {
    assert.equal(
        $(loginPage.elements.usernameLabel).getText(),
        userLabel,
        `Unexpected username label shown`,
    );
});

Then(/^password label should be "([^"]*)"$/, (passLabel) => {
    assert.equal(
        $(loginPage.elements.passwordLabel).getText(),
        passLabel,
        `Unexpected password label shown`,
    );
});

Then(/^login button text should be "([^"]*)"$/, (loginBtnTxt) => {
    assert.equal(
        $(loginPage.elements.loginButton).getText(),
        loginBtnTxt,
        `Unexpected login button text shown`,
    );
});

Then(/^remember me text should be "([^"]*)"$/, (remMeLabel) => {
    assert.equal(
        $(loginPage.elements.rememberMeLabel).getText(),
        remMeLabel,
        `Unexpected remember me label shown`,
    );
});
