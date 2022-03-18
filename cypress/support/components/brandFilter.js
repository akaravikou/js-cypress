class BrandFilter{

    constructor() {
        this.brandNameField = "[id*='p_89/']";
    }

    clickBrandNameField(brandName){
        cy.get(this.brandNameField).contains(brandName).click();
    }
}

export default BrandFilter;