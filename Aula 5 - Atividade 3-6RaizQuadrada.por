programa {
  inclua biblioteca Matematica
  funcao inicio() {
    inteiro num1, total, resultado
    escreva("Digite um número para calcular a raiz quadrada: ")
    leia(num1)
    resultado = Matematica.raiz(num1, 2)

    escreva("A raiz quadrada de ", num1, " é ", resultado)
  }
}
