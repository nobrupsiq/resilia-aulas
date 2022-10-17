var btn = document.querySelector("button");
var ipt = document.querySelector("input");

function activeButton() {
  const inputValue = ipt.value;
  alert(`Caractere: (${inputValue}) Código ASCII (${inputValue.charCodeAt()})`);
}

btn.addEventListener("click", activeButton);
