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

    it('Search result and filtering by price test', () => {
        mainPage.getHeader().searchProduct(inputData.searchItem);
        searchPage.getSearchResultBlock().getProducts().getProductName().should('contain', inputData.searchItem);
        searchPage.getSearchResultBlock().getPriceFilter().searchProductByPriceRange(inputData.minPriceValue, inputData.maxPriceValue);
        searchPage.getSearchResultBlock().getProducts().getProductPrice().each(actPrice => {
            const price = Number(actPrice.text().substring(1, actPrice.text().indexOf('.')));
            expect(price).greaterThan(inputData.minPriceValue);
            expect(price).lessThan(inputData.maxPriceValue);
        })
        searchPage.getSearchResultBlock().getBrandFilter().clickBrandNameField(inputData.brandName);
        searchPage.getSearchResultBlock().getProducts().getProductName().each(brand => {
           expect(brand).contain(inputData.brandName);
        })
    })

    it('Dropdown menu test', () => {
        mainPage.getHeader().useDropdownMenu(inputData.leftDropdownMenuSearchString);
        foundItOnAmazonPage.getPageTitle().should('contain', inputData.leftDropdownMenuSearchString);
    })

    it("Footer's validate content", () => {
        mainPage.getFooter().validateContent();
    })

    it.only('Wait until loading spinner disappear', () => {
        mainPage.getHeader().searchProduct(inputData.searchItem);
        searchPage.getSearchResultBlock().getBrandFilter().clickBrandNameField(inputData.brandName);
        cy.isElementExist(searchPage.getLoadSpinner);        
    })
})