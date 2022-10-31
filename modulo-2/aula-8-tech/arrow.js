function total(a = 10, b = 20) {
    return a + b;
}

// console.log(total())

const addMensagem = (mensagem, data = Date.now()) => {
    const teste = `${mensagem} ${data}`
    return teste;
}

console.log(addMensagem('MILESEGUNDOS'))