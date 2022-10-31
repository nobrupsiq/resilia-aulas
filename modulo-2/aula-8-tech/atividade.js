// class  AnotacoesController {
//     constructor([
//         addAnotacao = function() {

//         }
//     ])
// }

class Anotacoes {
    constructor(titulo, notas) {
        this.titulo = titulo;
        this.notas = notas;
    }
}

const valor1 = 'TESTE'
const valor2 = 'teste'

console.log(isNaN(valor1))
console.log(isNaN(valor2))

try {
    if(isNaN(x) === false) { // VERIFICACAO IS NOT A NUMBER 
        throw new Error('Dados invalidos') // VERIFICACAO DE DUAS ETAPAS
    } else {
        console.log(x)
    }
} catch (error) {
    alert('ERROR')
}

const view = new Anotacoes('teste', 'tese')
console.log(view)