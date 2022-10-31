// Quando duas classes possuem métodos e atributos em comum, podemos utilizar uma
// classe como base para programá-las.

// O princípio de engenharia de software DRY (don’t repeat yourself) prega que códigos
// repetidos devem ser evitados. Utilizando herança, podemos diminuir a repetição de
// código.

class Heroi {
    constructor(nome, nivel) {
        this.nome = nome;
        this.nivel = nivel;
    };
    getNome() {
    return `${nome}`
    };
    getNivel() {
        return `${nivel}`
    };
}

class Mago extends Heroi {
    constructor(nome, nivel, feitico) {
        super(nome, nivel)
        this.feitico = feitico;
    }   
}

const view = new Mago('MARVEL', 223, 'Sapo')
Mago.prototype.getNome // FUNCIONA APENAS NO PROTOTYPE DA FUNÇÃO
Mago.prototype.getNivel // FUNCIONA APENAS NO PROTOTYPE DA FUNCÃO DE CALLBACK

console.log(view)
console.log(view.nome)
console.log(view.nivel)




