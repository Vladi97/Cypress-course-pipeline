///<reference types='Cypress'/>

require('cypress-plugin-tab');
import 'cypress-file-upload';

describe('Uploading images', () => {
    it('Uploads an image', () => {
       cy.visit('https://demoqa.com/automation-practice-form')
       cy.title().should('eq', 'ToolsQA');
       cy.wait(4000);
       
       const path = 'img1.jpg'
       cy.get('[type="file"]').attachFile(path)
       cy.wait(2000)
   })
})
