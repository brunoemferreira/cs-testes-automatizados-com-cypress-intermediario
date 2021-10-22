/// <reference types="Cypress"/>

describe('Logout', () => {
  // Faz o Login
  beforeEach(() => cy.login());

  // 
  it('successfully', () => {
    cy.logout()

    cy.url().should('be.equal', `${Cypress.config('baseUrl')}users/sign_in`);
  })
})