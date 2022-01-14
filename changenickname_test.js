/// <reference types="cypress" />

// Navigate to Change Nickname page - Verify page loads successfully
describe('A registered user should be able to change nickname', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.login('auto.user+bo-pboq-2qlj@peachfinance.com', 'hello12345')
        cy.wait(5000)
        cy.url().should('include', '/loans')
        
    })

    afterEach(() => {
        cy.logout()
    })


    // Verify that page is functional
    it('nickname change should work', () => {
        cy.wait(5000)
        cy.get('button[label="Loan"]').click()
        cy.contains('Change nickname').should('exist').click()
        cy.get('.Modal__ModalActions-sc-1iof6kt-6 > :nth-child(1)').click()
        
        
        

    })

})