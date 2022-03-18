import Header from '../components/header';

class FoundItOnAmazonPage {

    constructor(){
        this.header = new Header();
        this.pageTitle = '[viewBox="0 0 314 31"]';
    }

    getHeader() {
        return this.header;
    }

    getPageTitle() {
        return cy.get(this.pageTitle);
    }
}

export default FoundItOnAmazonPage;