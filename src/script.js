///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function Calculadora(num1, num2, operacao) {
  let numero1 = parseFloat(num1);
  let numero2 = parseFloat(num2);

  switch (operacao) {
    case '+':
        return numero1 + numero2;
    case '-':
        return numero1 - numero2;
    case '*':
        return numero1 * numero2;
    case '/':
      return numero2 !== 0 ? numero1 / numero2 : "Erro: Divisão por zero";
    case 'e': // Exponenciação manual com loop
      let resultado = 1;
      for (let i = 0; i < numero2; i++) {
        resultado *= numero1;
      }
      return resultado;
    default:
      return "Erro: Operador inválido.";
  }

}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let visor = document.getElementById("visor");

function adicionar(tecla) {
  visor.value = visor.value + tecla;
}

function limpezatotal() {
  visor.value = "";
}

function calcular() {
  let numeros = visor.value.split(/[^0-9]/)
  let operadores = visor.value.split(/[0-9]/)
  let operador
  operadores.forEach(x => {
    if (x != "")
      operador = x
  });

  visor.value = Calculadora(numeros[0], numeros[1], operador)
}
