class LoginPage {

    constructor() {
        this.emailField = '#ap_email';
        this.continueButton = 'span #continue';
    }

    typeEmailField(email) {
        cy.get(this.emailField).type(email);
    }

    clickContinueButton(){
        cy.get(this.continueButton).click();
    }

    inputEmail(email){
        this.typeEmailField(email);
        this.clickContinueButton();
    }
}

export default LoginPage;