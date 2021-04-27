/// <reference types="cypress" />

import {LoginPage} from "../pages/login_page"

const loginPage = new LoginPage()

it('loginTest', function(){

    cy.visit('https://vishnu-qa.linksquares.dev/users/sign_in')
    loginPage.enterEmail('administrator@example.com')
    loginPage.enterPassword('password1234')
    loginPage.clickLogin()
    cy.get('h1').should('contain','Welcome to Vishnu')

})