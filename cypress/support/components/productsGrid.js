class ProductsGrid {

    constructor(){
        this.categoryGrid = 'div #gw-card-layout';
        this.offerGrid = 'div #gw-content-grid';
        this.signInSecurelyButton = '.a-button-inner';
    }

    validateContent(){
        cy.get(this.signInSecurelyButton).should('Sign in securely');
    }
}

export default ProductsGrid;