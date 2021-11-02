class ProjectOnePO {
  visitHome(time) {
    Cypress.config("defaultCommandTimeout", 15000); //wait 15 for an element
    cy.visit("https://demoqa.com/text-box");
    cy.title().should("eq", "ToolsQA");
    cy.wait(time);
  }

  formSection(name, email, addressOne, addressTwo, t) {
    cy.get("#userName").should("be.visible").clear().type(name);
    cy.xpath("//*[@id='userEmail']").should("be.visible").clear().type(email);
    cy.get("#currentAddress").should("be.visible").clear().type(addressOne);
    cy.get("#permanentAddress").should("be.visible").clear().type(addressTwo);
    cy.get("#submit").should("be.visible").click({ force: true });
    cy.wait(t);
  }
}

export default ProjectOnePO;
