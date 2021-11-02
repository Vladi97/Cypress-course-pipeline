// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add("type_field_get", (selector, text, t) => {
  cy.get(selector).should("be.visible").type(text);
  cy.wait(t);
});

Cypress.Commands.add("type_field_xpath", (selector, text, t) => {
  cy.xpath(selector).should("be.visible").type(text);
  cy.wait(t);
});

Cypress.Commands.add("click_element", (selector, t) => {
  cy.get(selector).should("be.visible").click();
  cy.wait(t);
});

Cypress.Commands.add("click_element_force", (selector, t) => {
  cy.get(selector).should("be.visible").click({ force: true });
  cy.wait(t);
});

// Complete functions
Cypress.Commands.add(
  "form_tools_qa",
  (name, email, addressOne, addressTwo, t) => {
    cy.get("#userName").should("be.visible").type(name);
    cy.xpath("//*[@id='userEmail']").should("be.visible").type(email);
    cy.get("#currentAddress").should("be.visible").type(addressOne);
    cy.get("#permanentAddress").should("be.visible").type(addressTwo);
    cy.get("#submit").should("be.visible").click({ force: true });
    cy.wait(t);
  }
);
