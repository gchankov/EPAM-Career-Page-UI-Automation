Feature: Job Search

    Scenario: Validate job search UI elements
        Given the user is on EPAM Career page
        When the job search form loads
        Then job search input field should be displayed
        And location drop down select should be displayed
        And skills drop down select should be displayed
        And job search button should be displayed

    Scenario: Validate job listings UI elements
        Given the user is on EPAM Career page
        When the user clicks on job search button
        Then job search filter section should be displayed
        And search results' list heading should be displayed
        And search results' sort menu should be displayed
        And search results' list should be displayed

    Scenario: Validate job result UI elements
        Given the user is on EPAM Career page
        When the user clicks on job search button
        Then search results' list heading should be displayed
        And each search result should contain position name
        And each search result should contain position location
        And each search result should contain position description
        And each search result should contain apply button
        And each search should contain shareable link
        
    Scenario: Search jobs by keyword
        Given the user is on EPAM Career page
        When the user enters "Java" keyword in job search input
        And the user clicks on job search button
        Then search results' list should be displayed
        And each search result should contain the keyword "Java"
            
    # Scenario: Search jobs by job ID
            
    Scenario: Search jobs by location
        Given the user is on EPAM Career page
        When the user clicks on location drop down select
        And the user selects "Bulgaria" country from location drop down select
        And the user selects "Sofia" city from location drop down select
        And the user clicks on job search button
        Then search results' list should be displayed
        And each search result should contain the location "Sofia, Bulgaria"

    Scenario: Job search skills
        Given the user is on EPAM Career page
        When the user clicks on skill drop down select
        Then all skills with checkboxes should be displayed
        
    Scenario: Applying job search skill filters
        Given the user is on EPAM Career page
        When the user clicks on skill drop down select
        And the user applies all skill drop down checkboxes
        Then job filters for all skills should be displayed

    Scenario: Removing job search skill filters
        Given the user is on EPAM Career page
        And the user applied job filters for all skills
        When the user removes job filters for all skills
        Then no job filter should be displayed
        
    Scenario: Job search with no result
        Given the user is on EPAM Career page
        When the user enters "asd" keyword in job search input
        And the user clicks on job search button
        Then "Sorry, your search returned no results. Please try another combination." message should be displayed
