const main = document.querySelector("#main");
const navbarElement = document.querySelector("#navbar");
import navbar from "./componentes/navbar.js";
import Home from "./componentes/home.js";
import Servicos from "./componentes/servicos.js";
import Contatos from "./componentes/contatos.js";
import CreateCard from "./componentes/card.js";

navbarElement.appendChild(navbar());

const pessoa = { nome: "isak", idade: 26 };
main.innerHTML = Home(pessoa);
main.appendChild(CreateCard());

window.addEventListener("hashchange", () => {
  if (location.hash === "#contato") {
    main.innerHTML = Contatos();
  } else if (location.hash === "#servicos") {
    main.innerHTML = Servicos();
  } else {
    main.innerHTML = Home(pessoa);
    main.appendChild(CreateCard());
  }
});

// const urlParams = new URLSearchParams(window.location.search);

// for(const parametro of urlParams){
//     console.log(parametro);
// }

// console.log(window.location.hash)
// console.log(location.hash)
// // console.log(hash)
