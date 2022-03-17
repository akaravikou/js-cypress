class ProductItem {

    constructor() {
        this.productPosition = '.s-card-container';
        this.productName = '.a-link-normal .a-text-normal';
    }

    getProductItem(){
        return this.productPosition;
    }

    getProductName(){
        return cy.get(this.productName);
    }
}

export default ProductItem;