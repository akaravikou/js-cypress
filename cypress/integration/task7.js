/// <reference types = "cypress" />

import AmazonMainPage from '../support/page_objects/amazonMainPage';
import LoginPage from '../support/page_objects/loginPage';

import inputData from '../fixtures/inputData.json';

describe('Test API using cy.intercept()', () => {

    const mainPage = new AmazonMainPage();
    const loginPage = new LoginPage();

    it('Verify email value in request', () => {
        
        cy.intercept('POST', '/ap/signin').as('request')

        cy.visit('/');
        mainPage.getHeader().clickSignInButton();
        loginPage.inputEmail(inputData.email);

        cy.wait('@request').its('request.body').should('include', inputData.validateEmail);
    })
})