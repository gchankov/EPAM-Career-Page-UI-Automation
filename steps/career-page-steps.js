'use strict';

const { Given, When, Then } = require('cucumber');
const careerPage = require('./../pages/career-page');
const expectedFilterTagLabels = ['ADMINISTRATIVE POSITIONS',
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
const expectedDropdownSkillsText = 'Administrative positions\nCloud & DevOps\nConsulting & Business Analysis\n' + 
    'Data Analysis & Digital Strategy\nDelivery & Project Management\nHR & Talent Acquisition\nManagement\n' +
    'Sales, Marketing & PR\nService Management and Compliance\nSoftware Architecture\nSoftware Engineering\n' +
    'Software Test Engineering\nTraining & Coaching\nUser Experience & Design';

Given(/the user is on EPAM Career page/, async () => {
    await careerPage.open();
});

Given(/the user applied job filters for all skills/, async () => {
    const skillsDropdownSelect = await careerPage.jobSearchSkillsDropdownSelect;
    await skillsDropdownSelect.click();
    await scrollElementIntoView(careerPage.jobSearchSkillsDropdownPanel);
    await waitForElementClickable(careerPage.jobSearchSkillsDropdownPanel, 'Career page skills select drop down panel');

    const skillsDropdownPanelLabels = await careerPage.jobSearchSkillsDropdownLabels;
    await Promise.all(skillsDropdownPanelLabels.map((skillsDropdownPanelLabel) => {
        return skillsDropdownPanelLabel.click();
    }));
    await skillsDropdownSelect.click();
    await scrollElementIntoView(careerPage.jobSearchFilterTagsPanel);
});

Given(/the user is on job listing page with application form/, async () => {
    await careerPage.open();
    const jobSearchButton = await careerPage.jobSearchButton;
    await jobSearchButton.click();
    await waitForElementClickable(careerPage.jobSearchResultsList, 'Career page job search results list');
    const firstSearchResultApplyButton = await careerPage.getFirstSearchResultApplyButton();
    await firstSearchResultApplyButton.click();
});

When(/the job search form loads/, async () => {
    await waitForElementClickable(careerPage.jobSearchForm, 'Career page job search form');
});

When(/the user clicks on job search button/, async () => {
    const jobSearchButton = await careerPage.jobSearchButton;
    await jobSearchButton.click();
});

When(/the user enters "(.+)" keyword in job search input/, async (keyword) => {
    const jobSearchInputField = await careerPage.jobSearchInputField;
    await jobSearchInputField.sendKeys(keyword);
});

When(/the user clicks on location drop down select/, async () => {
    const jobSearchLocationDropdownSelect = await careerPage.jobSearchLocationDropdownSelect;
    await jobSearchLocationDropdownSelect.click();
    await waitForElementClickable(careerPage.jobSearchLocationDropdownPanel, 'Career page job location select drop down panel');
});

When(/the user selects "(.+)" country from location drop down select/, async (country) => {
    const locationDropdownPanelCountry = await careerPage.getLocationDropdownPanelCountry(country);
    await waitForElementClickable(locationDropdownPanelCountry, 'Location select ' + country + ' country option');
    await locationDropdownPanelCountry.click();
    // await waitForPageReady();
    await browser.sleep(1000);
});

When(/the user selects "(.+)" city from location drop down select/, async (city) => {
    const locationDropdownPanelCity = await careerPage.getLocationDropdownPanelCity(city);
    await waitForElementClickable(locationDropdownPanelCity, 'Location select ' + city + ' city option');
    await locationDropdownPanelCity.click();
    await waitForTextToBePresentInElement(city, careerPage.jobSearchLocationDropdownSelect, 'location drop down select')
});

When(/the user clicks on skills drop down select/, async () => {
    const skillsDropdownSelect = await careerPage.jobSearchSkillsDropdownSelect;
    await skillsDropdownSelect.click();
    await scrollElementIntoView(careerPage.jobSearchSkillsDropdownPanel);
    await waitForElementClickable(careerPage.jobSearchSkillsDropdownPanel, 'Career page skills select drop down panel');
});

When(/the user applies all skills drop down checkboxes/, async () => {
    const skillsDropdownPanelLabels = await careerPage.jobSearchSkillsDropdownLabels;
    await Promise.all(skillsDropdownPanelLabels.map((skillsDropdownPanelLabel) => {
        return skillsDropdownPanelLabel.click();
    }));
    const skillsDropdownSelect = await careerPage.jobSearchSkillsDropdownSelect;
    await skillsDropdownSelect.click();
    await scrollElementIntoView(careerPage.jobSearchFilterTagsPanel);
});

When(/the user removes job filters for all skills/, async () => {
    const skillsTagsCloseButtons = await careerPage.getSkillsTagsCloseButtons();
    await Promise.all(skillsTagsCloseButtons.map((skillsTagsCloseButton) => {
        return skillsTagsCloseButton.click();
    }));
});

When(/the user clicks apply button on first job result/, async () => {
    await waitForElementClickable(careerPage.jobSearchResultsList, 'Career page job search results list');
    const firstSearchResultApplyButton = await careerPage.getFirstSearchResultApplyButton();
    await firstSearchResultApplyButton.click();
});

Then(/job search input field should be displayed/, async () => {
    await waitForElementClickable(careerPage.jobSearchInputField, 'Career page job search input field');
});

Then(/location drop down select should be displayed/, async () => {
    await waitForElementClickable(careerPage.jobSearchLocationDropdownSelect, 'Career page job search location select');
});

Then(/skills drop down select should be displayed/, async () => {
    await waitForElementClickable(careerPage.jobSearchSkillsDropdownSelect, 'Career page job search skills select');
});

Then(/job search button should be displayed/, async () => {
    await waitForElementClickable(careerPage.jobSearchButton, 'Career page job search button');
});

Then(/job search filter section should be displayed/, async () => {
    await waitForElementClickable(careerPage.jobSearchResultsFilter, 'Career page job search results filter');
});

Then(/search results' list heading should be displayed/, async () => {
    await waitForElementClickable(careerPage.jobSearchResultsHeader, 'Career page job search results heading');
});

