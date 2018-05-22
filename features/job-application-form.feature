# Feature: Job Application Form
#
#     Scenario: Validate job application form UI elements
#         Given the user is on EPAM Career page
#         When the user clicks on job search button
#         And the user clicks apply button on first job result
#         Then job listing page should be opened
#         And job listing page should contain application form
#         And application form should contain heading with position
#         And application form should contain heading with location
#         And application form should contain apply with linkedin button
#         And application form should contain first name input field
#         And application form should contain last name input field
#         And application form should contain last name input field
#         And application form should contain email input field
#         And application form should contain country drop down select
#         And application form should contain file browser
#         And application form should contain CV rich text area
#         And application form should contain captcha image
#         And application form should contain captcha input field
#         And application form should contain submit button
#
#     Scenario: Validate job application form required fields
#         Given the user is on job listing page
#         And job listing page contains application form
#         When the user clicks on submit butoon
#         Then first name input field should be colored in red
#         And last name input field should be colored in red
#         And email input field should be colored in red
#         And country input field should be colored in red
#         And captcha input field should be colored in red
#
#     Scenario: Validate job application form data fields validation
#         Given the user is on job listing page
#         And job listing page contains application form
#         When the user enters "1" in email input field
#         And the user clicks on submit butoon
#         Then email input field should be colored in red
