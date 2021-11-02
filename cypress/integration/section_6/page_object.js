///<reference types='Cypress'/>

require("cypress-xpath");
require("cypress-plugin-tab");
require("@4tw/cypress-drag-drop");

import "cypress-file-upload";
import ProjectOnePO from "../../support/page_objects/project_one_PO/project_one_PO";

describe.only("Page Object Models", () => {
  const projectOnePO = new ProjectOnePO();
  before(() => {
    projectOnePO.visitHome(2000);
  });

  it("Fills form", () => {
    projectOnePO.formSection(
      "Juan",
      "juan@example.com",
      "Address 1",
      "Address 2",
      2000
    );
    cy.screenshot("ToolsQA form");
  });
});
