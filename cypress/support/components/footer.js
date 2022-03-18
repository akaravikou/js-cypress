class Footer {

    constructor(){
        this.backToTopButton = '#navBackToTop';
        this.footerLogo = '.navFooterLogoLine';
        this.footerLinkLine = '[class="navFooterLine navFooterLinkLine navFooterPadItemLine"]';
        this.footerDescLine = '.navFooterDescLine';
    }

    validateContent() {
        cy.get(this.footerLogo).should('be.visible');
    }
}

export default Footer;