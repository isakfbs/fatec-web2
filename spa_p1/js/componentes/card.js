export default function CreateCard() {
  const div = document.createElement("div");

  div.classList = "card";
  div.innerHTML = `

    <div class="card">
        <h1>Novo Card</h1>
    </div>
    `;

  return div;
}
