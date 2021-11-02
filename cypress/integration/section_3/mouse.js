///<reference types='Cypress'/>

import 'cypress-file-upload';
require('@4tw/cypress-drag-drop');

describe('Cypress mouse events', () => {
  it('Drag and drop', () => {
    cy.visit('https://the-internet.herokuapp.com/drag_and_drop');
    cy.title().should('eq', 'The Internet');
    cy.wait(4000);

    cy.get('#column-a').drag('#column-b', { force: true });
    cy.wait(2000);
  });

  it('Mouse over and removeAttr', () => {
    cy.visit('https://www.way2automation.com/');
    cy.title().should(
      'eq',
      'Online Selenium Certification Course | Selenium Online Training | Selenium Tutorial'
    );
    cy.wait(4000);

    cy.contains('Resources').trigger('mouseover', { force: true });
    cy.contains('Practice Site 1')
      .invoke('removeAttr', 'target')
      .click({ force: true });
  });

  it.only('Mouse slider', () => {
    cy.visit('https://rangeslider.js.org/');
    cy.title().should(
      'eq',
      'rangeslider.js'
    );
    cy.wait(4000);

    cy.get('#js-rangeslider-3 > div.rangeslider__handle').invoke('attr', 'value', '80')
    cy.wait(1000)
  });
});
