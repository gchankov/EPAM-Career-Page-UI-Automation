'use strict';

class JobListing {
    constructor() {
        this.url = 'https://www.epam.com/careers/job-listings/job.';
        this.heading = element(by.css('header.vacancy-page__header > h1'));
        this.location = element(by.css('header.vacancy-page__header > ul.vacancy-page__location'));
        this.jobId = element(by.css('section.section__content > strong.vacancy-page__id'));
        this.description = element(by.css('section.section__content div.vacancy-page__top-description'));
        this.content = element(by.css('div.section__content-holder'));
        this.applicationForm = element(by.css('aside.section__sidebar div.form-constructor-ui.form-component.form-component--inline.form-component--disclaimer'));
    }
}

module.exports = new JobListing();