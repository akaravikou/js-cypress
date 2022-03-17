import ProductItem from '../components/productItem';

class SearchResultBlock{

    constructor(){
        this.leftNavigationBar = '[class="sg-col-4-of-12 s-matching-dir sg-col-4-of-16 sg-col sg-col-4-of-20"]';
        this.signInButton = '.action-inner';
        this.products = new ProductItem();
    }

    validateContent(){
        cy.get(this.signInButton).should('Sign in')
    }

    getProducts(){
        return this.products;
    }
}

export default SearchResultBlock;