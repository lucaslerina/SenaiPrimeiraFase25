const prompt = require ("prompt-sync")()

const idade =prompt ("Digite sua idade: ")
const cnh = prompt ("Você possui CNH?(SIM/NÃO)")

if(idade >=18 && cnh === SIM){
    console.log ("Você está autorizado a dirigir!")
}else{
    console.log("Você Não pode dirigir!")
} 

