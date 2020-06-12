var resultado = document.getElementById("resultado");
var concatenacao = "";

function obtemNum(botao) {
  var valorBotao = document.getElementById(botao).innerHTML;
  concatenacao += valorBotao;
  resultado.innerHTML = concatenacao;
}

function mostrarResultado() {
  var arraySoma = concatenacao.split("+");
  var soma = 0;

  for (i = 0; i < arraySoma.length; i++) {
    soma += parseInt(arraySoma[i]);
  }

  return (resultado.innerHTML = soma);
}
