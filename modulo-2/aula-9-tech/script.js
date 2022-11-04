minhaFuncao();

function minhaFuncao() {
  let a = 4; // variavel local
  document.getElementById("demo").innerHTML = a * a;
}

let a = 5; // variavel global
minhaFuncao2();
function minhaFuncao2() {
  document.getElementById("demo2").innerHTML = a * a;
}
