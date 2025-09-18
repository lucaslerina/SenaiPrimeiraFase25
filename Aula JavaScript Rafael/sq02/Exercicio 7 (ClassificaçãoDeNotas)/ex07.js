let nota1, nota2, nota3
let media 


nota1 = Number(prompt("Digite sua Primeira nota:"))
nota2 = Number(prompt("Digite sua Segunda nota:"))
nota3 = Number(prompt("Digite sua Terceira nota:"))

if(nota1+nota2+nota3>=90){
    alert("NOTA A")
}else if (nota1+nota2+nota3>=80){
         alert("NOTA B")
}else if (nota1+nota2+nota3>=70){
     alert("NOTA C") 
}else if   (nota1+nota2+nota3>=60){
   alert("NOTA D") 
}else if  (nota1+nota2+nota3<=50){
    alert("NOTA E")
}
