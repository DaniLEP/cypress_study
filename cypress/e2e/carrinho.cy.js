import login from "../pages/login";
import inventory from "../pages/inventory";
import Header from "../pages/header";
import Cart from "../pages/cart";
import header from "../pages/header";

describe('Carrinho de Compras', () =>{
    beforeEach(() => {
        login.visitarPagina()
        login.preencherCredenciaisValidas()
    })

    it('Adicionar um produto ao carrinho com sucesso', () => {
        // Act
        const qtdItensAdd = 1 
        inventory.adicionarProduto('Sauce Labs Backpack')
        // Assert
        Header.validarCarrinhoPossuiItem(qtdItensAdd)
        Header.navegarParaCarrinho()
        Cart.validarProdutoNoCarrinho('Sauce Labs Backpack')
    }) 

    it('Remover um produto do carrinho com sucesso', () => {
        // Arrange 
        inventory.adicionarProduto('Sauce Labs Backpack')
        // Act
        inventory.removerItemCarrinho('Sauce Labs Backpack')
        // Assert
        header.validarCarrinhoVazio()
    })
})