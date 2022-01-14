/// <reference types="cypress" />

// Navigate to Add New Payment Method - Verify page loads and functions as expected 
describe('A registered user should be able to remove payment method successfully', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.login('auto.user+bo-pboq-2qlj@peachfinance.com', 'hello12345')
        cy.wait(5000)
        cy.url().should('include', '/loans')
    
// Deleting saved payment method In order to add a new payment method
        cy.log('Removing Prior Payment Method')
        cy.removepaymentMethod()
      
      })

// Adding new payment method
      it('user should be able to remove payment method of choice', () => {
        cy.log('Adding New Payment Method')
        cy.addpaymentMethod() 
        cy.log('User Logs Out Of Portal')
        cy.logout()
      
      

    })

})