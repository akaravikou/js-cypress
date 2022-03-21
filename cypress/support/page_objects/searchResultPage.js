import Header from '../components/header';
import SearchResultBlock from '../components/searchResultBlock';
import Footer from '../components/footer';

class SearchResultPage{

    constructor(){
        this.header = new Header();
        this.searchResultBlock = new SearchResultBlock();
        this.footer = new Footer();
        this.loadSpinner = '.a-spinner-wrapper>:first-child';
    }

    getHeader(){
        return this.header
    }

    getSearchResultBlock(){
        return this.searchResultBlock
    }

    getFooter(){
        return this.footer
    }

    getLoadSpinner(){
        return this.loadSpinner;
    }
}

export default SearchResultPage;