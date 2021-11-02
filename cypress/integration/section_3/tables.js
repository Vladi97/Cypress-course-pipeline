///<reference types='Cypress'/>
describe('Working with tables', () => {
  it('Using children and eq', () => {
    cy.visit('http://webdriveruniversity.com/Click-Buttons/index.html')
    Cypress.on('uncaught:exception', (err, runnable) => {
      console.log(err)
      return false
    })
    cy.title().should('eq', 'WebDriver | Button Clicks')
    cy.wait(4000)

    cy.get('.thumbnail')
      .eq(0)
      .children('.caption')
      .children('.btn-default')
      .should('be.visible')
      .click({ force: true })
  })

  it('Using filter', () => {
    cy.visit('http://webdriveruniversity.com/Click-Buttons/index.html')
    Cypress.on('uncaught:exception', (err, runnable) => {
      console.log(err)
      return false
    })
    cy.title().should('eq', 'WebDriver | Button Clicks')
    cy.wait(4000)

    cy.get('.thumbnail')
      .eq(0)
      .children('.caption')
      .children('[type="button"]')
      .filter('.btn-default')
      .should('be.visible')
      .click({ force: true })
  })

  it('Using find', () => {
    cy.visit('http://webdriveruniversity.com/Click-Buttons/index.html')
    Cypress.on('uncaught:exception', (err, runnable) => {
      console.log(err)
      return false
    })
    cy.title().should('eq', 'WebDriver | Button Clicks')
    cy.wait(4000)

    cy.get('.thumbnail').eq(0).find('.btn-default').should('contain', 'CLICK ME!').click({force:true})
  })

  it('Using first', () => {
    cy.visit('http://webdriveruniversity.com/Click-Buttons/index.html')
    Cypress.on('uncaught:exception', (err, runnable) => {
      console.log(err)
      return false
    })
    cy.title().should('eq', 'WebDriver | Button Clicks')
    cy.wait(4000)

    cy.get('.thumbnail').first().should('contain', 'WebElement Click').find('.btn-default').should('contain', 'CLICK ME!').click({force:true})
  })

  it('Using nextAll', () => {
    cy.visit('http://webdriveruniversity.com/Click-Buttons/index.html')
    Cypress.on('uncaught:exception', (err, runnable) => {
      console.log(err)
      return false
    })
    cy.title().should('eq', 'WebDriver | Button Clicks')
    cy.wait(4000)

    cy.get('.col-sm-4').first().should('contain', 'WebElement Click')
    cy.wait(2000)
    cy.get('.col-sm-4').first().should('contain', 'WebElement Click').nextAll().should('have.length', 2)
  })

  it.only('Using parent', () => {
    cy.visit('http://webdriveruniversity.com/Click-Buttons/index.html')
    Cypress.on('uncaught:exception', (err, runnable) => {
      console.log(err)
      return false
    })
    cy.title().should('eq', 'WebDriver | Button Clicks')
    cy.wait(4000)

    cy.get('.thumbnail').first().should('contain', 'WebElement Click').find('.btn-default').should('contain', 'CLICK ME!').parent().should('have.class', 'caption')
  })
})
