///<reference types='Cypress'/>

require("cypress-xpath");
require("cypress-plugin-tab");
require("@4tw/cypress-drag-drop");

import "cypress-file-upload";

describe.only("", () => {
  it("", () => {
    cy.visit("");
    cy.title().should("eq", "");
    cy.wait(delayTime);
  });
});
