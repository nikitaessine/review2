const { createUniqueCredentials } = require('../support/utils.js');

describe('Commenting functionality', () => {
  before(() => {
    const { email, username, password } = createUniqueCredentials();
    cy.createUser(email, username, password);

    Cypress.env('testUser', { email, username, password });
  });

  beforeEach(() => {
    const testUser = Cypress.env('testUser');
    cy.login(testUser.email, testUser.password);
  });

  it('Comment on a post made by another user', { tags: '@smoke' }, () => {
    const postText =
      'This is a public post and another user should be able to comment this';
    cy.visit('/');
    cy.createPost(postText);

    const { email, username, password } = createUniqueCredentials();
    cy.createUser(email, username, password);
    cy.login(email, password);
    cy.visit('/');

    const testUser = Cypress.env('testUser');
    cy.navigateToUserWall(testUser.username);

    const comment = 'This is a comment made by another user';
    cy.addComment(postText, comment);

    cy.checkIfCommentExists(postText, comment);
  });

  it('Comment on a post made by myself', () => {
    const postText =
      'This is a public post and I should be able to comment on this';
    cy.visit('/');
    cy.createPost(postText);

    const comment = 'This is a comment made by myself';
    cy.addComment(postText, comment);

    cy.checkIfCommentExists(postText, comment);
  });
});
