Cypress.Commands.add('createUser', (email, username, password) => {
  cy.wait(3000);
  cy.request({
    method: 'POST',
    url: '/web/register',
    body: {
      email,
      username,
      password,
    },
  }).then((response) => {
    expect(response.status).to.eq(201);
  });
});

Cypress.Commands.add('login', (email, password) => {
  cy.session(email, () => {
    cy.request({
      method: 'POST',
      url: '/web/login',
      body: {
        email,
        password,
      },
    }).then(({ status, body }) => {
      expect(status).to.eq(200);
      window.localStorage.setItem('jwtToken', body.accessToken);
    });
  });
});
