import { elements as el} from "./elements"

class Login {
    visitarPagina() {
        cy.visit('https://www.saucedemo.com/')
    }

    preencherCredenciaisValidas(){
        cy.get(el.username).type(Cypress.env('username'))
        cy.get(el.passoword).type(Cypress.env('password'))
        cy.get(el.loginButton).click()
    }

    preencherCrendenciaisInvalidas(){
        cy.get(el.username).type('user.invalid')
        cy.get(el.passoword).type('senha')
        cy.get(el.loginButton).click()
    }

    validarErrorCrendenciaisInvalidas(){
        cy.get(el.errorMessage)
        .should('contain.text', 'Username and password do not match any user in this service')
        cy.url().should('eq', 'https://www.saucedemo.com/')
        cy.screenshot('erro credenciais inválidas')
    }
}

export default new Login()
