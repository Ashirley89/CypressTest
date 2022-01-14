/// <reference types="cypress" />

// Navigate to Autopay - Verify page loads and displays successfully
describe('A registered user should be able to enable & disable autopay', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.login('auto.user+bo-pboq-2qlj@peachfinance.com', 'hello12345')
        cy.wait(5000)
        cy.url().should('include', '/loans')

// Removing Payment Method     
        cy.log('Removing Payment Method to Disable Autopay')
        cy.wait(5000)
        cy.log('Removing Payment Method')
        cy.get('button[label="Loan"]').click()
        cy.contains('Manage payment methods').should('be.visible').click()
        cy.wait(5000)
        cy.contains('Remove').should('be.visible').click()
        cy.get('button[class="Button__StyledButton-sc-1irh7c3-0 cJMvVs button border-none"]').click()
        cy.wait(5000)
        cy.url().should('include', '/payment-methods')

// Enable Autopay
        cy.wait(5000)
        cy.log('Enabling Autopay')
        cy.get('div[class="LoanCard__LoanCardContainer-sc-1se89jm-0 dxvXjs loan-card active"]').click()
        cy.contains('Enable Autopay').should('be.visible').click()
        cy.contains('Select frequency').should('be.visible').click()
        cy.contains('Monthly').should('exist').click()
        cy.contains('Select day').should('exist').click()
        cy.get('#react-select-4-option-0').click({force: true})
        cy.contains('Select payment method').should('exist').click()
        cy.get('.select__menu-notice > a').click({force: true})
        cy.get('.PaymentMethod__PaymentMethodSelection-sc-1883y6-2 > .Button__StyledButton-sc-1irh7c3-0')
        cy.url().should('include', '/payment-methods')

    })
// Add Payment Method
    it('user should be able to disable autopay', () => {
        cy.log('Adding Payment Method to Enable Autopay')
        cy.wait(5000)
        cy.addpaymentMethod()
        cy.logout()
           
    })

})