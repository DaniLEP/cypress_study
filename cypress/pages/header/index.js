import { elements as el } from './elements'

export class Header {
    validarCarrinhoPossuiItem(quantidade){
        cy.get(el.cartBadge)
            .should('be.visible')
            .and('have.text', quantidade.toString())
    }

    navegarParaCarrinho(){
       cy.get(el.cartContainer).click()
    }

    validarCarrinhoVazio(){
       cy.get(el.cartBadge).should('not.exist')
       cy.screenshot('produto removido do carrinho')
    }
}

export default new Header()