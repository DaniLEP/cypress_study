export class Cart {
    validarProdutoNoCarrinho(name){
      cy.contains(name).should('be.visible')
      cy.screenshot('produto adicionado ao carrinho')
    }
}

export default new Cart()