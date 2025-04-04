const main = document.querySelector("#main");
const navbarElement = document.querySelector("#navbar");
import navbar from "./componentes/navbar.js";
import Home from "./componentes/home.js";
import Servicos from "./componentes/servicos.js";
import Contatos from "./componentes/contatos.js";
navbarElement.appendChild(navbar());

const pessoa = { nome: "isak", idade: 26 };

window.addEventListener("hashchange", () => {
  if (location.hash === "#home") {
    main.innerHTML = Home(pessoa);
  } else if (location.hash === "#servicos") {
    main.innerHTML = Servicos();
  } else if (location.hash === "#contato") {
    main.innerHTML = Contatos();
  }
});

// const urlParams = new URLSearchParams(window.location.search);

// for(const parametro of urlParams){
//     console.log(parametro);
// }

// console.log(window.location.hash)
// console.log(location.hash)
// // console.log(hash)
