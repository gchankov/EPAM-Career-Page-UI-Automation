/*global module element by*/

'use strict';

module.exports = {
    url: 'https://www.epam.com/careers/job-listings/job.',
    heading: element(by.css('header.vacancy-page__header > h1')),
    location: element(by.css('header.vacancy-page__header > ul.vacancy-page__location')),
    jobId: element(by.css('section.section__content > strong.vacancy-page__id')),
    description: element(by.css('section.section__content div.vacancy-page__top-description')),
    content: element(by.css('div.section__content-holder')),
    applicationForm: element(by.css('aside.section__sidebar div.form-constructor-ui.form-component.form-component--inline.form-component--disclaimer')),
    applicationFormHeadingPosition: element(by.css('.form-component__description')),
    applicationFormHeadingLocation: element(by.css('.form-component__location')),
    applicationFormLinkedInButton: element(by.css('.button-ui.bg-color-light-blue.apply-with-linkedin__button')),
    applicationFormFirstnameInputField: element(by.css('#_content_epam_en_careers_job-listings_job_jcr_content_right-container_form_constructor_applicantFirstName')),
    applicationFormLastnameInputField: element(by.css('#_content_epam_en_careers_job-listings_job_jcr_content_right-container_form_constructor_applicantLastName')),
    applicationFormEmailInputField: element(by.css('#_content_epam_en_careers_job-listings_job_jcr_content_right-container_form_constructor_applicantEmail')),
    applicationFormCountryDropdownSelect: element(by.css('div[id*="select-box-applicantCountry"')),
    applicationFormFileBrowseButton: element(by.css('.file-upload-ui')),
    applicationFormRichTextArea: element(by.css('#_content_epam_en_careers_job-listings_job_jcr_content_right-container_form_constructor_applicantMessage')),
    applicationFormPersonalDataDisclaimer: element(by.css('label[for="_content_epam_en_careers_job-listings_job_jcr_content_right-container_form_constructor_gdprConsent"]')),
    applicationFormSubscriptionDisclaimer: element(by.css('label[for="_content_epam_en_careers_job-listings_job_jcr_content_right-container_form_constructor_subscription_checkbox_copy"]')),
    applicationFormCaptchaImage: element(by.css('.captcha__image')),
    applicationFormCaptchaInputField: element(by.css('.form-component__input.form-component__field.captcha__input')),
    applicationFormSubmitButton: element(by.css('.button-ui-wrapper.right-button.button-submit > button'))
};