Then(/search results' sort menu should be displayed/, async () => {
    await waitForElementClickable(careerPage.jobSearchResultsSorter, 'Career page job search results sorter');
});

Then(/search results' list should be displayed/, async () => {
    await waitForElementClickable(careerPage.jobSearchResultsList, 'Career page job search results list');
});

Then(/each search result should contain position name/, async () => {
    const searchResultsPositionNames = await careerPage.getEachSearchResultsPositionName();
    const areSearchResultsPositionNamesDisplayed = await Promise.all(searchResultsPositionNames.map((searchResultPositionName) => {
        return searchResultPositionName.isDisplayed();
    }));
    expect(areSearchResultsPositionNamesDisplayed.every((isSearchResultPositionNameDisplayed) => {
        return isSearchResultPositionNameDisplayed;
    }), 'Job Search results position name not displayed.').to.be.true;
});

Then(/each search result should contain position location/, async () => {
    const searchResultsPositionLocations = await careerPage.getEachSearchResultsPositionLocation();
    const areSearchResultsPositionLocationsDisplayed = await Promise.all(searchResultsPositionLocations.map((searchResultPositionLocation) => {
        return searchResultPositionLocation.isDisplayed();
    }));
    expect(areSearchResultsPositionLocationsDisplayed.every((isSearchResultPositionLocationDisplayed) => {
        return isSearchResultPositionLocationDisplayed;
    }), 'Job Search results position location not displayed.').to.be.true;
});

Then(/each search result should contain position description/, async () => {
    const searchResultsPositionDescriptions = await careerPage.getEachSearchResultsPositionDescription();
    const areSearchResultsPositionDescriptionsDisplayed = await Promise.all(searchResultsPositionDescriptions.map((searchResultPositionDescription) => {
        return searchResultPositionDescription.isDisplayed();
    }));
    expect(areSearchResultsPositionDescriptionsDisplayed.every((isSearchResultPositionDescriptionDisplayed) => {
        return isSearchResultPositionDescriptionDisplayed;
    }), 'Job Search results position description not displayed.').to.be.true;
});

Then(/each search result should contain apply button/, async () => {
    const searchResultsApplyButtons = await careerPage.getEachSearchResultsApplyButton();
    const areSearchResultsApplyButtonsDisplayed = await Promise.all(searchResultsApplyButtons.map((searchResultApplyButton) => {
        return searchResultApplyButton.isDisplayed();
    }));
    expect(areSearchResultsApplyButtonsDisplayed.every((isSearchResultApplyButtonDisplayed) => {
        return isSearchResultApplyButtonDisplayed;
    }), 'Job Search results apply button not displayed.').to.be.true;
});

