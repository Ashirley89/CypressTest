/// <reference types="cypress" />

// Navigate to change payment due date - Verify page loads and displays as expected 
describe('A registered user should be able to login and change due date', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.login('auto.user+bo-pboq-2qlj@peachfinance.com', 'hello12345')
        cy.wait(5000)
        cy.url().should('include', '/loans')
        
    })

    afterEach(() => {
        cy.logout()
    })


// Click and make edits to change due date & save
    it('user should be able to make edits to change due', () => {
        cy.wait(5000)
        cy.get('button[label="Loan"]').click()
        cy.contains('Change due date').click()
        cy.url().should('include','/change-due-date')
        cy.get('.select__value-container').click()
        cy.get('#react-select-2-option-3').click()
        cy.get('.frequency-dates > .select > .select__control > .select__value-container').click()

// Verify edits made save successfully
        cy.get('#react-select-3-option-30').should('exist').click()
        cy.get('[data-cy="submit"]').click()
        cy.wait(5000)
        cy.get('[data-cy="submit"]').click({force: true})
        
    })

})