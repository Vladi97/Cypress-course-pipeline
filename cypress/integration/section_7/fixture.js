///<reference types='Cypress'/>

require("cypress-xpath");
require("cypress-plugin-tab");
require("@4tw/cypress-drag-drop");

import "cypress-file-upload";
import ProjectOnePO from "../../support/page_objects/project_one_PO/project_one_PO";

describe.only("Page Object Models", () => {
  const projectOnePO = new ProjectOnePO();
  before(() => {
    cy.fixture("data_test").as("json_data");
    projectOnePO.visitHome(2000);
  });

  it.only("Fills form", () => {
    cy.get("@json_data").then((data) => {
      data.users.forEach((element) => {
        projectOnePO.formSection(
          element.name,
          element.email,
          element.address,
          element.address_two,
          3000
        );
      });
    });
  });
});
