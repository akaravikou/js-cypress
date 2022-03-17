import Header from '../components/header';
import ProductsGrid from '../components/productsGrid';
import Footer from '../components/footer';

class AmazonMainPage {

    constructor() {
        this.header = new Header();
        this.productsGrid = new ProductsGrid();
        this.footer = new Footer();    
    }

    getHeader() {
        return this.header
    }

    getProductsGrid() {
        return this.productsGrid
    }

    getFooter() {
        return this.footer
    }
}

export default AmazonMainPage;