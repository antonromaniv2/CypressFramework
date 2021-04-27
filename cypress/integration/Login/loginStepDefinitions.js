/// <reference types="cypress" />

import {LoginPage} from "c:/My Files/Cypress/CypressFramework/cypress/pages/login_page" 

const loginPage = new LoginPage()

Given ('User is on the Login page', function (){
    cy.visit('https://vishnu-qa.linksquares.dev/users/sign_in')
});

When ('User enters valid credentials', function (){
    loginPage.enterEmail('administrator@example.com')
    loginPage.enterPassword('password1234')
});

And ('User clicks Login', function (){
    loginPage.clickLogin()
});

Then ('User is navigated to Projects tab', function (){
    cy.get('h1').should('contain','Welcome to Vishnu')
});



