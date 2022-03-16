/// <reference types = "cypress" />
import AmazonMainPage from '../support/page_objects/amazonMainPage';

// import config from '../support/configCypress';

describe('Test with Page Objects', () => {
    
    const mainPage = new AmazonMainPage();

    beforeEach('Open main page', () => {
        cy.visit('/')
    })

    it('Search test', () => {
    //     // const searchItem = config.searchItem;
    //     // console.log(searchItem);
        mainPage.searchProduct('one percenter revolution');
    })

    it('Dropdown menu test', () => {
        mainPage.useDropdownMenu();
    })
})