///<reference types='Cypress'/>

require('cypress-xpath')

describe('Using select tags', () => {
  it('Selects an option', () => {
    cy.visit('https://computer-database.gatling.io/computers/new')
    cy.title().should('eq', 'Computers database')
    cy.wait(2000)

    cy.get('#company').select('Apple Inc.')
    cy.wait(4000)
    cy.get('#company').select('Canon')
  })

  it('Selects an option with value', () => {
    cy.visit('https://computer-database.gatling.io/computers/new')
    cy.title().should('eq', 'Computers database')
    cy.wait(2000)

    cy.get('#company').select('Apple Inc.').should('have.value', '1')
    cy.wait(4000)
    cy.get('#company').select('Canon').should('have.value', '15')
  })

  it('Selects an option with value', () => {
    cy.visit('https://www.google.com/')
    cy.title().should('eq', 'Google')
    cy.wait(2000)

    cy.get('input[name="q"]').should('be.visible').type('Ferrari').type('{enter}')
    cy.xpath('//*[@id="hdtb-msb"]/div[1]/div/div[2]/a').click()
  })

  it('Multiple selects', () => {
    cy.visit('https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_select_multiple')
    cy.title().should('eq', 'Tryit Editor v3.7')
    cy.wait(2000)

    cy.get('#cars').should('be.visible').select(['Volvo', 'Opel']).then(()=>{
      cy.get('input[type="submit"]').click()
    })
  })
})
