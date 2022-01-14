// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })



Cypress.Commands.add('login', (email, password) => {
    cy.session([email, password], () => {
    cy.visit('/login')
    cy.get('input[name="email"]').type(email, {force: true})
    cy.get('input[name="password"]').type(password, {force: true})
    cy.get('[data-cy="submit"]').click()
    })

})

Cypress.Commands.add('login', (wrongemail, wrongpassword) => {
    cy.get('input[name="email"]').type(wrongemail, {force: true})
    cy.get('input[name="password"]').type(wrongpassword, {force: true})
    cy.get('[data-cy="submit"]').click()
    
})

Cypress.Commands.add('logout', () =>{
    cy.get('.Dropdown__Container-sc-who2c4-2 > .Button__StyledButton-sc-1irh7c3-0').click()
    cy.get(':nth-child(4) > .Dropdown__InternalLink-sc-who2c4-1').click()
    cy.url().should('include','/login')
})

Cypress.Commands.add('autopayEnable', () => {
    cy.wait(5000)
    cy.get('.main-actions > .Button__StyledButton-sc-1irh7c3-0').click()
    cy.get('.select-group > .select > .select__control > .select__value-container').click()
        cy.contains('Monthly').should('exist').click()
        cy.get('.frequency-dates > .select > .select__control > .select__value-container').click()
        cy.get('#react-select-4-option-0').click()
        cy.get('[data-testid="selectWrapper"] > .select > .select__control > .select__value-container').click()
        cy.get('#react-select-3-option-0 > .getIconWithLabel__IconLabelWrapper-sc-di825u-0 > .getIconWithLabel__Span-sc-di825u-1').click()
        cy.get('[data-cy="submit"]').click()
        cy.wait(5000)
        cy.get('.message').contains('Your Autopay settings have been updated.')
})

Cypress.Commands.add('autopayDisable', () => {
    cy.get('button[label="Loan"]').click()
        cy.contains('Manage Autopay').click()
        cy.get('.select-group > .select > .select__control > .select__value-container').click()
        cy.reload()
        cy.contains('Are you sure you want to turn off Autopay?').should('exist')
        cy.get('.Modal__ModalActions-sc-1iof6kt-6 > :nth-child(1)').click()
        cy.get('.select__menu-notice > a > .Button__StyledButton-sc-1irh7c3-0')
})

Cypress.Commands.add('addpaymentMethod', () => {
    cy.get('.PaymentMethod__PaymentMethodSelection-sc-1883y6-2 > .Button__StyledButton-sc-1irh7c3-0').click({force: true})
    cy.contains('Debit Card').should('be.visible').click()
    cy.get('input[name="first name"]').type('Shirley', {force: true})
    cy.get('input[name="last name"]').type('Addo', {force: true})
    cy.get('.with-card-type').type('4207670197664553')
    cy.get(':nth-child(3) > :nth-child(2) > span').type('07/22')
    cy.contains('CVC').should('be.visible').type('212')
    cy.get(':nth-child(4) > span').type('21770')
    cy.get('[data-cy="submit"]').click()
    cy.wait(5000)
    cy.get('.message-status > .message').should('be.visible')
   

})

Cypress.Commands.add('removepaymentMethod', () => {
    cy.get('.Dropdown__Container-sc-who2c4-2 > .Button__StyledButton-sc-1irh7c3-0').click()
    cy.get(':nth-child(2) > .Dropdown__InternalLink-sc-who2c4-1 > .Dropdown__Span-sc-who2c4-11').click()
    cy.get('.PaymentMethod__PaymentMethodSelection-sc-1883y6-2 > .Button__StyledButton-sc-1irh7c3-0').click()
    cy.contains('Debit Card').should('be.visible').click()
    cy.get('.editable-container > .info-card-row > [data-testid="noShowMobile"] > .InfoCardRow__ActionsGroup-sc-1nvu8fg-0 > .button-group > :nth-child(1)').click()
    cy.wait(5000)
    cy.get('[data-testid="modal-content"] > .InfoCardContainer__InnerContainer-sc-1gaqu5z-0 > .TitleWithEducationTip__TitleRow-sc-mbaap7-0 > .TitleWithEducationTip__TitleText-sc-mbaap7-1').click()
    cy.get('.Modal__ModalActions-sc-1iof6kt-6 > :nth-child(1)').click()
    cy.wait(5000)
  
   

})

Cypress.Commands.add('manageautoPay', () => {
    cy.get('.LoanCard__LoanCardContainer-sc-1se89jm-0').click()
    cy.wait(5000)
    cy.get('.LoanActionMenuTrigger__LabelWrapper-sc-ltlagb-3').click()
    cy.contains('Manage Autopay').click()
    cy.get('.select-group > .select > .select__control > .select__value-container').click({force: true}).click()
    cy.wait(5000)
    cy.get('.select-group > .select > .select__control > .select__value-container').click({force: true})
    cy.wait(5000)
    cy.get('#react-select-3-option-1').click({force: true})
    cy.get('.frequency-dates > .select > .select__control > .select__value-container').click({force: true})
    cy.get('[data-testid="selectWrapper"] > .select > .select__control > .select__value-container').click({force: true})
    cy.get('.getIconWithLabel__IconLabelWrapper-sc-di825u-0').click({multiple: true})
    cy.get('[data-cy="submit"]').click()
    cy.wait(5000)
    cy.get('.message').contains('Your Autopay settings have been updated.')


    
})

Cypress.Commands.add('getpayoffStatement', () => {
    cy.wait(5000)
    cy.log('Navigate and click to send payoff statement to email')
    cy.get('button[label="Loan"]').click()
    cy.contains('Get payoff statement').click()
    cy.url().should('include','/get-payoff-statement')
    cy.get('[data-cy="radio-Email"] > [data-testid="label-no-custom-field"]').click()
    cy.get('.select__value-container').click()
    cy.get('#react-select-2-option-1').click()
    cy.get('button[class="Button__StyledButton-sc-1irh7c3-0 cJMvVs button border-none secondary"]').click()

// Verify Statement sends as expected
    cy.waitFor('Payoff statement successfully sent.')
    cy.wait(5000)
    cy.log('Verify payoff statment was sent successfully')
    cy.contains('Payoff statement successfully sent.').should('be.visible')
    cy.logout()
})


