'use strict';

const GLOBAL_TIMEOUT = 40e3;
const os = require('os');
const path = require('path');
const requireIt = require('require-it');

exports.config = {
    specs: [
        'features/*.feature'
    ],
    capabilities: {
        browserName: 'chrome',
        chromeOptions: {
            'args': [
                'disable-infobars'
            ]
        },
        metadata: {
            browser: {
                name: 'chrome',
                version: '65.0.3325.181'
            },
            device: 'Virtual Machine',
            platform: {
                name: 'Linux',
                version: 'Ubuntu 16.04'
            }
        }
    },
    directConnect: true,
    cucumberOpts: {
        require: [
            'steps/*.js'
        ],
        tags: [
            '~@wip'
        ],
        format: [
            'node_modules/cucumber-pretty',
            'json:results/results.json'
        ]
    },
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    chromeDriver: path.join(requireIt.directory('protractor'), 'node_modules', 'webdriver-manager', 'selenium', 'chromedriver_2.37' + (os.platform() === 'win32' ? '.exe' : '')),
    plugins: [{
        package: 'protractor-multiple-cucumber-html-reporter-plugin',
        options:{
            automaticallyGenerateReport: true,
            removeExistingJsonReportFile: true,
            reportName: 'EPAM Careers UI Automation Report'
        }
    }],
    onPrepare: function () {
        const chai = require('chai');
        chai.use(require('chai-as-promised'));
        global.expect = chai.expect;
        global.GLOBAL_TIMEOUT = GLOBAL_TIMEOUT;
        global.ec = protractor.ExpectedConditions;
        global.waitForElementDisplayed = (element, name) => {
            return browser.wait(ec.elementToBeClickable(element), GLOBAL_TIMEOUT, name + ' element didn\'t load.');
        }
        global.waitForElementNotDisplayed = (element, name) => {
            return browser.wait(ec.invisibilityOf(element), GLOBAL_TIMEOUT, name + ' element didn\'t hide.');
        }

        browser.waitForAngularEnabled(false);
        return browser.manage().window().maximize();
    }
};
