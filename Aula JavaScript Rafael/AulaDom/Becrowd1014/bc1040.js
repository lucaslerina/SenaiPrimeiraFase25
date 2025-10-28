/* const fs = require('fs');

// Leitura da entrada (duas linhas)
const input = fs.readFileSync(0, 'utf8').trim().split('\n');

// Conversão dos valores
const X = parseInt(input[0]);   // distância total (Km)
const Y = parseFloat(input[1]); // combustível gasto (litros)

// Cálculo do consumo médio
const consumo = X / Y;

// Saída formatada com 3 casas decimais e "km/l"
console.log(`${consumo.toFixed(3)} km/l`);*/

const [x, y] = require('fs').readFileSync(0, 'utf8').trim().split('\n');
console.log((x / y).toFixed(3) + ' km/l');

