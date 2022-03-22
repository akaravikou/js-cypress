/// <reference types = "cypress" />


describe('Test API with interception', () => {

    it.only('Verify request', () => {
        
        cy.intercept ('POST', 'https://www.amazon.com/ap/signin').as('getRequest')

        cy.visit('/');
        cy.get('#nav-link-accountList').click();
        cy.get('#ap_email').type('nightspirit@tut.by');
        cy.get('span #continue').click();

        cy.wait('@getRequest').its('request.body').should('include', 'email=nightspirit');
})
})