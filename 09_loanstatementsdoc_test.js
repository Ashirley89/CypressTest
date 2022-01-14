/// <reference types="cypress" />


// Navigate/Login to loan Statement documents - Verify page loads and displays correctly
describe('A registered user should be able to go to loan statement documents', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.login('auto.user+bo-pboq-2qlj@peachfinance.com', 'hello12345')
        cy.wait(5000)
        cy.url().should('include', '/loans')
        
    })

    afterEach(() => {
        cy.logout()
    })


// Click and view loan documents
    it('user should be able to navigate and view documents', () => {
        cy.wait(5000)
        cy.url().should('include', '/activity')
        cy.get('[href="/loans/LN-5K9P-RWYB/documents"] > .ActivityTabs__Label-sc-1ci0pcd-3').click()
        cy.get(':nth-child(2) > [data-testid="noShowMobile"] > .InfoCardRow__ActionsGroup-sc-1nvu8fg-0 > .button-group > :nth-child(2)').click()

        
    })

})