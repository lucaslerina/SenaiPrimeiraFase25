programa {
  funcao inicio() {
    real n1, p1, n2, p2, media  
    escreva("Nota 1:  ")
    leia(n1)
    escreva("Peso da nota 1: ")
    leia(p1)
    escreva("Nota 2: ")
    leia(n2)
    escreva("Peso da nota 2: ")
    leia(p2)
    media = (n1*p1 + n2*p2) / (p1+p2)
    escreva("Média: " + media)
    
  }
}
