const nomes = ["joão", "maria", "Ricardo", "Joana"]
/*
for(let nome of nomes){
   console.log(nome) 
}
*/

function renderizaArray(itens) {
    for (let item of itens) {
        console.log(item)
    }
}


let dados = [20.00, 50, 60, 70]
let animais = ["cachorro", "gato", "vaca", "galinha"]

renderizaArray(dados)