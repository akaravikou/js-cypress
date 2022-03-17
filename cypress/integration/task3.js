/// <reference types = "cypress" />
import AmazonMainPage from '../support/page_objects/amazonMainPage';
import SearchResultPage from '../support/page_objects/searchResultPage';
import inputData from '../fixtures/inputData.json';

describe('Test with Page Objects', () => {

    const mainPage = new AmazonMainPage();
    const searchPage = new SearchResultPage();

    beforeEach('Open main page', () => {
        cy.visit('/')
    })

    it('Search result test', () => {
        mainPage.getHeader().searchProduct(inputData.searchItem);
        searchPage.getSearchResultBlock().getProducts().getProductName().should('contain', inputData.searchItem);
    })

    it('Dropdown menu test', () => {
        mainPage.getHeader().useDropdownMenu();
    })

    it("Footer's validate content", () => {
        mainPage.getFooter().validateContent();
    })
})