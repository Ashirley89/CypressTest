/// <reference types="cypress" />


// Navigate to Get Payoff Statements tab
describe('A registered user should be able to login and access Get Pay Off Statements', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.login('auto.user+bo-pboq-2qlj@peachfinance.com', 'hello12345')
        cy.wait(5000)
        cy.url().should('include', '/loans')
        
    })



// Click and send payoff statement
    it('User should be able to get payoff statement', () => {
        cy.getpayoffStatement()

    })
})   