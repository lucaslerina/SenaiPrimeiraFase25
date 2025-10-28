function porquinho() {
  const v = parseFloat(document.getElementById("valorProduto").value) || 0;
  const m1 = +document.getElementById("moedas1").value || 0;
  const m50 = +document.getElementById("moedas050").value || 0;
  const m25 = +document.getElementById("moedas025").value || 0;
  const m10 = +document.getElementById("moedas010").value || 0;
  const m5 = +document.getElementById("moedas005").value || 0;

  const total = m1 + m50*0.5 + m25*0.25 + m10*0.1 + m5*0.05;
  const msg = `Total: R$ ${total.toFixed(2)}<br>Produto: R$ ${v.toFixed(2)}<br>` +
              (total >= v ? "✅ Dá pra comprar!" : `❌ Falta R$ ${(v-total).toFixed(2)}`);
  
  document.getElementById("resultado").innerHTML = msg;
}