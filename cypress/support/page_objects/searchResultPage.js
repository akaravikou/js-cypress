import Header from '../components/header';
import SearchResultBlock from '../components/searchResultBlock';
import Footer from '../components/footer';

class SearchResultPage{

    constructor(){
        this.header = new Header();
        this.searchResultBlock = new SearchResultBlock();
        this.footer = new Footer();
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
}

export default SearchResultPage;