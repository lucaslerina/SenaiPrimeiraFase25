programa {
  funcao inicio() {
    real salario, poupanca, aluguel, internet, conta
    escreva ("Valor total do Salário: R$")
    leia (salario)
    escreva ("Valor investido na Poupança: R$")
    leia (poupanca)
    escreva ("Valor gasto com Aluguel: R$")
    leia (aluguel)
    escreva ("Valor gasto com Internet: R$")
    leia (internet)
    conta = salario - poupanca - aluguel - internet
    escreva ("Sobra ainda: R$ " + conta)
    
  }
}
