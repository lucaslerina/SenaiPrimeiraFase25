const senha = prompt("Crie uma senha:");

if (senha.length >= 8) {
  alert("Senha válida!");
} else {
  alert("Senha muito curta! Deve ter pelo menos 8 caracteres.");
}
