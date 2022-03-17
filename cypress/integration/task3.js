/// <reference types = "cypress" />
import AmazonMainPage from '../support/page_objects/amazonMainPage';
import inputData from '../fixtures/inputData.json';

describe('Test with Page Objects', () => {

    const mainPage = new AmazonMainPage();

    beforeEach('Open main page', () => {
        cy.visit('/')
    })

    it('Search test', () => {
        mainPage.getHeader().searchProduct(inputData.searchItem);
    })

    it('Dropdown menu test', () => {
        mainPage.getHeader().useDropdownMenu();
    })
})