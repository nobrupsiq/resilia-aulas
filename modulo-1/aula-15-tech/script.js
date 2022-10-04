// Atividade: Olha o loop

/* ● Crie uma função chamada listaDecrescente. Sua função deve:
    ○ Receber um número positivo
    ○ Retornar uma string de números, em ordem decrescente, que vai do argumento
    fornecido a zero
    ○ Utilize “\n” na separação dos números para pular linhas


function listaDecrescente(numero) {
    var i = 0;
    while (numero > i) {
        console.log(numero);
        numero--;
    }
}
listaDecrescente(10);



 ● Crie uma função chamada fizz. Sua função deve:
    ○ Receber um número positivo
    ○ Retornar uma string de números, em ordem crescente, na qual os números que são
 múltiplos de 3 estão substituídos por fizz

 ● Teste tanto a função listaDecrescente quanto fizz, com diferentes argumentos
 */

// function fizz(numero) {
//     var n = 0;
//     while (n < numero) {
//         if (n % 3 == 0) {
//             console.log(n);
//         }
//         n++;
//     }
// }
// fizz(20);

// // CODEWARS

// function summation(num) {
//     var soma = 1;
//     var soma2 = 0;
//     for (let i = 1; i <= num; i++) {
//         soma = i;
//         soma2 = soma + soma2;
//         console.log(soma2);
//     }
//     return soma2;
// }
// console.log(summation(8));

// Contando carneirinhos

var countSheep = function (num) {
    var text = "";
    var i = 1;
    while (i <= num) {
        text += `${i} sheep...`;
        i++;
    }
    return text;
};

countSheep(3);
