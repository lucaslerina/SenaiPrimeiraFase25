//Faça um programa que calcule a média de uma lista de números.

const numeros = [10, 20, 30, 40, 50];

let soma = 0;
for (let i = 0; i < numeros.length; i++) {
  soma += numeros[i];
}

const media = soma / numeros.length;

console.log(`A média é ${media}`);
