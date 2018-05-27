Feature: Job Application Form

    Scenario: Validate job application form UI elements
        Given the user is on EPAM Career page
        When the user clicks on job search button
        And the user clicks apply button on first job result
        Then job listing page should be opened
        And the job listing page should contain application form
        And the application form should contain heading with position
        And the application form should contain heading with location
        And the application form should contain apply with LinkedIn button
        And the application form should contain first name input field
        And the application form should contain last name input field
        And the application form should contain email input field
        And the application form should contain country drop down select
        And the application form should contain file browse button
        And the application form should contain CV rich text area
        And the application form should contain personal data disclaimer
        And the application form should contain subscription disclaimer
        And the application form should contain captcha image
        And the application form should contain captcha input field
        And the application form should contain submit button

    Scenario: Validate job application form required fields
        Given the user is on job listing page with application form
        When the user submits empty application form
        Then first name input field should be colored in red
        And last name input field should be colored in red
        And email input field should be colored in red
        And country drop down select should be colored in red
        And captcha input field should be colored in red
