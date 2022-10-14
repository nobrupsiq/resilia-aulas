var v_campoTexto = document.getElementById("campoTexto");

function verificarCampo() {
   if (v_campoTexto.value != "") {
      alert(`Você digitou: ${v_campoTexto.value}`);
      document.write(`O texto digitado foi ${v_campoTexto.value}`);
   } else {
      alert("Por favor preencha o campo!");
   }
}
