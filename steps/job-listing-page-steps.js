'use strict';

const { Then } = require('cucumber');
const jobListingPage = require('./../pages/job-listing-page');

Then(/job listing page should be opened/, () => {
    return expect(browser.getCurrentUrl()).to.eventually.contain(jobListingPage.url);
});

Then(/job listing page should contain position/, () => {
    waitForElementDisplayed(jobListingPage.heading, 'Job listing page heading');
    return expect(jobListingPage.heading.getText()).to.eventually.not.equal('');
});

Then(/job listing page should contain location/, () => {
    waitForElementDisplayed(jobListingPage.location, 'Job listing page location');
    return expect(jobListingPage.location.getText()).to.eventually.not.equal('');
});

Then(/job listing page should contain job id/, () => {
    waitForElementDisplayed(jobListingPage.jobId, 'Job listing page job id');
    return expect(jobListingPage.jobId.getText()).to.eventually.not.equal('');
});

Then(/job listing page should contain descpiption/, () => {
    waitForElementDisplayed(jobListingPage.description, 'Job listing page descpiption');
    return expect(jobListingPage.description.getText()).to.eventually.not.equal('');
});

Then(/job listing page should contain responsibilities/, () => {
    waitForElementDisplayed(jobListingPage.content, 'Job listing page content');
    return expect(jobListingPage.content.getText()).to.eventually.contain('RESPONSIBILITIES');
});

Then(/job listing page should contain requirements/, () => {
    waitForElementDisplayed(jobListingPage.content, 'Job listing page content');
    return expect(jobListingPage.content.getText()).to.eventually.contain('REQUIREMENTS');
});

Then(/job listing page should contain application form/, () => {
    return waitForElementDisplayed(jobListingPage.applicationForm, 'Job listing page application form');
});