var notas = [
    [],  // NOME DO ALUNO
    [], // NOTAS DO BIMESTRE
];

var nome = '';
var bm = 0;

for (var i = 0; i <= 2; i++) {
    nome = notas[[i], [0]] = prompt('Digite o nome: ');

    for (var y = 0; y <= 2; y++) {
        bm += notas[[0], [y]] = Number(prompt('Digite a nota: '));

    }
    document.write(`Nome: ${nome}  - Notas: ${bm}`);
    document.write('<br>')
}
