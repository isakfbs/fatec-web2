import multiplicar from "./multiplicar.js";
import dividir from "./dividir.js";
import somar from "./somar.js";
import subtrair from "./subtrair.js";

const a = 5;
const b = 10;
const operacao = "+";

switch(operacao){
    case "+" :
        console.log(somar(a,b));
        break;
    case "-" :
        console.log(subtrair(a,b));
        break;
    case "*" :
        console.log(multiplicar(a,b));
        break;
    case "/" :
        console.log(dividir(a,b));
        break;
    default:
        console.log("Operação inválida!");
}