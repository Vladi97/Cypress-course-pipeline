///<reference types='Cypress'/>

require("cypress-xpath");
require("cypress-plugin-tab");
require("@4tw/cypress-drag-drop");

import "cypress-file-upload";

describe("Custom commands", () => {
  let delayTime = 2000;
  before(() => {
    cy.visit("https://demoqa.com/text-box");
    cy.title().should("eq", "ToolsQA");
    cy.wait(delayTime);
  });

  beforeEach(() => {});

  afterEach(() => {});

  after(() => {});

  it("Demo 1", () => {
    cy.type_field_get("#userName", "Juan", delayTime);
    cy.type_field_xpath("//*[@id='userEmail']", "juan@example.com", 3000);
    cy.click_element_force("#submit", delayTime);
  });

  it.only("Demo 2 complete function", () => {
    cy.form_tools_qa(
      "Juan",
      "juan@example.com",
      "Address 1",
      "Address 2",
      delayTime
    );
  });
});
