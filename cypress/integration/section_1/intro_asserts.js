///<reference types='Cypress'/>
describe('Intro to asserts', () => {
    it('Using asserts', () => {
        cy.visit('https://demoqa.com/automation-practice-form');
        cy.title().should('eq', 'ToolsQA');
        cy.wait(3000);

        cy.get('#firstName').should('be.visible').type('Carlos')
        cy.get('#lastName').should('be.visible').type('Vega')
        cy.get('#userEmail').should('be.visible').should('be.enabled').type('email@example.com')
   })
})
