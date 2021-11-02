///<reference types='Cypress'/>

require('cypress-xpath')

describe.only('Working with alerts', () => {
    it('Opens and closes the alert', () => {
       cy.visit('https://www.jquery-az.com/javascript/demo.php?ex=151.0_3')
       cy.title().should('eq', 'A basic alert demo by using a plug-in')
       cy.wait(2000)

       cy.xpath('/html/body/div[2]/table/tbody/tr[2]/td[2]/button').click({force:true})

       cy.xpath('/html/body/div[5]/div[7]/div/button').should('be.visible').click({force:true})
   })
})
