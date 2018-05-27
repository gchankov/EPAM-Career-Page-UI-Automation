'use strict';

const { When, Then } = require('cucumber');
const jobListingPage = require('./../pages/job-listing-page');

When(/the user submits empty application form/, async () => {
    const applicationFormSubmitButton = await jobListingPage.applicationFormSubmitButton;
    await scrollElementIntoView(applicationFormSubmitButton);
    await applicationFormSubmitButton.click();
});

Then(/job listing page should be opened/, async () => {
    const currentUrl = await browser.getCurrentUrl();
    expect(currentUrl).to.contain(jobListingPage.url);
});

Then(/job listing page should contain position/, async () => {
    await waitForElementClickable(jobListingPage.heading, 'Job listing page heading');
    const jobListingPageHeading = await jobListingPage.heading;
    const jobListingPageHeadingText = await jobListingPageHeading.getText();
    expect(jobListingPageHeadingText).to.not.be.empty;
});

Then(/job listing page should contain location/, async () => {
    await waitForElementClickable(jobListingPage.location, 'Job listing page location');
    const jobListingPageLocation = await jobListingPage.location;
    const jobListingPageLocationText = await jobListingPageLocation.getText();
    expect(jobListingPageLocationText).to.not.be.empty;
});

Then(/job listing page should contain job id/, async () => {
    await waitForElementClickable(jobListingPage.jobId, 'Job listing page job id');
    const jobListingPageJobId = await jobListingPage.jobId;
    const jobListingPageJobIdText = await jobListingPageJobId.getText();
    expect(jobListingPageJobIdText).to.not.be.empty;
});

Then(/job listing page should contain descpiption/, async () => {
    await waitForElementClickable(jobListingPage.description, 'Job listing page descpiption');
    const jobListingPageDescription = await jobListingPage.description;
    const jobListingPageDescriptionText = await jobListingPageDescription.getText();
    expect(jobListingPageDescriptionText).to.not.be.empty;
});

Then(/job listing page should contain responsibilities/, async () => {
    await waitForElementClickable(jobListingPage.content, 'Job listing page content');
    const jobListingPageContent = await jobListingPage.content;
    const jobListingPageContentText = await jobListingPageContent.getText();
    expect(jobListingPageContentText).to.contain('RESPONSIBILITIES');
});

Then(/job listing page should contain requirements/, async () => {
    await waitForElementClickable(jobListingPage.content, 'Job listing page content');
    const jobListingPageContent = await jobListingPage.content;
    const jobListingPageContentText = await jobListingPageContent.getText();
    expect(jobListingPageContentText).to.contain('REQUIREMENTS');
});

Then(/job listing page should contain application form/, async () => {
    await waitForElementClickable(jobListingPage.applicationForm, 'Job listing page application form');
});

Then(/the application form should contain heading with position/, async () => {
    await waitForElementClickable(jobListingPage.applicationFormHeadingPosition, 'Job listing page application form heading position');
    const applicationFormHeadingPosition = await jobListingPage.applicationFormHeadingPosition;
    const applicationFormHeadingPositionText = await applicationFormHeadingPosition.getText();
    expect(applicationFormHeadingPositionText).to.not.be.empty;
});

Then(/the application form should contain heading with location/, async () => {
    await waitForElementClickable(jobListingPage.applicationFormHeadingLocation, 'Job listing page application form heading location');
    const applicationFormHeadingLocation = await jobListingPage.applicationFormHeadingLocation;
    const applicationFormHeadingLocationText = await applicationFormHeadingLocation.getText();
    expect(applicationFormHeadingLocationText).to.not.be.empty;
});

Then(/the application form should contain apply with LinkedIn button/, async () => {
    await waitForElementClickable(jobListingPage.applicationFormLinkedInButton, 'Job listing page application form apply with LinkedIn button');
});

