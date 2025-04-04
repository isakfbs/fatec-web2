export default function Contatos(dados) {
  return `
      <h1>Página Contatos</h1>
      <p> Aqui existe uma página inicial</p>
      <p>Escreva o que quiser</p>
      <form id='form-contato'>
        <label for="nome">Nome:</label>
        <input type="text" name="nome" id="name" placeholder="Digite seu nome">
        <button> Enviar</button>
      </form>
      `;
}
