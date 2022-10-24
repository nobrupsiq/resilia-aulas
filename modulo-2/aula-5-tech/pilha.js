function pilha() {
    var itens = [];
    this.push = function (element) {
        // Indicar o item da pilha
        itens.push(element);
    };
    this.pop = function () {
        // Remove o item do topo da pilha
        return itens.pop();
    };
    this.peek = function () {
        // Devolve o elemento que está no topo da pilha
        return itens[itens.length - 1];
    };
    this.isEmpty = function () {
        // Informar se a pilha está vazia ou não
        return itens.length === 0;
    };
    this.clear = function () {
        // Limpar a pilha
        itens = [0];
    };
    this.size = function () {
        // Vai informar o tamanho da pilha
        return itens.length;
    };
    this.print = function () {
        // Imprime a pilha no console
        console.log(itens.toString());
    };
}

var valor = new pilha();
valor.push(2);
valor.push(4);
valor.push(6);
valor.push(8);
valor.push(10);
valor.print();
