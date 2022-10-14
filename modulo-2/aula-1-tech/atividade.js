var texto = document.querySelector(".text");

function abrir() {
   texto.innerHTML = "Estamos abertos";
   texto.style.color = "green";
}
function fechar() {
   texto.innerHTML = "Estamos fechados";
   texto.style.color = "red";
}
