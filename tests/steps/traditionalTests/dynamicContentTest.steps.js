/* global loginURL */

import { Given, Then } from 'cucumber';
import { dashboardPage } from '../../pages/dashboardPage';

Given(/^login page is opened with ads enabled$/, () => {
    browser.url(`${loginURL}?showAd=true`);
});

Then(/^verify 2 ads are present on page$/, () => {
    $(dashboardPage.elements.ad1).waitForDisplayed();
    $(dashboardPage.elements.ad2).waitForDisplayed();
});
