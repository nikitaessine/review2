Cypress.Commands.add('createPost', (postText) => {
  cy.get('textarea[name="content"]').type(postText);
  cy.get('button').contains('Publish').click();
});

Cypress.Commands.add('navigateToUserWall', (name) => {
  cy.get('input[type="search"]').type(name);
  cy.get('a').contains(name).click();
});

Cypress.Commands.add('addComment', (postText, comment) => {
  cy.get('div')
    .contains(postText)
    .parent()
    .parent()
    .find('div')
    .find('input[placeholder="Add a comment..."]')
    .type(comment)
    .type('{enter}');
});

Cypress.Commands.add('checkIfCommentExists', (postText, comment) => {
  cy.get('div')
    .contains(postText)
    .parent()
    .parent()
    .find('div')
    .contains(comment)
    .should('exist');
});
