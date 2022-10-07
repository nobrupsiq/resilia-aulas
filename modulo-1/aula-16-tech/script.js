// var listaConvidados = [
//     "Jessica",
//     "Edu",
//     "Felipe",
//     "Samantha"
// ];

// var listaConvidados2 = new Array(
//     'Fabio',
//     'Dudu',
//     'Vic',
//     'Jansen',
// );
// console.log(listaConvidados2)


// ARRAY INSERÇÃO


// var listaConvid = [];

// listaConvid.push('Amanda');
// listaConvid.push('Nina', 'Bruno', 'Carol');
// console.log(listaConvid)


// ARRAY REMOÇÃO

// var listaConvid = ['Vê', 'Thomaz', 'Cinthia', 'Luiz', 'Nic'];

// var desconvidados = [listaConvid.pop(), listaConvid.pop()];

// console.log(desconvidados)


// Arrays e loops

// var listaConvid = ['Vê', 'Thomaz', 'Cinthia', 'Luiz', 'Nic'];
// var indice = 0;

// while (indice < listaConvid.length) {
//     console.log(listaConvid[indice]);
//     indice++;
// }


// Arrays
// Arrays são uma estrutura flexível, capaz de armazenar um conjunto de valores
// em uma única variável.
// Ex - Sorteios da Loteria:

//sorteio específico

// var sorteio54454 = [12, 32, 45, 60, 42, 7];
// //histório dos sorteios
// var sorteios = [
//     [32, 15, 27, 55, 12, 38],
//     [25, 17, 13, 22, 06, 01],
//     [16, 18, 15, 38, 23, 29]
// ];


// Arrays: deleção de elemento

// var feira = ['goiaba', 'maçã', 'couve', 'cenoura'];
// feira = feira.splice(2, 2);
// console.log(feira)
//retorna a parte cortada

// var nMastigadas = 0;
// while (nMastigadas < 5) {
//     console.log(`Mastigada de número ${nMastigadas} realizada`);
//     nMastigadas++;
// }
// console.log('Finalmente engoliu!')


// Estruturas de repetição: for

// var feira = ['goiaba', 'maçã', 'couve', 'cenoura'];

// for (var i = 0; i < feira.length; i++) {
//     console.log(`Fui à feira e comprei: ${feira[i]}`);
// }

// Laços internos
// Em alguns cenários precisamos utilizar laços de repetição internos.
// Exemplo:
// Temos um array com listas de gastos anotados na semana.
// Como chegamos a soma de gastos em cada semana?

var gastos = [
    [32.98, 17.3, 28.4, 55.2],
    [25.7, 17.13, 13.00]
]

// for (var i = 0; i < gastos.length; i++) {
//     var totalSemana = 0;
//     for (var j = 0; j < gastos[i].length; j++) {
//         totalSemana += gastos[i][j];
//     }
//     console.log(`Gasto na semana ${i}: ${totalSemana}`);
//     totalSemana = 0;
// }

var gastos = [
    [32.98, 17.3, 28.4, 55.2],
    [25.7, 17.13, 13.00]
]
// for (var i = 0; i < gastos.length; i++) {
//     var totalSemana = 0;
//     for (var i2 = 0; i2 < gastos[i].length; i2++) {
//         totalSemana += gastos[i][i2];
//     }
//     console.log(`Gasto na semana ${i}: ${totalSemana}`);
// }


// SOLUÇÃO MELHORADA

// function somarArr(arr) {
//     var total = 0;
//     for (var i = 0; i < arr.length; i++) {
//         total += arr[i];
//     }
//     return total;
// }

// for (var i = 0; i < gastos.length; i++) {
//     console.log(`Gasto na semana ${i}: ${somarArr(gastos[i])}`);
// }
