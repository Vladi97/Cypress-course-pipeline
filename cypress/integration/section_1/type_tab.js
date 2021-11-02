///<reference types='Cypress'/>

require('cypress-plugin-tab');

describe('Using function type', () => {
  it('Should tab for next input', () => {
    cy.visit('https://demoqa.com/automation-practice-form');
    cy.title().should('eq', 'ToolsQA');
    cy.wait(3000);

    cy.get('#firstName')
      .type('Juan')
      .tab()
      .type('Castro')
      .tab()
      .type('email@example.com');
    cy.wait(4000);
  });
});
