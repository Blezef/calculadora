var resultado = document.getElementById("resultado");
var concatenacao = "";

function obtemNum(botao) {
  var valorBotao = document.getElementById(botao).innerHTML;
  concatenacao += valorBotao;
  resultado.innerHTML = concatenacao;
}

function mostrarResultado() {
  return (resultado.innerHTML = eval(resultado.innerHTML));
}

function limpar() {
  resultado.innerHTML = "";
  concatenacao = "";
}

function apagar() {
  resultado.innerHTML = resultado.innerHTML.substring(
    0,
    resultado.innerHTML.length - 1
  );
  concatenacao = concatenacao.substring(0, concatenacao.length - 1);
}
