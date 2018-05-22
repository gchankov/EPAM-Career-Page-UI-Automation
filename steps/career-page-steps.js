'use strict';

const { Given, When, Then } = require('cucumber');
const careerPage = require('./../pages/career-page');
const expectedFilterSkills = ['ADMINISTRATIVE POSITIONS',
    'CLOUD & DEVOPS',
    'CONSULTING & BUSINESS ANALYSIS',
    'DATA ANALYSIS & DIGITAL STRATEGY',
    'DELIVERY & PROJECT MANAGEMENT',
    'HR & TALENT ACQUISITION',
    'MANAGEMENT',
    'SALES, MARKETING & PR',
    'SERVICE MANAGEMENT AND COMPLIANCE',
    'SOFTWARE ARCHITECTURE',
    'SOFTWARE ENGINEERING',
    'SOFTWARE TEST ENGINEERING',
    'TRAINING & COACHING',
    'USER EXPERIENCE & DESIGN'];
const expectedDropdownSkills = 'Administrative positions\nCloud & DevOps\nConsulting & Business Analysis\n' + 
    'Data Analysis & Digital Strategy\nDelivery & Project Management\nHR & Talent Acquisition\nManagement\n' +
    'Sales, Marketing & PR\nService Management and Compliance\nSoftware Architecture\nSoftware Engineering\n' +
    'Software Test Engineering\nTraining & Coaching\nUser Experience & Design';

Given(/the user is on EPAM Career page/, () => {
    return careerPage.open();
});

Given(/the user applied job filters for all skills/, () => {
    careerPage.jobSearchSkillsSelect.click();
    careerPage.jobSearchSkillsDropdownCheckboxes.then((checkboxes) => {
        checkboxes.forEach((checkbox) => {
            checkbox.click();
        });
    });
    careerPage.jobSearchSkillsSelect.click();
    return waitForElementNotDisplayed(careerPage.jobSearchSkillsDropdown, 'Career page job search skills select drop down')
});

When(/the job search form loads/, () => {
    return waitForElementDisplayed(careerPage.jobSearchForm, 'Career page job search form');
});

When(/the user clicks on job search button/, () => {
    return careerPage.jobSearchButton.click();
});

When(/the user enters "(.+)" keyword in job search input/, (keyword) => {
    return careerPage.jobSearchInputField.sendKeys(keyword);
});

When(/the user clicks on location drop down select/, () => {
    careerPage.jobSearchLocationSelect.click();
    return waitForElementDisplayed(careerPage.jobSearchLocationDropdown, 'Career page job location drop down');
});

When(/the user selects "(.+)" country from location drop down select/, (country) => {
    return careerPage.jobSearchLocationDropdown.element(by.css('li[aria-label="' + country +'"]')).click();
});

When(/the user selects "(.+)" city from location drop down select/, (city) => {
    return careerPage.jobSearchLocationDropdown.element(by.cssContainingText('ul.options.nested.open > li.option', city)).click();
});

When(/the user clicks on skill drop down select/, () => {
    careerPage.jobSearchSkillsSelect.click();
    return waitForElementDisplayed(careerPage.jobSearchSkillsDropdown, 'Career page skills drop down');
});

When(/the user applies all skill drop down checkboxes/, () => {
    return careerPage.jobSearchSkillsDropdownCheckboxes.then((checkboxes) => {
        checkboxes.forEach((checkbox) => {
            checkbox.click();
        });
    });
});

When(/the user removes job filters for all skills/, () => {
    return careerPage.jobSearchFilterTags.then((filterTags) => {
        filterTags.forEach((filterTag) => {
            filterTag.element(by.css('span.unselect-tag')).click();
        });
    });
});

When(/the user clicks apply button on first job result/, () => {
    waitForElementDisplayed(careerPage.jobSearchResultsList, 'Career page job search results list');
    return careerPage.jobSearchResults.get(0).element(by.css('a.search-result__item-apply')).click();
});

Then(/job search input field should be displayed/, () => {
    return waitForElementDisplayed(careerPage.jobSearchInputField, 'Career page job search input field');
});

Then(/location drop down select should be displayed/, () => {
    return waitForElementDisplayed(careerPage.jobSearchLocationSelect, 'Career page job search location select');
});

