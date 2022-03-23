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

Cypress.Commands.add('isElementVisible', (elmt) => {
    expect(elmt).to.not.equal('')
    cy.get('body', { timeout: 5000 }).then(($el) => {
        if ($el.has(elmt).length > 0) {
            cy.get(elmt, {timeout: 3000}).should('not.be.visible');
        } else {
            cy.log("Loading spinner not visible")
        }
    })
})