var nome; // ATRIBUTO
var idade;
var comportamento;

// SET

function setNome(n) {
  this.nome = n;
}
function setIdade(i) {
  this.idade = i;
}
function setComportamento(c) {
  this.comportamento = c;
}

// GET

function getNome() {
  return this.nome;
}
function getIdade() {
  return this.idade;
}
function getComportamento() {
  return this.comportamento;
}

setNome("Rex");
setIdade(10);
setComportamento("Latir");

document.write(
  `Nome do cachorro é: ${getNome()} <br> Idade do cachorro é: ${getIdade()} <br> Comportamento do cachorro é: ${getComportamento()}`
);

getNome();
getIdade();
getComportamento();
