
class AmazonMainPage {

    constructor() {
        this.searchInput = '#twotabsearchtextbox';
        this.searchButton = '#nav-search-submit-button';
        this.hamburgerMenuButton = '#nav-hamburger-menu';
    }

    fillSearchInput(searchItem) {
        cy.get(this.searchInput).type(searchItem);
    }

    clickSearchButton() {
        cy.get(this.searchButton).click();
    }

    clickHamburgerMenuButton() {
        cy.get(this.hamburgerMenuButton).click();
    }

    searchProduct(searchItem) {
        this.fillSearchInput(searchItem);
        this.clickSearchButton();
    }

    useDropdownMenu() {
        this.clickHamburgerMenuButton();
        cy.get('#hmenu-content').contains('#FoundItOnAmazon').click();
    }
}

export default AmazonMainPage;