programa {
  funcao inicio() {
    inteiro vitorias, empates, pontos
    
    escreva("Digite o número de vitórias: ")
    leia (vitorias)
    escreva("Digite o número de empates:")
    leia (empates)
    pontos = vitorias*3 + empates
    escreva("Total de Pontos: " + pontos)
  }
}
