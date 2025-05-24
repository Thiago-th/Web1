//alert("Bem vindo ao curso!");
/*
document.getElementById("nome").value = "Oi";
Busca no DOM os elementos da página criados usando sua Id
.value altera o valor do elemento pela string entre "aspas"
*/
function calcular() {
  const dano = parseFloat(document.getElementById("dano").value.replace(",", "."));
  const cap = parseFloat(document.getElementById("cap").value.replace(",", "."));
  const raca = parseFloat(document.getElementById("raca").value.replace(",", "."));
  let resultado;

  if (isNaN(dano) || isNaN(cap) || isNaN(raca)) {
    alert("Por favor, insira números válidos!");
    return;
  }

  resultado = dano + cap * 0.7 + raca * 0.9;
  document.getElementById("resultado").value = resultado.toFixed(2);
}
