///<reference types='Cypress'/>
describe('Cypress course -> Section #1', () => {
  it('Second test -> Validating title', () => {
    cy.visit('https://demoqa.com/text-box');
    cy.title().should('eq', 'ToolsQA');

    cy.log('title function worked!');
  });
});
