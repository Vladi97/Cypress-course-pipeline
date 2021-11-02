///<reference types='Cypress'/>

require("cypress-xpath");

describe("Navigation between pages", () => {
  it("goes back and forward", () => {
    let delayTime = 2000;
    cy.visit("https://demoqa.com/text-box");
    cy.title().should("eq", "ToolsQA");
    cy.wait(delayTime);

    cy.xpath('//*[@id="item-4"]/span')
      .contains("Buttons")
      .should("be.visible")
      .click({ force: true });
    cy.wait(delayTime);
    cy.go("back");
    cy.wait(delayTime);
    cy.go("forward");
  });

  it.only("go back and forward", () => {
    let delayTime = 2000;
    cy.visit("https://demoqa.com/buttons");
    cy.title().should("eq", "ToolsQA");
    cy.wait(delayTime);

    cy.xpath('//*[@id="item-0"]/span')
      .contains("Text Box")
      .should("be.visible")
      .click({ force: true });
    cy.wait(delayTime);

    cy.get("#userName")
      .should("be.visible")
      .type("Juan")

      .click({ force: true });
    cy.wait(delayTime);
    cy.reload();
  });
});
