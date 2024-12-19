# Test plan

This document will give you a concise general view of how the BunnyBook web
application will be tested. We will look at what will be tested and how the
testing is conducted in the scope section. In the out of scope section, we will
go through what won't be tested but would be beneficial to test and how we could
improve existing API tests. We will also present a testing schedule and discuss
the tools chosen for automated end-to-end testing and non-functional testing.

## In scope

To ensure the basic functionality of the application, we will first test the
application manually. The manual testing will be done as an exploratory testing
method. There will be no explicit or detailed instructions on how the manual
testing will be conducted initially but rather getting to understand the
application by testing different features comprehensively. This helps us to
understand the application better and detect potential issues.

After the exploratory manual testing is done, automated end-to-end tests will be
designed to its final form and executed. With the help of exploratory testing
we'll have a broad overview of the application and base to every end-to-end test
case. All of the user stories in the end-to-end testing phase will be covered by
happy path tests and authentication user stories will also include negative path
tests. Tests will be designed as easy to maintain and modify as possible. This
facilitates better understanding and future improvement.

Lastly, continuous integration pipeline will be created and attached to the
application's GitHub repository. The pipeline will execute e2e-tests tagged as
smoke tests on every push to the main branch and all of the e2e-tests every
night. To save resources we can't execute all the tests on every push to main
branch. Tests tagged as smoke tests will guarantee that all of the crucial
features work after code changes made to the main branch. In addition to
e2e-tests the CI pipeline will have an automated non-functional test testing if
there are any accessibility problems on the authentication pages.

## Out of scope

After the end-to-end tests are created, the application has been tested at
integration and system level. At this point, it is important to assess both
functional and non-functional testing levels to guarantee the application's
performance, security, and scalability in a real production environment. Let's
see what things could be done in the future if the application were to go into
real production use.

To verify that the application functions correctly at the lowest level, unit
tests should be added and focus on testing individual components or units in
isolation ensuring that each part of the application behaves as expected. Both
frontend and backend should be tested at the unit level. First of all, we should
cover the most critical units at the moment. Thereafter, any modifications to
existing code or new features should also be covered by unit tests. Over time,
one could improve the unit test coverage if there are resources to do it.

Currently, the existing integration tests cover some of the API routes. For some
routes both happy path and failure scenarios are tested while for others only
the happy path is covered. Improvements can be made in many areas of integration
testing such as the following:

- **The utils.py file is bloated and therefore hard to read and maintain.** The
  utility functions should be separated into different files by the object to be
  tested. For example, authentication utility functions could be placed in one
  file and posting utility functions in another.

- **Some of the tests are too complex and test too many things.** A good example
  of this is the test_friend_suggestions function in the test_profile.py file.
  The test should be split into smaller and independent test cases each focusing
  on a single scenario. This would make it easier to understand, debug, and
  extend tests in the future. If we need some initial data before execution,
  test fixtures would be the right choice.

- **Cover all the API routes.** For example, the chat and notification routes
  are not tested at all. Both of them are basic features of the application so
  it would be beneficial to test them.

- **Add more failure tests.** At Present only registration and login have
  failure tests. Adding them to other API routes would be beneficial because by
  using them we could be sure that API routes validate data and handle edge
  cases correctly.

- **Handle warnings.** Existing integration tests include two warnings that
  should be reviewed and resolved. Addressing these warnings will improve code
  reliability and ensure compatibility with future package and code updates.

In addition to all this, more non-functional tests could be added to assess the
application's security, performance and scalability. These tests would make sure
that the system is secure, can handle the expected traffic and perform well
under stress. Over time, non-functional testing would help to maintain the
system's reliability and improve the overall user experience.

For future production use it would also be essential to evaluate aspect such as
user acceptance testing. This step ensures that the application meets the needs
and expectations of the end users by validating its functionality and usability
in real-world scenarios. User acceptance testing helps to identify gaps between
the system's design and user requirements, ensuring that the application
delivers value to its audience.

## Schedule

The in scope testing schedule is represented in the following table.

| **Phase**                      | **Start Date** | **End Date** | **Description**                                                                                    |
| ------------------------------ | -------------- | ------------ | -------------------------------------------------------------------------------------------------- |
| **Test Plan Creation**         | 10.12.2024     | 11.12.2024   | Define the overall testing strategy.                                                               |
| **Manual Exploratory Testing** | 11.12.2024     | 12.12.2024   | Perform manual exploratory testing to discover unexpected issues and edge cases.                   |
| **End-to-End Testing**         | 12.12.2024     | 14.12.2024   | Create automated end-to-end tests to ensure the application works as expected.                     |
| **CI Pipeline Setup**          | 15.12.2024     | 17.12.2024   | Set up the CI pipeline on GitHub.                                                                  |

## Automated testing tools

For end-to-end testing, Cypress will be used as the testing framework. Cypress
is chosen for end-to-end testing because it is widely used and trusted by many
developers and companies. It also has excellent documentation making it easy to
learn and use effectively.

To make sure that the authentication pages meet non-functional quality standards
we audit authentication pages using Lighthouse. This automated non-functional
testing phase will help ensure the authentication pages remain performant and
accessible throughout development.
