let idadeCachorro = Number(prompt("Digite a idade do seu cachorro:"));

// 1 ano de cachorro = 7 anos humanos
let idadeHumana = idadeCachorro * 7;

alert("A idade do seu cachorro em anos humanos é: " + idadeHumana);

// vamos dizer que "aposentar" é a partir de 65 anos humanos
if (idadeHumana >= 65) {
  alert("🐶 Seu doguinho já pode se aposentar por idade! 🎉");
} else {
  alert("🐶 Seu doguinho ainda é jovem para se aposentar! 😉");
}
