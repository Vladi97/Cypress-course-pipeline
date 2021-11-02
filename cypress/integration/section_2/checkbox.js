///<reference types='Cypress'/>
describe('Testing checkbox', () => {
  it('Selecting all checkbox', () => {
    cy.visit('https://demoqa.com/automation-practice-form');
    cy.title().should('eq', 'ToolsQA');

    cy.get('input[type="checkbox"]')
      .check({ force: true })
      .should('be.checked');
    cy.wait(4000);
    cy.get('input[type="checkbox"]')
      .uncheck({ force: true })
      .should('not.be.checked');
  });

  it('Selecting a checkbox by using a specific selector', () => {
    cy.visit('https://demoqa.com/automation-practice-form');
    cy.title().should('eq', 'ToolsQA');

    cy.get('#hobbies-checkbox-3').check({ force: true }).should('be.checked');
    cy.wait(4000);
    cy.get('#hobbies-checkbox-3')
      .uncheck({ force: true })
      .should('not.be.checked');
  });

  it.only('Clicking radio buttons', () => {
    cy.visit('https://demoqa.com/radio-button');
    cy.title().should('eq', 'ToolsQA');

    cy.get('#yesRadio').check({ force: true });
    cy.wait(4000);
    cy.get('#impressiveRadio').click({ force: true });
  });
});
