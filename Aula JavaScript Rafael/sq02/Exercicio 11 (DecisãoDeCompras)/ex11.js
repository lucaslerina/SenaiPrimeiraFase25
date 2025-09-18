let preco = Number(prompt("Digite o preço do item:"));
let saldo = Number(prompt("Digite o seu saldo:"));

if (saldo >= preco) {
  console.log("✅ Você pode comprar este item!");
  alert("✅ Você pode comprar este item!");
} else {
  console.log("❌ Saldo insuficiente, você não pode comprar.");
  alert("❌ Saldo insuficiente, você não pode comprar.");
}
