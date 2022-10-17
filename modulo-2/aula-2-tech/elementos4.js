function addParagrafo() {
  var novoItem = document.createElement("p");
  novoItem.textContent = "Paragrafo adicionado pelo javascript";
  document.body.appendChild(novoItem);
}

addParagrafo();
