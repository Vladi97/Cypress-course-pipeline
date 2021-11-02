///<reference types='Cypress'/>
describe('Using asserts', () => {
  it('Assert contains', () => {
    cy.visit('http://automationpractice.com/index.php');
    cy.title().should('eq', 'My Store');
    cy.wait(2000);

    cy.get('#block_top_menu').contains('Women').click();
  });

  it('Assert find/eq', () => {
    cy.visit('http://automationpractice.com/index.php');
    cy.title().should('eq', 'My Store');
    cy.wait(2000);

    cy.get('.product-container').find('.product-image-container').eq(0).click();
  });

  it('Assert have.text/contain.text', () => {
    cy.visit('https://demoqa.com/text-box');
    cy.title().should('eq', 'ToolsQA');
    cy.wait(2000);

    cy.get('#userName').should('be.visible').type('Juan');
    cy.get('#userEmail').should('be.visible').type('juan@example.com');
    cy.get('#submit').should('be.visible').click();

    cy.get('#name').should('have.text', 'Name:Juan');
    cy.get('#name').should('contain.text', 'Juan');
  });

  it('Assert have.text and then', () => {
    cy.visit('https://demoqa.com/text-box');
    cy.title().should('eq', 'ToolsQA');
    cy.wait(2000);

    cy.get('#userName').should('be.visible').type('Juan');
    cy.wait(2000)
    cy.get('#userName')
      .should('contain.value', 'Juan')
      .then(() => {
        cy.get('#userEmail').should('be.visible').type('juan@example.com');
        cy.get('#submit').should('be.visible').click();
      });

    cy.get('#name').should('have.text', 'Name:Juan');
    cy.get('#name').should('contain.text', 'Juan');
  });

  it('Assert have.class', () => {
    cy.visit('https://demoqa.com/text-box');
    cy.title().should('eq', 'ToolsQA');
    cy.wait(2000);

    cy.get('#userName').should('be.visible').should('have.class', 'form-control').then((e)=>{
        cy.get('#userName').type('Juan')
    })
  });

  it('Assert have.class and function and', () => {
    cy.visit('https://demoqa.com/text-box');
    cy.title().should('eq', 'ToolsQA');
    cy.wait(2000);

    cy.get('#userName').should('be.visible').and('have.class', 'form-control').then((e)=>{
        cy.get('#userName').type('Juan')
    })
  });

  it('Assert not.have.class', () => {
    cy.visit('https://demoqa.com/text-box');
    cy.title().should('eq', 'ToolsQA');
    cy.wait(2000);

    cy.get('#userName').should('be.visible').and('not.have.class', 'form-control-2').then((e)=>{
        cy.get('#userName').type('Juan')
    })
  });

  it('Assert length', () => {
    cy.visit('https://www.w3schools.com/html/tryit.asp?filename=tryhtml_table_intro');
    cy.title().should('eq', 'Tryit Editor v3.7');
    cy.wait(2000);

    cy.get('table > tr').should('have.length', 6)
  });

  it('Assert contains at the beginning', () => {
    cy.visit('https://demoqa.com/text-box');
    cy.title().should('eq', 'ToolsQA');
    cy.wait(2000);

    cy.contains('type="button"', 'Submit').should('be.visible').click({force:true})
  });
});
