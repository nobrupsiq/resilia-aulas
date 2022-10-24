function verificarValor() {
    const meuInput = $("#meuInput").val();
    try {
        if (isNaN(meuInput) !== false) throw "Valor inválido digite um número!";
    } catch (error) {
        $("#meuSpan").text("Erro, o valor não é um número!!");
        throw new Error(error);
    }
    if (meuInput % 2 === 0) {
        $("#meuSpan").text("É par!");
    } else {
        $("#meuSpan").text("É ímpar!");
    }
}
