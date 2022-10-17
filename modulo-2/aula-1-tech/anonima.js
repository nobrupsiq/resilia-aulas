const valor = () => {
  console.log("funcao anonima");
};

valor();

function alou() {
  return "Olá!";
}

function saudacao(mensagem, nome) {
  console.log(mensagem, nome);
}
saudacao(alou(), "Programadores Cariocas!");

var alouAgora = function () {
  return function () {
    console.log("Meu texto!!");
  };
};
alouAgora()();