Then(/each search result should contain shareable link/, async () => {
    const searchResultsShareableLinks = await careerPage.getEachSearchResultsShareableLink();
    const areSearchResultsShareableLinksDisplayed = await Promise.all(searchResultsShareableLinks.map((searchResultShareableLink) => {
        return searchResultShareableLink.isDisplayed();
    }));
    expect(areSearchResultsShareableLinksDisplayed.every((isSearchResultShareableLinkDisplayed) => {
        return isSearchResultShareableLinkDisplayed;
    }), 'Job Search results shareable link not displayed.').to.be.true;
});

Then(/each search result should contain the keyword "(.+)"/, async (keyword) => {
    const searchResultsTexts = await careerPage.getEachSearchResultsText();
    expect(searchResultsTexts.every((searchResultText) => {
        return searchResultText.indexOf(keyword) > -1;
    }), keyword + ' expected keyword is not present in all search results.').to.be.true;
});

Then(/each search result should contain the location "(.+)"/, async (location) => {
    const expectedLocation = location.toUpperCase();
    const searchResultsPositionLocations = await careerPage.getEachSearchResultsPositionLocation();
    const searchResultsPositionLocationsTexts = await Promise.all(searchResultsPositionLocations.map((searchResultPositionLocation) => {
        return searchResultPositionLocation.getText();
    }));
    expect(searchResultsPositionLocationsTexts.every((searchResultPositionLocationText) => {
        return searchResultPositionLocationText === expectedLocation;
    }), expectedLocation + ' expected location is not present in all search results.').to.be.true;
});

Then(/all expected skills with checkboxes should be displayed/, async () => {
    const skillsDropdownPanelCheckboxes = await careerPage.getSkillsDropdownPanelCheckboxes();
    const areSkillsDropdownPanelCheckboxesPresent = await Promise.all(skillsDropdownPanelCheckboxes.map((skillsDropdownPanelCheckbox) => {
        return skillsDropdownPanelCheckbox.isPresent();
    }));
    expect(areSkillsDropdownPanelCheckboxesPresent.every((isSkillsDropdownPanelCheckboxPresent) => {
        return isSkillsDropdownPanelCheckboxPresent;
    }), 'Not all expected skills checkboxes are present.').to.be.true;

    const skillsDropdownPanel = await careerPage.jobSearchSkillsDropdownPanel;
    const skillsDropdownPanelText = await skillsDropdownPanel.getText();
    expect(skillsDropdownPanelText).to.deep.equal(expectedDropdownSkillsText);
});

Then(/job filter tags for all skills should be displayed/, async () => {
    const searchFilterTags = await careerPage.jobSearchFilterTags;
    const areSearchFilterTagsDisplayed = await Promise.all(searchFilterTags.map((searchFilterTag) => {
        return searchFilterTag.isDisplayed();
    }));
    expect(areSearchFilterTagsDisplayed.every((isSearchFilterTagDisplayed) => {
        return isSearchFilterTagDisplayed;
    }), 'Not all expected filter tags are displayed.').to.be.true;

    
    const searchFilterTagsLabels = await Promise.all(searchFilterTags.map((searchFilterTag) => {
        return searchFilterTag.getText();
    }));
    expect(searchFilterTagsLabels.sort()).to.deep.equal(expectedFilterTagLabels);
});

Then(/"(.+)" message should be displayed/, async (message) => {
    await waitForElementClickable(careerPage.jobSearchResultsError, 'Career page job search no results message');
    const searchResultsErrorMessage = await careerPage.jobSearchResultsError;
    const searchResultsErrorMessageText = await searchResultsErrorMessage.getText();
    expect(searchResultsErrorMessageText).to.equal(message);
});

Then(/no job skill filter should be displayed/, async () => {
    const searchFilterTagsPanel = await careerPage.jobSearchFilterTagsPanel;
    const searchFilterTagsPanelText = await searchFilterTagsPanel.getText();
    expect(searchFilterTagsPanelText, 'Some filter tags are still displayed. ' + searchFilterTagsPanelText).to.be.empty;
});
