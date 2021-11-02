///<reference types='Cypress'/>

require('cypress-plugin-tab');

describe('Second challenge - Testing a website', () => {
  it('Adding a computer and filtering information', () => {
    let computerName = 'Cypress';
    cy.visit('https://computer-database.gatling.io/computers');
    cy.get('#add').should('be.visible').click();
    cy.get('#name')
      .should('be.visible')
      .type(computerName)
      .tab()
      .type('2021-10-27')
      .tab()
      .type('2022-10-27');
    cy.get('#company')
      .should('be.visible')
      .select('Nokia')
      .should('have.value', '16');
    cy.get('input[type="submit"]').should('be.visible').click();
    cy.get('.alert-message')
      .should('be.visible')
      .contains('Done ! Computer ' + computerName + ' has been created');
  });
});
