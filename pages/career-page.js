'use strict';

class CareerPage {
    constructor() {
        this.url = 'https://www.epam.com/careers';
        this.jobSearchForm = element(by.xpath('//*[@id="main"]/div[1]/div[1]/section/div/div[4]/form'));
        this.jobSearchInputField = element(by.xpath('//*[@id="main"]/div[1]/div[1]/section/div/div[4]/form/div/label/input'));
        this.jobSearchLocationSelect = element(by.xpath('//*[@id="main"]/div[1]/div[1]/section/div/div[4]/form/div/div[1]/span[2]/div'));
        this.jobSearchLocationDropdown = element(by.css('div.select-box-results'));
        this.jobSearchSkillsSelect = element(by.xpath('//*[@id="main"]/div[1]/div[1]/section/div/div[4]/form/div/div[2]/div'));
        this.jobSearchSkillsDropdown = element(by.xpath('//*[@id="main"]/div[1]/div[1]/section/div/div[4]/form/div/div[2]/div/div[2]'));
        this.jobSearchSkillsDropdownCheckboxes = element.all(by.css('div:nth-child(1) > section div.multi-select-dropdown-container label'));
        this.jobSearchButton = element(by.xpath('//*[@id="main"]/div[1]/div[1]/section/div/div[4]/form/div/div[3]/button'));
        this.jobSearchResultsFilter = element(by.css('div.job-search__field.job-search__field--filter'));
        this.jobSearchResultsHeader = element(by.css('header.search-result__header'));
        this.jobSearchResultsSorter = element(by.css('div.search-result__sorting-menu'));
        this.jobSearchResultsList = element(by.css('div.search-result__list'));
        this.jobSearchResultsError = element(by.css('div.job-search__error-message'));
        this.jobSearchResults = element.all(by.css('article.search-result__item'));
        this.jobSearchFilterTags = element.all(by.css('div.selected-items > span.filter-tag'));
    }

    open() {
        return browser.get(this.url);
    }
}

module.exports = new CareerPage();
