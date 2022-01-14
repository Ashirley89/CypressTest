/// <reference types="cypress" />

//Login Page - Authenticate successfully on Peach Loans
describe('A registered user should be able to successfully login', () => {
    beforeEach(() => {
        cy.visit('/') //we are not logged in
    })

    
    //Navigate to login page - Verify page loads as expected
    it('Login page should load', () => {
        cy.contains('Account Login').should('exist')
        cy.contains('Continue').should('exist')
        cy.log('Verify Help link displays')
        cy.contains('Help').should('exist')

    })

    
    //Enter user credentials
    it('Login should work as expected', () => {
        cy.log('Entering Correct Credentials then Click Continue')
        cy.login('auto.user+bo-pboq-2qlj@peachfinance.com', 'hello12345')
    
    //Verify login was successful
        cy.url().should('include', '/loans')
        cy.wait(5000)
    
    // Logout from portal - Verify logout was successful
        cy.log('User Logs Out')
    it('Logout and verify logout was successful')
        cy.logout()

    })
})










