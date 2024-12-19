const { createUniqueCredentials } = require('../support/utils.js');

describe('User Authentication', () => {
  it('Registers a new user', { tags: '@smoke' }, () => {
    const { email, username, password } = createUniqueCredentials();

    cy.visit('/');
    cy.get('button').contains('Sign up').click();

    cy.get('input[name="email"]').type(email);
    cy.get('input[name="username"]').type(username);
    cy.get('input[name="password"]').type(password);
    cy.get('button').contains('Register').click();

    cy.url().should('include', '/login');
  });

  it('Rejects registration if password under 8 characters', () => {
    const { email, username } = createUniqueCredentials();
    const password = 'passwor';

    cy.visit('/');
    cy.get('button').contains('Sign up').click();

    cy.get('input[name="email"]').type(email);
    cy.get('input[name="username"]').type(username);
    cy.get('input[name="password"]').type(password);

    cy.get('p')
      .contains('password must be at least 8 characters')
      .should('exist');
  });

  it('Logs in a user', { tags: '@smoke' }, () => {
    const { email, username, password } = createUniqueCredentials();
    cy.createUser(email, username, password);

    cy.visit('/');

    cy.get('input[name="loginEmail"]').type(email);
    cy.get('input[name="loginPassword"]').type(password);
    cy.get('button').contains('Login').click();
    cy.url().should('include', '/profile');
  });

  it('Rejects log in with invalid credentials', () => {
    const { email, username, password } = createUniqueCredentials();
    cy.createUser(email, username, password);
    const wrongPassword = `${password}-invalid`;

    Cypress.on('uncaught:exception', (err) => {
      //We wan't to get 401 HTTP error status code (Unauthorized)
      //So we don't want to test fail at this point
      if (err.message.includes('401')) {
        return false;
      }
      return true;
    });

    cy.visit('/');

    cy.get('input[name="loginEmail"]').type(email);
    cy.get('input[name="loginPassword"]').type(wrongPassword);
    cy.get('button').contains('Login').click();

    cy.get('p').contains('Invalid email/password combination').should('exist');
  });

  it('Logs out a user', () => {
    const { email, username, password } = createUniqueCredentials();
    cy.createUser(email, username, password);
    cy.login(email, password);

    cy.visit('/');
    cy.get('button').contains('Log out').click();

    cy.url().should('include', '/login');
  });
});
