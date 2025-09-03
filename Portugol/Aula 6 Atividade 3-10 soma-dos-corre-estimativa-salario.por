programa {
  funcao inicio() {
    real corrida1,corrida2,corrida3,corrida4,corrida5, total
    escreva("Valor primeira corrida:R$")
    leia(corrida1)
    escreva("Valor Segunda Corrida:R$" )
    leia(corrida2)
    escreva("Valor Terceira Corrida:R$ ")
    leia(corrida3)
    escreva("Valor Quarta Corrida:R$ ")
    leia(corrida4)
    escreva("Valor Quinta Corrida:R$ ")
    leia(corrida5)
    total= corrida1+corrida2+corrida3+corrida4+corrida5
    escreva("Valor total das corridas:R$ " + total)
    
    //3.9
    real desconto
    desconto = total * 25/100
    escreva("\nDesconto: R$" + desconto )
    real totalLiquido
    totalLiquido=total-desconto
    escreva("\nO Total liquido do dia: R$" + totalLiquido) 

    //3.10

  real salario
  salario = totalLiquido *20
  escreva("\nEstimativa de Salário: R$ " + salario)  
    

  }
}
