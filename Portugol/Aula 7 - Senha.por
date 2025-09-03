programa {
  funcao logico senhaValida(cadeia senha){
    se(senha== "1234"){
      retorne verdadeiro
      } senao {
        retorne falso
      }

  }
  funcao inicio() {
    cadeia senha escreva("Digite a senha: ")
    leia(senha)

    se(senhaValida(senha)) {
      escreva("Acesso")
    }senao{
      escreva("senha inválida")
    }
    
  }
}
