function mostrarResulado() {
  document.getElementById("resultado").style.display = "block";
}

function sumar() {
  let num1;
  let num2;
  let resultado;
  num1 = document.getElementById("num1").value;
  num2 = document.getElementById("num2").value;
  resultado = parseInt(num1) + parseInt(num2);
  document.getElementById("Respuesta").innerHTML = `El resultado de sumar ${num1} + ${num2} es:`;
  document.getElementById("result").value=resultado;
}

function restar() {
    let num1;
    let num2;
    let resultado;
    num1 = document.getElementById("num1").value;
    num2 = document.getElementById("num2").value;
    resultado = parseInt(num1) - parseInt(num2);
    document.getElementById("Respuesta").innerHTML = `El resultado de restar ${num1} - ${num2} es:`;
    document.getElementById("result").value=resultado;
}

function multiplicar() {
    let num1;
    let num2;
    let resultado;
    num1 = document.getElementById("num1").value;
    num2 = document.getElementById("num2").value;
    resultado = parseInt(num1) * parseInt(num2);
    document.getElementById("Respuesta").innerHTML = `El resultado de muliplicar ${num1} por ${num2} es:`;
    document.getElementById("result").value=resultado;
}

function divivir() {
    let num1;
    let num2;
    let resultado;
    num1 = document.getElementById("num1").value;
    num2 = document.getElementById("num2").value;
    resultado = parseInt(num1) / parseInt(num2);
    document.getElementById("Respuesta").innerHTML = `El resultado de dividir ${num1} entre ${num2} es:`;
    document.getElementById("result").value=resultado;
}
function modular() {
  let num1;
  let num2;
  let resultado;
  num1 = document.getElementById("num1").value;
  num2 = document.getElementById("num2").value;
  resultado = parseInt(num1) % parseInt(num2);
  document.getElementById("Respuesta").innerHTML = `El resultado de modular ${num1} entre ${num2} es:`;
  document.getElementById("result").value=resultado;
}

function potenciar() {
  let num1;
  let num2;
  let resultado;
  num1 = document.getElementById("num1").value;
  num2 = document.getElementById("num2").value;
  resultado = Math.pow(parseInt(num1),parseInt(num2))
  document.getElementById("Respuesta").innerHTML = `El resultado de potenciar ${num1} a ${num2} es:`;
  document.getElementById("result").value=resultado;
}
