///<reference types='Cypress'/>

describe('Working with bucles', () => {
  it('Using each', () => {
    cy.visit('http://automationpractice.com/index.php', {failOnStatusCode: false})
    cy.title().should('eq', 'My Store')
    cy.wait(4000)

    cy.get('.product-name').should('be.visible').each(($el, index, $list)=>{
        let name = $el.text()
        if(name.includes('Blouse')){
            cy.wrap($el).click()
        }
    })
  })
})
