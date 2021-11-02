///<reference types='Cypress'/>
describe('Cypress course -> Section #1', () => {
  it('Third test -> type enter', () => {
    cy.visit('https://www.google.com/');
    cy.title().should('eq', 'Google');
    cy.wait(4000);

    cy.get('[name="q"]').type('cypress.io {enter}');
    cy.wait(4000);
    cy.get(
      '#rso > div:nth-child(1) > div > div > div > div > div > div > div.yuRUbf > a'
    ).click();
  });
});
