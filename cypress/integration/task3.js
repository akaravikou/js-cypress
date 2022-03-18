/// <reference types = "cypress" />

import AmazonMainPage from '../support/page_objects/amazonMainPage';
import SearchResultPage from '../support/page_objects/searchResultPage';
import FoundItOnAmazonPage from '../support/page_objects/foundItOnAmazonPage';

import inputData from '../fixtures/inputData.json';

describe('Test with Page Objects', () => {

    const mainPage = new AmazonMainPage();
    const searchPage = new SearchResultPage();
    const foundItOnAmazonPage = new FoundItOnAmazonPage();

    beforeEach('Open main page', () => {
        cy.visit('/')
    })

    // it('Search result test', () => {
    //     mainPage.getHeader().searchProduct(inputData.searchItem);
    //     searchPage.getSearchResultBlock().getProducts().getProductName().should('contain', inputData.searchItem);
    // })

    // it('Dropdown menu test', () => {
    //     mainPage.getHeader().useDropdownMenu(inputData.leftDropdownMenuSearchString);
    //     foundItOnAmazonPage.getPageTitle().should('contain', inputData.leftDropdownMenuSearchString);
    // })

    it("Footer's validate content", () => {
        mainPage.getFooter().validateContent();
    })
})