function cozinhar() {
    // console.log(this.ingrediente)
    // console.log(this.ingrediente2)
    // console.log(this.ingrediente3)

}

let jantar = { 
    ingrediente: 'Arroz',
    ingrediente2: 'teste',
    ingrediente3: 'teste2',
}

let acao = cozinhar.bind(jantar); // Bind Retorna funcao com o this modificado
acao();

let calc = function() {
    return {
        soma: this.soma,
        multiplicar: this.multiplicar,
        dividir: this.dividir,
    }
}

// Methods enter input

let methods = {
    soma: function(x, y) {
        return x + y;
    },
    multiplicar: function(x, y) {
        return x * y;
    },
    dividir: function(x, y) {
        return x / y;
    }
}

calculoBind = calc.bind(methods)
console.log(calculoBind().multiplicar(23, 45))