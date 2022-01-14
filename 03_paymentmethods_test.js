/// <reference types="cypress" />

// Navigate to manage payment method - Verify page loads and displays as expected 
describe('A registered user should be able to make edits to payment method', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.login('auto.user+bo-pboq-2qlj@peachfinance.com', 'hello12345')
        cy.wait(5000)
        cy.url().should('include', '/loans')
        
    })

// Click to make edits to payment method & verify edits save successfully
    it('payment method edits - add', () => {
        cy.wait(5000)
        cy.log('Navigating to add new payment method field')
        cy.get('button[label="Loan"]').click()
        cy.contains('Manage payment methods').click()
        cy.url().should('include','/payment-methods')
        cy.get('.PaymentMethod__PaymentMethodSelection-sc-1883y6-2 > .Button__StyledButton-sc-1irh7c3-0').should('exist').click()
        cy.wait(5000)
        cy.log('Adding payment method credentials')
        cy.get('.payment-selection-btn-group > :nth-child(2)').click()
        cy.get('input[name="first name"]').type('Shirley', {force: true})
        cy.get('input[name="last name"]').type('Addo', {force: true})
        cy.get('.with-card-type').type('4207670197664553')
        cy.get(':nth-child(3) > :nth-child(2) > span').type('07/22')
        cy.get('.payment-type-form > :nth-child(3) > :nth-child(3) > span').type('212')
        cy.get(':nth-child(4) > span').type('21770')
        cy.get('[data-cy="submit"]').click()
        cy.wait(5000)
        cy.log('Verify payment method added message')
        cy.get('.message-status > .message').should('be.visible')
    })

})
