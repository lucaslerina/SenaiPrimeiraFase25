const prompt = require ("prompt-sync")()
const usuario = prompt("Digite o nome do Usuário: ")
const senha = prompt("Digite sua senha");

if (senha.length >=6 && usuario === "admin") {
  console.log("Acesso Permitido!");
} else {
  console.log ("Acesso Negado.");
}