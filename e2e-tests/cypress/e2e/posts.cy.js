const { createUniqueCredentials } = require('../support/utils.js');

describe('Posting functionality', () => {
  before(() => {
    const { email, username, password } = createUniqueCredentials();
    cy.createUser(email, username, password);

    Cypress.env('testUser', { email, username, password });
  });

  beforeEach(() => {
    const testUser = Cypress.env('testUser');
    cy.login(testUser.email, testUser.password);
  });

  it('Create a public post', { tags: '@smoke' }, () => {
    cy.visit('/');
    const postText = 'This is a public post';
    cy.createPost(postText);
    cy.get('div').contains(postText).should('exist');
  });

  it('View a public post made by another user', { tags: '@smoke' }, () => {
    const testUser = Cypress.env('testUser');
    cy.visit('/');

    const postText = 'This is a public post made by another user';
    cy.createPost(postText);

    const { email, username, password } = createUniqueCredentials();
    cy.createUser(email, username, password);
    cy.login(email, password);
    cy.visit('/');

    cy.navigateToUserWall(testUser.username);

    cy.get('div').contains(postText).should('exist');
  });

  it('Create a post for only my friends to see', () => {
    cy.visit('/');

    cy.get('select[name="privacy"]').select('friends');
    const postText = 'This is a post made to my friends.';
    cy.createPost(postText);

    cy.get('div').contains(postText).should('exist');
  });

  it('Delete a post made by myself', () => {
    cy.visit('/');

    const postText = 'This is a public post and this should be deleted';
    cy.createPost(postText);

    cy.get('button[class*="delete"]').first().click();
    cy.on('window:confirm', () => true);

    cy.get('div').contains(postText).should('not.exist');
  });
});
