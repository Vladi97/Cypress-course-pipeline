///<reference types='Cypress'/>

require("cypress-xpath");

describe("Using different types of selectors", () => {
  it("Using the ID", () => {
    cy.visit("https://demoqa.com/text-box");
    cy.title().should("eq", "ToolsQA");

    cy.get("#userName")
      .should("be.visible", { timeout: 9000 })
      .type("Juan Castro");
    cy.wait(4000);
  });

  it("Using an attribute", () => {
    cy.visit("https://demoqa.com/text-box");
    cy.title().should("eq", "ToolsQA");

    cy.get('input[placeholder="Full Name"]')
      .should("be.visible")
      .type("Juan Castro");
    cy.wait(4000);
  });

  it("Using Xpath", () => {
    cy.visit("https://demoqa.com/text-box");
    cy.title().should("eq", "ToolsQA");

    cy.xpath('//*[@id="userName"]').should("be.visible").type("Juan Castro");
    cy.wait(4000);
  });

  it("Using contains", () => {
    cy.visit("https://demoqa.com/automation-practice-form");
    cy.title().should("eq", "ToolsQA");

    cy.get(".custom-control-label").contains("Female").click();
    cy.wait(4000);
    cy.get(".custom-control-label").contains("Other").click();
  });

  it("Using copySelector", () => {
    cy.visit("https://demoqa.com/automation-practice-form");
    cy.title().should("eq", "ToolsQA");

    cy.get("#firstName").should("be.visible").click().type("Juan");
    cy.wait(4000);
  });
});
