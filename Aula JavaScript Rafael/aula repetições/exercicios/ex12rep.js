//Dada uma lista de números, encontre o maior e o menor valor.
const numeros = [10, 5, 8, 20, 3, 15];

let maior = numeros[0];
let menor = numeros[0];

for (let i = 1; i < numeros.length; i++) {
  if (numeros[i] > maior) {
    maior = numeros[i];
  }
  if (numeros[i] < menor) {
    menor = numeros[i];
  }
}

console.log(`Maior valor: ${maior}`);
console.log(`Menor valor: ${menor}`);