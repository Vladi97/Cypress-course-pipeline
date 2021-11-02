///<reference types='Cypress'/>
describe('Cypress course -> Section #1', () => {
  it('Second test -> Page Up', () => {
    cy.visit('https://demoqa.com/text-box');
    cy.title().should('eq', 'ToolsQA');
    cy.wait(4000);
    cy.get('#userName').type('{pageup}');
    cy.wait(2000);
  });

  it('Second test -> Page Down', () => {
    cy.visit('https://demoqa.com/text-box');
    cy.title().should('eq', 'ToolsQA');
    cy.wait(4000);
    cy.get('#userName').type('{pagedown}');
    cy.wait(2000);
  });
});
