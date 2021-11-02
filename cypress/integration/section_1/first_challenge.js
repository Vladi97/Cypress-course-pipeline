///<reference types='Cypress'/>

require('cypress-plugin-tab');

describe('First challenge', () => {
  it('Adding and updating information', () => {
    cy.visit('https://demoqa.com/webtables');
    cy.title().should('eq', 'ToolsQA');

    cy.get('#addNewRecordButton').should('be.visible').click();
    cy.get('#userForm #firstName')
      .should('be.visible')
      .type('Juan')
      .tab()
      .type('Acosta')
      .tab()
      .type('jacosta@example.com')
      .tab()
      .type('45')
      .tab()
      .type('4500')
      .tab()
      .type('QA Automation');

    cy.get('#submit').should('be.visible').click();
    cy.wait(4000);

    cy.get('#searchBox').should('be.visible').type('Juan');
    cy.get('#searchBox').should('be.visible').clear();
    cy.get('#edit-record-1').should('be.visible').click();

    cy.get('.modal-body #age-wrapper #age').should('be.visible').clear().type('45');
    cy.get('.modal-body #salary-wrapper #salary').should('be.visible').clear().type('25000');
    cy.get('#submit').should('be.visible').click();
    cy.wait(4000);

  });
});
