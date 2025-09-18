const numero = prompt("Escolha um número de 1 a 7 e descubra o dia da semana:");
const diasDaSemana = ["Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado", "Domingo"];

// Verifica se o número está dentro do intervalo de 1 a 7
if (numero >= 1 && numero <= 7) {
  // Exibe o dia correspondente (subtrai 1 para ajustar o índice do array)
  alert("O dia da semana é: " + diasDaSemana[numero-1 ]);
} else {
  alert("Número inválido! Por favor, escolha um número entre 1 e 7.");
}