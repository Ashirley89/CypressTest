/// <reference types="cypress" />

// Navigate to loan summary page - Verify page loads and displays successfully
describe('A registered user should be able to login and navigate to loan summary page', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.login('auto.user+bo-pboq-2qlj@peachfinance.com', 'hello12345')
        cy.wait(5000)
        cy.url().should('include', '/loans')
        
    })

    afterEach(() => {
        cy.logout()
    })


// Verify documents page loads and functional 
    it('user should be able to navigate to documents verify functionality', () => {
        cy.wait(5000)
        cy.url().should('include', '/activity')
        cy.get('[href="/loans/LN-5K9P-RWYB/summary"] > .ActivityTabs__Label-sc-1ci0pcd-3').contains('Summary').should('exist').click()
        cy.get(':nth-child(1) > .SectionTitle__InfoHeader-sc-blm3fw-0 > h3').should('be.visible')
        


    })

})