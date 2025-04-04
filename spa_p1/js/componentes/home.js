export default function Home(dados) {
  console.log("click");
  return `
    <h1>Página Home</h1>
    <p> Aqui existe uma página inicial</p>
    <p>Escreva o que quiser</p>
    <p>O nome: ${dados.nome} e a idade: ${dados.idade}</p>
    `;
}
