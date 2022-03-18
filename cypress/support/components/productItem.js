class ProductItem {

    constructor() {
        this.productPosition = '.s-card-container';
        this.productName = '.a-link-normal .a-text-normal';
        this.productPrice = '.a-price';
    }

    getProductItem(){
        return this.productPosition;
    }

    getProductName(){
        return cy.get(this.productName);
    }

    getProductPrice(){
        return cy.get(this.productPrice);
    }
}

export default ProductItem;