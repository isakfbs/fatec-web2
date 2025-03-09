import multiplicar from "./multiplicar.js";
import dividir from "./dividir.js";
import somar from "./somar.js";
import subtrair from "./subtrair.js";

export function calcular(num1, num2, operacao) {
  switch (operacao) {
    case "+":
      return somar(num1, num2);
    case "-":
      return subtrair(num1, num2);
    case "*":
      return multiplicar(num1, num2);
    case "/":
      return dividir(num1, num2);
    default:
      return "Operação inválida!";
  }
}
