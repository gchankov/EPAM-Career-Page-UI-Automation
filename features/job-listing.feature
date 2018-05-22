Feature: Job Listing

    Scenario: Validate job listing UI elements
        Given the user is on EPAM Career page
        When the user clicks on job search button
        And the user clicks apply button on first job result
        Then job listing page should be opened
        And job listing page should contain position
        And job listing page should contain location
        And job listing page should contain job id
        And job listing page should contain descpiption
        And job listing page should contain responsibilities
        And job listing page should contain requirements
        And job listing page should contain application form
        