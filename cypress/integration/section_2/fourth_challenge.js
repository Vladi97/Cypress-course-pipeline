///<reference types='Cypress'/>
describe('Asserts challenge', () => {
    it('Using asserts on textboxs', () => {
       cy.visit('https://demoqa.com/text-box')
       cy.title().should('eq', 'ToolsQA');
       cy.wait(2000);
   
       cy.get('#userName').invoke('attr', 'placeholder').should('contain', 'Full Name').then(()=>{
        cy.get('#userName').type('Juan')
        cy.get('#userName').invoke('attr', 'style', 'color:red')
       })
       cy.get('#userEmail').should('be.visible').and('have.class', 'form-control').type('juan@example.com')
       cy.get('#submit').should('be.visible').click()
   })
})
