class PriceFilter {

    constructor(){
        this.minPriceField = '#low-price';
        this.maxPriceField = '#high-price';
        this.goPriceFilterButton = '.a-button-input';
    }

    getMinPriceField(){
        return cy.get(this.minPriceField);
    }

    getMaxPriceField(){
        return cy.get(this.maxPriceField);
    }

    clickGoPriceFilterButton(){
        cy.get(this.goPriceFilterButton).click();
    }

    searchProductByPriceRange(minPrice, maxPrice){
        this.getMinPriceField().type(minPrice);
        this.getMaxPriceField().type(maxPrice);
        this.clickGoPriceFilterButton();
    }
}

export default PriceFilter;