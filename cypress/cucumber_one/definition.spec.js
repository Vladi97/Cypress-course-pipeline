require("cypress-xpath");

import { Given } from "cypress-cucumber-preprocessor/steps";

Given("Open the main browser", () => {
  cy.visit("https://demoqa.com/text-box");
  cy.title().should("eq", "ToolsQA");
  cy.wait(2000);
});
When("Typing name {word}", (username) => {
  cy.log(username);
  cy.get("#userName").should("be.visible").clear().type(username);
});
And("Typing email {word}", (email) => {
  cy.xpath("//*[@id='userEmail']").should("be.visible").clear().type(email);
});
And("Typing address {word}", (addr1) => {
  cy.get("#currentAddress").should("be.visible").clear().type(addr1);
});
And("Typing address 2 {word}", (addr2) => {
  cy.get("#permanentAddress").should("be.visible").clear().type(addr2);
});
Then("Click the button", () => {
  cy.get("#submit").should("be.visible").click({ force: true });
  cy.wait(2000);
});
