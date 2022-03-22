
class Header {

    constructor() {
        this.headerLogo = '#nav-logo-sprites';
        this.searchInput = '#twotabsearchtextbox';
        this.searchButton = '#nav-search-submit-button';
        this.hamburgerMenuButton = '#nav-hamburger-menu';
        this.leftDropdownMenu = '#hmenu-content';
        this.signInButton = '#nav-link-accountList';
    }

    validateContent() {
        cy.get(this.headerLogo).should('Amazon');
    }

    fillSearchInput(searchItem) {
        cy.get('[id="glow-toaster-body"]')
        cy.get(this.searchInput).type(searchItem)//, {force:true});
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

    useDropdownMenu(leftDropdownMenuSearchString) {
        this.clickHamburgerMenuButton();
        cy.get(this.leftDropdownMenu).contains(leftDropdownMenuSearchString).click();
    }

    clickSignInButton() {
        cy.get(this.signInButton).click();
    }
}

export default Header;