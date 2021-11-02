///<reference types='Cypress'/>
describe('Cypress course -> Section #1', () => {
  it('My first test -> Hello world', () => {
    cy.log('Hello world');
    cy.wait(4000);
  });

  it('Second test -> field name', () => {
    cy.visit('https://demoqa.com/text-box');
    cy.get('#userName').type('Jorge');
    cy.wait(4000);
  });
});
