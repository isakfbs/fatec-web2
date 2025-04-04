export default function navbar() {
  const navbar = document.createElement("nav");
  navbar.innerHTML = `  
  <li><a href="#home">Home</a></li>
  <li><a href="#servicos">Serviços</a></li>
  <li><a href="#contato">Contatos</a></li>`;

  return navbar;
}
