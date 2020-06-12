var resultado = document.getElementById("resultado");
var concatenacaoParaSoma = "";
var concatenacaoParaTela = "";

function obtemNum(botao) {
  var valorBotao = document.getElementById(botao).innerHTML;
  concatenacaoParaSoma += parseInt(valorBotao);
  concatenacaoParaTela += valorBotao;
  resultado.innerHTML = concatenacaoParaTela;
  console.log(typeof concatenacaoParaSoma);
}

function mostrarResultado() {
  var arraySoma = concatenacaoParaSoma.split(NaN);
  console.log(concatenacaoParaSoma);
  var soma = 0;

  for (i = 0; i < arraySoma.length; i++) {
    soma += parseInt(arraySoma[i]);
  }
  return (resultado.innerHTML = soma);
}
