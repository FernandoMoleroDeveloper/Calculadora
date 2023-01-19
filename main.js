window.onload = function () {
  pantalla = document.getElementsByClassName("calculator__result")[0];
};

const numbersButtons = document.querySelectorAll(".button--operand");
const operatorsButtons = document.querySelectorAll(".button--operator");
const equalButton = document.querySelectorAll(".button--equal");
const clearButton = document.querySelectorAll(".button--clear");
let valorAnterior = 0;
let valorActual = 0;
let finalResult = 0;
let tipoOperator;

function agregarNumero(numero) {
  valorActual += numero;  
}

numbersButtons.forEach((boton) => {
    boton.addEventListener("click", () => agregarNumero(boton.value));
    boton.onclick = function (e) {
      pantalla.innerHTML = valorActual;
    };
  });

function computar(tipo) {
  tipoOperator = tipo;
  valorAnterior = parseFloat(valorActual);
  valorActual = 0;
}

operatorsButtons.forEach((boton) => {
    boton.addEventListener("click", () => computar(boton.value));
  });

  function reset() {
    pantalla.textContent = "";
    valorActual = 0;
    valorAnterior = 0;
    tipoOperator = null;
  }

  function imprimir(op) {
  valorActual = parseFloat(valorActual);
  switch (op) {
    case "+":
      finalResult = valorAnterior + valorActual;
      break;
    case "-":
      finalResult = valorAnterior - valorActual;
      break;
    case "*":
      finalResult = valorAnterior * valorActual;
      break;
    case "/":
      finalResult = valorAnterior / valorActual;
      break;
  }
  valorActual = finalResult;
}

equalButton.forEach((boton) => {
    boton.addEventListener("click", () => imprimir(tipoOperator));
    boton.onclick = function (e) {
      pantalla.innerHTML = valorActual;
    };
  });


clearButton.forEach((boton) => {
    boton.addEventListener("click", () => reset(boton.value));
  });




