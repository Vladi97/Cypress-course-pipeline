///<reference types='Cypress'/>
describe('Working with alias', () => {
    it('Field firstName as name', () => {
       cy.visit('https://demoqa.com/automation-practice-form')
       cy.title().should('eq', 'ToolsQA')
       cy.wait(2000)

       cy.get('#firstName').should('be.visible').as('name')
       cy.get('@name').type('Pedro')
   })
})
