///<reference types='Cypress'/>

require('cypress-plugin-tab');

describe('Option click', () => {
  it('Basic click', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/');
    cy.title().should('eq', 'OrangeHRM');
    cy.wait(4000);
    cy.get('#txtUsername')
      .should('be.visible')
      .type('Admin ')
      .tab()
      .type('admin123');
    cy.get('#btnLogin').should('be.visible').click();
    cy.get('#menu_admin_viewAdminModule > b').should('be.visible').click();
    cy.wait(2000);
    cy.get('#menu_admin_Job').should('be.visible').click();
  });

  it('Force click', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/');
    cy.title().should('eq', 'OrangeHRM');
    cy.wait(4000);
    cy.get('#txtUsername')
      .should('be.visible')
      .type('Admin ')
      .tab()
      .type('admin123');
    cy.get('#btnLogin').should('be.visible').click();
    cy.get('#menu_admin_viewAdminModule > b').should('be.visible').click();
    cy.wait(2000);
    cy.get('#menu_admin_Job').click({ force: true });
  });

  it.only('Click by cordinates (x,y)', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/');
    cy.title().should('eq', 'OrangeHRM');
    cy.wait(4000);

    cy.get('#txtUsername')
      .should('be.visible')
      .type('Admin ')
      .tab()
      .type('admin123');

    cy.get('#btnLogin').should('be.visible').click();
    cy.wait(1500);
    cy.get('.head h1').should('be.visible').click(50, 5);
  });
});
