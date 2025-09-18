const NumeroDaSorte = 9
let chute = Number(prompt("Escolha Seu número:"))


if (chute === NumeroDaSorte) {
    alert ("ACERTOU!!");
    document.getElementById ("resultado").innerHTML="ACERTOU!!"
}else{
    alert ("Não Foi Dessa Vez")}