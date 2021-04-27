export class LoginPage{

    LoginPage_emailField = '#user_email'
    LoginPage_passwordField = '#user_password'
    LoginPage_loginButton = '[name="commit"]'

    enterEmail(email){

        cy.get(this.LoginPage_emailField, {timeout:6000}).type(email)

    }

    enterPassword(password){

        cy.get(this.LoginPage_passwordField).type(password)

    }

    clickLogin(){

        cy.get(this.LoginPage_loginButton).click()

    }

}