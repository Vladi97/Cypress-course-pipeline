///<reference types='Cypress'/>

require('cypress-xpath')
require('cypress-plugin-tab');

describe.only('Config and usage os snippets', () => {
    it('Snippet #1', () => {
       cy.visit('https://demoqa.com/text-box')
       cy.title().should('eq', 'ToolsQA')
       cy.wait(2000)

       cy.get('').should('be.visible').type('')
       cy.wait(delayTime)
   })
})
