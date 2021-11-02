///<reference types='Cypress'/>
describe('', () => {
  it.only('Assert find/eq', () => {
    cy.visit('http://automationpractice.com/index.php');
    cy.title().should('eq', 'My Store');
    cy.wait(2000);

    cy.get('.product-container').find('.product-image-container').eq(0).click();
    cy.get('#product_condition .editable').then((e) => {
      if (e.text() === 'New') {
        cy.log('This is a new product');
      }
    });

    cy.get('#our_price_display').then((e) => {
      let price = e.text();
      price = price.slice(1, 3);
      if (price > 30) {
        cy.log('Price is too high, we can not buy it');
      } else {
        cy.log('Price is good, we can buy it');
        cy.get('#add_to_cart button').click()
      }
    });
  });
});
