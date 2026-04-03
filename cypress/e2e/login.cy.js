import login from "../pages/login";
import invetory from "../pages/inventory";

describe('Login', () => {
    beforeEach(() => {
        login.visitarPagina()
    })

    it('Realizar login com sucesso', () => {
        //act
        login.preencherCredenciaisValidas() 
        //assert
        invetory.validarAcessoAPagina()
    });

    // credenciais inválidas 
    it.only('Realizar login informando credenciais inválidas', () => {
        // Act
        login.preencherCrendenciaisInvalidas()
        // Assert
       login.validarErrorCrendenciaisInvalidas()
    })
});