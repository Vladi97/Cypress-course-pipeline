///<reference types='Cypress'/>

require("cypress-xpath");
require("cypress-plugin-tab");
require("@4tw/cypress-drag-drop");

import "cypress-file-upload";

describe.only("", () => {
  let delayTime = 1000;
  before(() => {});

  beforeEach(() => {
    cy.visit("https://opensource-demo.orangehrmlive.com/index.php/auth/login");
    cy.title().should("eq", "OrangeHRM");
    cy.get("#frmLogin #txtUsername")
      .should("be.visible")
      .clear()
      .type("Admin ")
      .tab()
      .clear()
      .type("admin123")
      .then(() => {
        cy.get("#btnLogin").should("be.visible").click({ force: true });
      });
  });

  afterEach(() => {});

  after(() => {
    cy.get("a#welcome")
      .should("be.visible")
      .click({ force: true })
      .then(() => {
        cy.get("#welcome-menu ul li a")
          .contains("Logout")
          .click({ force: true });
      });
    cy.wait(delayTime);
  });

  it("Goes to marketplace", () => {
    cy.xpath('//*[@id="MP_link"]').should("be.visible").click();
    cy.wait(delayTime);
  });

  it("Goes to subscribe section", () => {
    cy.xpath('//*[@id="Subscriber_link"]').should("be.visible").click();
    cy.wait(delayTime);
  });
});
