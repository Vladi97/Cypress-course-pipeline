///<reference types='Cypress'/>
describe("Invoke challenge", () => {
  it.only("Show section when input is not empty", () => {
    cy.visit("https://demoqa.com/automation-practice-form");
    cy.title().should("eq", "ToolsQA");
    cy.get("#lastName").invoke("hide");
    cy.wait(2000);

    cy.get("#firstName")
      .should("be.visible")
      .type("Juan")
      .then(() => {
        cy.get("#lastName").invoke("show");
      });
  });
});
