// var saborPizza = 'marguerita';
// var dia = 'quarta';

// if (saborPizza == 'marguerita' && (dia == 'quarta' || dia == 'sabado')) {
//     console.log("[PROMO]: Pizza em dobro!");
//     console.log('Começando a fazer DUAS pizzas margueritas');
// } else {
//     console.log('dia errado')
// }

// var saborPizza = prompt('Digite o saber da pizza: ')

// function criaTextoPreco(item, preco) {
//     return `O item ${item} custa R$ ${preco}`
// }

// console.log(criaTextoPreco('Tomate', 0.98));

var idade = prompt("Digite a idade:");

if ((idade > 15 && idade < 18) || idade > 70) {
    alert("O voto é opcional");
} else if (idade < 16) {
    alert("Não poderá votar");
} else {
    alert("Você pode votar!");
}
