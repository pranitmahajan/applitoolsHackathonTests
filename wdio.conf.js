/* global testName, eyes, configuration */
const cucumberJson = require('wdio-cucumberjs-json-reporter').default;

const testApproach = process.argv[6];

exports.config = {
    capabilities: [{ browserName: 'chrome' }],
    maxInstances: 5,
    specs: [`./tests/features/*.feature`],
    logLevel: 'error',
    bail: 0,
    baseUrl: process.argv[4],
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    specFileRetries: 0,
    framework: 'cucumber',
    reporters: [['cucumberjs-json', { jsonFolder: './report/' }]],
    cucumberOpts: {
        require: [`./tests/steps/${testApproach}/*.steps.js`],
        failFast: false,
        format: ['pretty'],
        colors: true,
        snippets: true,
        source: true,
        strict: false,
        tagsInTitle: false,
        timeout: 60000,
        ignoreUndefinedDefinitions: false,
        failAmbiguousDefinitions: true,
    },

    services: [['selenium-standalone']],

    beforeSession() {
        require('@babel/register');
    },

    before(capabilities, specs) {
        // eslint-disable-next-line prefer-destructuring
        global.testName = specs[0].split('/').slice(-1)[0];
        global.loginURL = browser.options.baseUrl;
        global.elements = require('./tests/data/elements.json');
        global.assert = require('chai').assert;
        global.reporter = require('wdio-cucumberjs-json-reporter').cucumberJson;
        browser.setWindowSize(1200, 800);

        // When using visual AI Tests appraoch
        if (testApproach === 'visualAITests') {
            const {
                ClassicRunner,
                Eyes,
            } = require('@applitools/eyes-webdriverio');
            global.Target = require('@applitools/eyes-webdriverio').Target;
            const { Configuration } = require('@applitools/eyes-selenium');

            const runner = new ClassicRunner();
            global.configuration = new Configuration();
            configuration.setAppName('Applitools Hackathon');
            configuration.setTestName(testName);

            global.eyes = new Eyes(runner);
            eyes.setApiKey(process.env.APPLITOOLS_API_KEY);
            eyes.setConfiguration(configuration);
            eyes.setForceFullPageScreenshot(true);
            eyes.setBatch('Applitools Hackathon Tests', 'All Tests');
        }
    },

    async beforeScenario(uri, feature, scenario) {
        // When using visual AI Tests appraoch
        if (testApproach === 'visualAITests') {
            configuration.setTestName(`${testName}-${scenario.name}`);
            await eyes.open(browser);
        }
    },

    afterStep(uri, feature, result) {
        if (!result.passed)
            cucumberJson.attach(browser.takeScreenshot(), 'image/png');
    },

    async afterScenario() {
        // When using visual AI Tests appraoch
        if (testApproach === 'visualAITests') {
            await eyes.closeAsync();
        }
    },

    async after() {
        // When using visual AI Tests appraoch
        if (testApproach === 'visualAITests') {
            await eyes.abortIfNotClosed();
        }
    },

    onComplete() {
        const report = require('multiple-cucumber-html-reporter');
        report.generate({
            jsonDir: './report/',
            reportPath: './report/',
            openReportInBrowser: true,
            pageTitle: 'Applitools Hackathon Tests',
            pageFooter:
                '<div><p> &nbsp &nbsp &nbsp A report for Applitools Hackathon Tests</p></div>',
            durationInMS: true,
            reportName: 'Applitools Hackathon Tests Report',
        });
    },
};