Then(/skills drop down select should be displayed/, () => {
    return waitForElementDisplayed(careerPage.jobSearchSkillsSelect, 'Career page job search skills select');
});

Then(/job search button should be displayed/, () => {
    return waitForElementDisplayed(careerPage.jobSearchButton, 'Career page job search button');
});

Then(/job search filter section should be displayed/, () => {
    return waitForElementDisplayed(careerPage.jobSearchResultsFilter, 'Career page job search results filter');
});

Then(/search results' list heading should be displayed/, () => {
    return waitForElementDisplayed(careerPage.jobSearchResultsHeader, 'Career page job search results heading');
});

Then(/search results' sort menu should be displayed/, () => {
    return waitForElementDisplayed(careerPage.jobSearchResultsSorter, 'Career page job search results sorter');
});

Then(/search results' list should be displayed/, () => {
    return waitForElementDisplayed(careerPage.jobSearchResultsList, 'Career page job search results list');
});

Then(/each search result should contain position name/, () => {
    return careerPage.jobSearchResults.then((searchResults) => {
        searchResults.forEach((searchResult) => {
            expect(searchResult.element(by.css('a.search-result__item-name')).isDisplayed()).to.eventually.equal(true);
        });
    });
});

Then(/each search result should contain position location/, () => {
    return careerPage.jobSearchResults.then((searchResults) => {
        searchResults.forEach((searchResult) => {
            expect(searchResult.element(by.css('strong.search-result__location')).isDisplayed()).to.eventually.equal(true);
        });
    });
});

Then(/each search result should contain position description/, () => {
    return careerPage.jobSearchResults.then((searchResults) => {
        searchResults.forEach((searchResult) => {
            expect(searchResult.element(by.css('p.search-result__item-description')).isDisplayed()).to.eventually.equal(true);
        });
    });
});

Then(/each search result should contain apply button/, () => {
    return careerPage.jobSearchResults.then((searchResults) => {
        searchResults.forEach((searchResult) => {
            expect(searchResult.element(by.css('a.search-result__item-apply')).isDisplayed()).to.eventually.equal(true);
        });
    });
});

Then(/each search should contain shareable link/, () => {
    return careerPage.jobSearchResults.then((searchResults) => {
        searchResults.forEach((searchResult) => {
            expect(searchResult.element(by.css('button.search-result__share-button')).isDisplayed()).to.eventually.equal(true);
        });
    });
});

Then(/each search result should contain the keyword "(.+)"/, (keyword) => {
    return careerPage.jobSearchResults.then((searchResults) => {
        searchResults.forEach((searchResult) => {
            expect(searchResult.getText()).to.eventually.include(keyword);
        });
    });
});

Then(/each search result should contain the location "(.+)"/, (location) => {
    return careerPage.jobSearchResults.then((searchResults) => {
        searchResults.forEach((searchResult) => {
            expect(searchResult.element(by.css('strong.search-result__location')).getText()).to.eventually.equal(location.toUpperCase());
        });
    });
});

Then(/all skills with checkboxes should be displayed/, () => {
    return careerPage.jobSearchSkillsDropdownCheckboxes.then((checkboxes) => {
        checkboxes.forEach((checkbox) => {
            expect(checkbox.element(by.css('input.checkbox-custom')).isPresent()).to.eventually.equal(true);
        });
        expect(careerPage.jobSearchSkillsDropdown.getText()).to.eventually.deep.equal(expectedDropdownSkills);
    });
});

Then(/job filters for all skills should be displayed/, () => {
    return careerPage.jobSearchFilterTags.then((filterTags) => {
        filterTags.forEach((filterTag) => {
            expect(filterTag.isPresent()).to.eventually.equal(true);
        });
        expect(careerPage.jobSearchFilterTags.getText()).to.eventually.deep.equal(expectedFilterSkills);
    });
});

Then(/"(.+)" message should be displayed/, (message) => {
    waitForElementDisplayed(careerPage.jobSearchResultsError, 'Career page job search results heading');
    return expect(careerPage.jobSearchResultsError.getText()).to.eventually.equal(message);
});

Then(/no job filter should be displayed/, () => {
    return careerPage.jobSearchFilterTags.then((filterTags) => {
        filterTags.forEach((filterTag) => {
            expect(filterTag.isPresent()).to.eventually.equal(false);
        });
    });
});