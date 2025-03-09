import { calcular } from "./exercicio01/calcular.js";
import { inverter } from "./exercicio02/inverteArray.js";
import { listarPares } from "./exercicio03/listaPares.js";

//Exercicio 01
document.addEventListener("DOMContentLoaded", () => {
  const calcularBtn = document.getElementById("calcular");
  const resultadoElement = document.getElementById("resultado01");

  calcularBtn.addEventListener("click", () => {
    const num1 = Number.parseFloat(document.getElementById("num1").value);
    const num2 = Number.parseFloat(document.getElementById("num2").value);
    const operacao = document.getElementById("operacoes").value;

    if (Number.isNaN(num1) || Number.isNaN(num2)) {
      resultadoElement.textContent = "Por favor, insira números válidos";
      return;
    }

    const resultado = calcular(num1, num2, operacao);
    resultadoElement.textContent = resultado;
  });
});

//Exercicio 02

document.getElementById("inverterBtn").addEventListener("click", () => {
  const input = document.getElementById("arrayInput").value;
  const arrayOriginal = input.split(",").map(Number);
  const arrayInvertido = inverter(arrayOriginal);

  document.getElementById("resultado02").textContent =
    arrayInvertido.join(", ");
});

//Exercicio 03

document.getElementById("listarParesBtn").addEventListener("click", () => {
  const input = document.getElementById("numeroInput").value;
  const lista = listarPares(input);

  document.getElementById("resultado03").textContent = lista;
});
