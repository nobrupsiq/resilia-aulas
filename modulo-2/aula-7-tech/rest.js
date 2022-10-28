const pessoas = ["Pedro", "Carlos", "Marcia"];
const todasAsPessoas = [...pessoas, "Marco", "Jailson"];
console.log(todasAsPessoas);

function funcao1(...valor) {
  console.log(valor);
}

funcao1();
funcao1(6);
funcao1(10, 3, 5);
