var numeros = [1, 2, 3, 4, 5];
var quadrado = numeros.map((element) => {
  return Math.pow(element, 2); // elevar ao quadrado
});

console.log(quadrado);

var vencedores = [
  {
    nome: "equipe super",
    pais: "brasil",
  },
  {
    nome: "Time Show",
    pais: "EUA",
  },
  {
    nome: "mega group",
    pais: "Canada",
  },
];

var podioPorPais = vencedores.map((item, index) => {
  return item.pais;
});

console.log(podioPorPais);
