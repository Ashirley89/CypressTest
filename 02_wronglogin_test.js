/// <reference types="cypress" />

//Login Page - Authenticate unsuccessfully on Peach Loans
describe('A registered user should not be able to login with wrong credentials', () => {
    beforeEach(() => {
        cy.visit('/') //we are not logged in
    })
    

    //Navigate to login page - Verify page loads as expected
    it('Login page should load', () => {
        cy.contains('Account Login')
        cy.contains('Account Login').should('exist')
        cy.contains('Continue').should('exist')
        cy.log('Verify Help link displays')
        cy.contains('Help').should('exist')

    })

    //Enter wrong user credentials
    it('Login should not work as expected', () => {
        cy.log('Entering Wrong Login Credentials Then Click Continue')
        cy.login('auto.user+bo-pboq-2qlj@peachfinances.com', 'hello1234')
        
    //Error message is shown and we remain on the login page
        cy.contains('.LoginSubmitButton__ErrorMessage-sc-t1j2zs-3', 'Not authorized')
        cy.url().should('contain', '/login')

    })

})
