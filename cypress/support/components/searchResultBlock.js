import ProductItem from '../components/productItem';
import PriceFilter from '../components/priceFilter';
import BrandFilter from './brandFilter';

class SearchResultBlock{

    constructor(){
        this.priceFilter = new PriceFilter();
        this.brandFilter = new BrandFilter();
        this.signInButton = '[class = "action-inner"]';
        this.products = new ProductItem();
    }

    validateContent(){
        cy.get(this.signInButton).should('Sign in')
    }

    getProducts(){
        return this.products;
    }

    getPriceFilter(){
        return this.priceFilter;
    }

    getBrandFilter(){
        return this.brandFilter;
    }
}

export default SearchResultBlock;