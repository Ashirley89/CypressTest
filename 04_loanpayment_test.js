/// <reference types="cypress" />

//Navigate and login to make loan payment
describe('A registered user should be able to make loan payment successfully', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.login('auto.user+bo-pboq-2qlj@peachfinance.com', 'hello12345')

        cy.log('Removing saved payment method to add new one in the main test')
        cy.removepaymentMethod()
        
    })

//Click to make payment - Verify form is interactive
    it.only('make payment', () => {
        cy.log('Adding new payment method')
        cy.addpaymentMethod()
        cy.get('.main-actions > .Button__StyledButton-sc-1irh7c3-0').click()
        cy.wait(5000)
        cy.get('.LoanCard__LoanCardContainer-sc-1se89jm-0').click()
        cy.wait(5000)
        cy.log('Verify added payment method was successful')
        cy.url().should('include', '/activity')
        cy.get('.LoanCard__LoanCardContainer-sc-1se89jm-0').click()
        cy.get('[href="/loans/LN-5K9P-RWYB/make-payment"] > .Button__StyledButton-sc-1irh7c3-0').click()
        cy.url().should('include', '/make-payment')
        cy.logout()
        
 
    })
})