///<reference types='Cypress'/>

require("cypress-xpath");
require("cypress-plugin-tab");
require("@4tw/cypress-drag-drop");

import "cypress-file-upload";

describe.only("", () => {
  before(() => {
    cy.log("Runs before all tests");
  });

  beforeEach(() => {
    cy.log("Runs before each test");
  });

  afterEach(() => {
    cy.log("Runs after each test");
  });

  after(() => {
    cy.log("Runs after all tests");
  });
  it("", () => {
    let delayTime = 2000;
    cy.visit("https://demoqa.com/text-box");
    cy.title().should("eq", "ToolsQA");
    cy.wait(delayTime);
  });
});
