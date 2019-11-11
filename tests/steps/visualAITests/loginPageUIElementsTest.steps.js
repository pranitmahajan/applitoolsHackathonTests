/* global eyes, Target, loginURL */

import { Given, Then } from 'cucumber';

Given(/^login page is opened$/, () => {
    browser.url(loginURL);
});

Then(/^all elements on login page should be displayed$/, async () => {
    await eyes.check('Login Window', Target.window());
});
