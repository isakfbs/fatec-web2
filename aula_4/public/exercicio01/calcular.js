import multiplicar from "./multiplicar.js";
import dividir from "./dividir.js";
import somar from "./somar.js";
import subtrair from "./subtrair.js";

export function calcular(num1, num2, operacao) {
  switch (operacao) {
    case "+":
      console.log(somar(num1, num2));
      break;
    case "-":
      console.log(subtrair(num1, num2));
      break;
    case "*":
      console.log(multiplicar(num1, num2));
      break;
    case "/":
      console.log(dividir(num1, num2));
      break;
    default:
      console.log("Operação inválida!");
  }
}
