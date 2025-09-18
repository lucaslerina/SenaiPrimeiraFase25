// pede o ano ao usuário
    let ano = Number(prompt("Digite um ano:"));

    // regra para ano bissexto
    if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) {
      alert(ano + " é um ano bissexto ✅");
    } else {
      alert(ano + " não é um ano bissexto ❌");
    }


    //Funcionamento da regra: Se o ano for divisível por 4 → pode ser bissexto.
    // Mas se for divisível por 100, não é (ex.: 1900 não é).
    // Exceto se for divisível por 400, aí é bissexto (ex.: 2000 é).