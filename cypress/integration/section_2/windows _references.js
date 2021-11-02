///<reference types='Cypress'/>
describe('Windows references', () => {
    it('Charset property', () => {
       cy.visit('https://demoqa.com/text-box')
       cy.title().should('eq', 'ToolsQA');
       cy.wait(2000);

       cy.document().should('have.property', 'charset').and('eq', 'UTF-8')
   })

   it.only('URL property', () => {
    cy.visit('https://demoqa.com/text-box')
    cy.title().should('eq', 'ToolsQA');
    cy.wait(2000);

    cy.url().should('include', 'text-box')
    cy.url().should('eq', 'https://demoqa.com/text-box')
})
})
