///<reference types='Cypress'/>

require('cypress-xpath')

describe('Working with invoke', () => {
  it('Invoke text', () => {
    cy.visit('https://demoqa.com/automation-practice-form');
    cy.title().should('eq', 'ToolsQA');
    cy.wait(2000);

    cy.get('#app div.practice-form-wrapper > h5').invoke('text').as('info');
    cy.get('@info').should('contain', 'Student Registration Form');

    cy.get('#userName-label').invoke('text').as('usernameLabel');
    cy.get('@usernameLabel')
      .should('contain', 'Name')
      .then(() => {
        cy.get('#firstName').type('Juan');
      });
  });

  it('Invoke styles', () => {
    cy.visit('https://demoqa.com/automation-practice-form');
    cy.title().should('eq', 'ToolsQA');
    cy.wait(2000);

    cy.get('#app div.practice-form-wrapper > h5').invoke(
      'attr',
      'style',
      'color:red; font-size: 50px;'
    );
  });

  it('Invoke hide and show', () => {
    cy.visit('https://demoqa.com/automation-practice-form');
    cy.title().should('eq', 'ToolsQA');
    cy.wait(2000);

    cy.get('#app div.practice-form-wrapper > h5').invoke('hide', '3s')
    cy.get('#app div.practice-form-wrapper > h5').invoke('show', '3s')
  });

  it('Invoke src', () => {
    cy.visit('https://demoqa.com/automation-practice-form');
    cy.title().should('eq', 'ToolsQA');
    cy.wait(2000);

    cy.xpath('//*[@id="app"]/header/a/img').invoke('attr', 'src').should('include', 'Toolsqa.jpg')
  });
});
