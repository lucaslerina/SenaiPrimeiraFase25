/* for (let i=0; i <=10; i++){
console.log(i)
 }   

//para executar: node for[tab] no terminal

// for que imprima  de 10 a 0

for (let i=10; i >=0; i--){
    console.log(i)

}

// for que imprima valores pares de 0 até 20

for (let i=0; i <=20; i+=2){
    console.log(i)
}


let soma = 0 
for(let i = 1; i<100; i++){
     soma += i
    }
    console.log("resultado da soma",soma)


let alunos = ["João","Maria","Joana"]
alunos.push("Pedro")

for(let i = 0; i<alunos.length; i ++){
    console.log("aluno: ", alunos [i])
}

//console.log(alunos.length) */

let frutas = ["Pêra","Uva","Maça","Jaca","Pessêgo"]

for(let i = 0; i<frutas.length; i++ ){
    console.log("Feira Da fruta tem: ", frutas[i])
}
