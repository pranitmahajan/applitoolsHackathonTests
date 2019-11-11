/* global eyes, loginURL, Target */

import { Given, Then } from 'cucumber';

Given(/^login page is opened with ads enabled$/, () => {
    browser.url(`${loginURL}?showAd=true`);
});

Then(/^verify 2 ads are present on page$/, async () => {
    await eyes.open(browser);
    await eyes.check('Ads', Target.window());
    await eyes.closeAsync();
});
