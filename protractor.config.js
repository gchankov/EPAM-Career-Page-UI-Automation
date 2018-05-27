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
    SELENIUM_PROMISE_MANAGER: false,
    onPrepare: async () => {
        const chai = require('chai');
        global.expect = chai.expect;
        global.GLOBAL_TIMEOUT = GLOBAL_TIMEOUT;
        global.ec = protractor.ExpectedConditions;
        global.waitForElementClickable = async (element, name) => {
            await browser.wait(ec.elementToBeClickable(element), GLOBAL_TIMEOUT, name + ' element is not displayed.');
        };
        global.waitForElementInvisible = async (element, name) => {
            await browser.wait(ec.invisibilityOf(element), GLOBAL_TIMEOUT, name + ' element is not invisible.');
        };
        global.waitForTextToBePresentInElement = async (text, element, name) => {
            await browser.wait(ec.textToBePresentInElement(element, text), GLOBAL_TIMEOUT, text + ' text is not present in ' + name + ' element.');
        };
        global.waitForPageReady = async () => {
            await browser.waitForAngular();
            await browser.wait(async () => {
                const ajaxReady = await browser.executeScript('return jQuery.active === 0');
                return ajaxReady;
            }, GLOBAL_TIMEOUT, 'AJAX activity not finished.');
            await browser.wait(async () => {
                const documentReady = await browser.executeScript('return document.readyState === "complete"');
                return documentReady;
            }, GLOBAL_TIMEOUT, 'Document not ready.');
        };
        global.scrollElementIntoView = async (element) => {
            await browser.executeScript('arguments[0].scrollIntoView({behavior: "instant", block: "center", inline: "center"})', element);
        };
        global.resetScrollView = async () => {
            await browser.executeScript('window.scrollTo(0,0)');
        };

        browser.waitForAngularEnabled(false);
        await browser.manage().window().maximize();
    }
};