Then(/the application form should contain first name input field/, async () => {
    await waitForElementClickable(jobListingPage.applicationFormFirstnameInputField, 'Job listing page application form first name input field');
});

Then(/the application form should contain last name input field/, async () => {
    await waitForElementClickable(jobListingPage.applicationFormLastnameInputField, 'Job listing page application form last name input field');
});

Then(/the application form should contain email input field/, async () => {
    await waitForElementClickable(jobListingPage.applicationFormEmailInputField, 'Job listing page application form email input field');
});

Then(/the application form should contain country drop down select/, async () => {
    await waitForElementClickable(jobListingPage.applicationFormCountryDropdownSelect, 'Job listing page application form country drop down select');
});

Then(/the application form should contain file browse button/, async () => {
    await waitForElementClickable(jobListingPage.applicationFormFileBrowseButton, 'Job listing page application form file browse button');
});

Then(/the application form should contain CV rich text area/, async () => {
    await waitForElementClickable(jobListingPage.applicationFormRichTextArea, 'Job listing page application form CV rich text area');
});

Then(/the application form should contain personal data disclaimer/, async () => {
    await waitForElementClickable(jobListingPage.applicationFormPersonalDataDisclaimer, 'Job listing page application form personal data disclaimer');
});

Then(/the application form should contain subscription disclaimer/, async () => {
    await waitForElementClickable(jobListingPage.applicationFormSubscriptionDisclaimer, 'Job listing page application form subscription disclaimer');
});

Then(/the application form should contain captcha image/, async () => {
    await waitForElementClickable(jobListingPage.applicationFormCaptchaImage, 'Job listing page application form captcha image');
});

Then(/the application form should contain captcha input field/, async () => {
    await waitForElementClickable(jobListingPage.applicationFormCaptchaInputField, 'Job listing page application form captcha input field');
});

Then(/the application form should contain submit button/, async () => {
    await waitForElementClickable(jobListingPage.applicationFormSubmitButton, 'Job listing page application form submit button');
});

Then(/first name input field should be colored in red/, async () => {
    const applicationFormFirstnameInputField = await jobListingPage.applicationFormFirstnameInputField;
    const applicationFormFirstnameInputFieldBorderColor = await applicationFormFirstnameInputField.getCssValue('border-color');
    expect(applicationFormFirstnameInputFieldBorderColor).to.equal('rgb(241, 92, 67)');
});

Then(/last name input field should be colored in red/, async () => {
    const applicationFormLastnameInputField = await jobListingPage.applicationFormLastnameInputField;
    const applicationFormLastnameInputFieldBorderColor = await applicationFormLastnameInputField.getCssValue('border-color');
    expect(applicationFormLastnameInputFieldBorderColor).to.equal('rgb(241, 92, 67)');
});

Then(/email input field should be colored in red/, async () => {
    const applicationFormEmailInputField = await jobListingPage.applicationFormEmailInputField;
    const applicationFormEmailInputFieldBorderColor = await applicationFormEmailInputField.getCssValue('border-color');
    expect(applicationFormEmailInputFieldBorderColor).to.equal('rgb(241, 92, 67)');
});

Then(/country drop down select should be colored in red/, async () => {
    const applicationFormCountryDropdownSelect = await jobListingPage.applicationFormCountryDropdownSelect;
    const applicationFormCountryDropdownSelectBorderColor = await applicationFormCountryDropdownSelect.getCssValue('border-color');
    expect(applicationFormCountryDropdownSelectBorderColor).to.equal('rgb(241, 92, 67)');
});

Then(/captcha input field should be colored in red/, async () => {
    const applicationFormCaptchaInputField = await jobListingPage.applicationFormCaptchaInputField;
    const applicationFormCaptchaInputFieldBorderColor = await applicationFormCaptchaInputField.getCssValue('border-color');
    expect(applicationFormCaptchaInputFieldBorderColor).to.equal('rgb(241, 92, 67)');
});
