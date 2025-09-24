const prompt = require ("prompt-sync")()

const notaFinal = prompt("Digite a nota final: ")
const VerifiFrequencia = prompt("Digite a Frequencia: ")

if(VerifiFrequencia >= 8 && notaFinal >= 7 ){
    console.log("Aprovado!")
}else{
  console.log("Reprovado")  
}