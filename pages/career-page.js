'use strict',

module.exports = {
    url: 'https://www.epam.com/careers',
    jobSearchForm: element(by.css('.section-ui.section--padding-normal.section--hide-on-mobile .job-search__form')),
    jobSearchInputField: element(by.css('.section-ui.section--padding-normal.section--hide-on-mobile .job-search__input.job-search__input--js-autocomplete')),
    jobSearchLocationDropdownSelect: element(by.css('.section-ui.section--padding-normal.section--hide-on-mobile .select-box-selection.single')),
    jobSearchLocationDropdownPanel: element(by.css('.select-box-dropdown')),
    jobSearchSkillsDropdownSelect: element(by.css('.section-ui.section--padding-normal.section--hide-on-mobile .multi-select-filter')),
    jobSearchSkillsDropdownPanel: element(by.css('.section-ui.section--padding-normal.section--hide-on-mobile .multi-select-dropdown-container')),
    jobSearchSkillsDropdownLabels: element.all(by.css('.section-ui.section--padding-normal.section--hide-on-mobile .multi-select-dropdown-container label')),
    jobSearchButton: element(by.css('.section-ui.section--padding-normal.section--hide-on-mobile .job-search__submit')),
    jobSearchResultsFilter: element(by.css('.job-search__field.job-search__field--filter')),
    jobSearchResultsHeader: element(by.css('.search-result__heading')),
    jobSearchResultsSorter: element(by.css('.search-result__sorting-menu')),
    jobSearchResultsList: element(by.css('.search-result__list')),
    jobSearchResultsError: element(by.css('.job-search__error-message')),
    jobSearchResults: element.all(by.css('.search-result__item')),
    jobSearchFilterTags: element.all(by.css('.selected-items > span.filter-tag')),
    jobSearchFilterTagsPanel: element(by.css('.section-ui.section--padding-normal.section--hide-on-mobile .selected-items')),

    async open() {
        await browser.get(this.url);
    },

    async getEachSearchResultsPositionName() {
        const searchResults = await this.jobSearchResults;
        const searchResultsPositionNames = await Promise.all(searchResults.map((searchResult) => {
            return searchResult.element(by.css('a.search-result__item-name'));
        }));
        return searchResultsPositionNames;
    },

    async getEachSearchResultsPositionLocation() {
        const searchResults = await this.jobSearchResults;
        const searchResultsPositionLocations = await Promise.all(searchResults.map((searchResult) => {
            return searchResult.element(by.css('strong.search-result__location'));
        }));
        return searchResultsPositionLocations;
    },

    async getEachSearchResultsPositionDescription() {
        const searchResults = await this.jobSearchResults;
        const searchResultsPositionDescriptions = await Promise.all(searchResults.map((searchResult) => {
            return searchResult.element(by.css('p.search-result__item-description'));
        }));
        return searchResultsPositionDescriptions;
    },

    async getEachSearchResultsApplyButton() {
        const searchResults = await this.jobSearchResults;
        const searchResultsApplyButtons = await Promise.all(searchResults.map((searchResult) => {
            return searchResult.element(by.css('a.search-result__item-apply'));
        }));
        return searchResultsApplyButtons;
    },

    async getEachSearchResultsShareableLink() {
        const searchResults = await this.jobSearchResults;
        const searchResultsShareableLinks = await Promise.all(searchResults.map((searchResult) => {
            return searchResult.element(by.css('button.search-result__share-button'));
        }));
        return searchResultsShareableLinks;
    },

    async getEachSearchResultsText() {
        const searchResults = await this.jobSearchResults;
        const searchResultsTexts = await Promise.all(searchResults.map((searchResult) => {
            return searchResult.getText();
        }));
        return searchResultsTexts;
    },

    async getLocationDropdownPanelCountry(country) {
        const locationDropdownPanelCountry = await this.jobSearchLocationDropdownPanel.element(by.css('li[aria-label="' + country + '"]'));
        return locationDropdownPanelCountry;
    },

    async getLocationDropdownPanelCity(city) {
        const locationDropdownPanelCity = await this.jobSearchLocationDropdownPanel.element(by.css('li[id*="' + city + '"]'));
        return locationDropdownPanelCity;
    },

    async getSkillsDropdownPanelCheckboxes() {
        const skillsDropdownPanelLabels = await this.jobSearchSkillsDropdownLabels;
        const skillsDropdownPanelCheckboxes = await Promise.all(skillsDropdownPanelLabels.map((skillsDropdownPanelLabel) => {
            return skillsDropdownPanelLabel.element(by.css('input.checkbox-custom'));
        }));
        return skillsDropdownPanelCheckboxes;
    },

    async getSkillsTagsCloseButtons() {
        const searchFilterTags = await this.jobSearchFilterTags;
        const searchFilterTagsCloseButtons = await Promise.all(searchFilterTags.map((searchFilterTag) => {
            return searchFilterTag.element(by.css('span.unselect-tag'));
        }));
        return searchFilterTagsCloseButtons;
    },

    async getFirstSearchResultApplyButton() {
        const firstSearchResultApplyButton = await this.jobSearchResults.first().element(by.css('a.search-result__item-apply'));
        return firstSearchResultApplyButton;
    }
};
