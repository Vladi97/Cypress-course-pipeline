///<reference types='Cypress'/>

describe('Working with dates', () => {
  it('Select a date', () => {
    cy.visit('https://demoqa.com/automation-practice-form')
    cy.title().should('eq', 'ToolsQA')
    cy.wait(4000)

    cy.get('#dateOfBirthInput').should('be.visible').click({force:true})
    
    cy.get('.react-datepicker__month-select').should('be.visible').select('January')
    cy.get('.react-datepicker__year-select').should('be.visible').select('1992')
    cy.get('.react-datepicker__day').contains('20').should('be.visible').click({force:true})
    cy.wait(2000)
  })
})
