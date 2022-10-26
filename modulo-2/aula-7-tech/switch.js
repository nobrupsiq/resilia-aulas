login = false
switch (login) {
    case true:
        console.log('Usuario Logado')
        break
    case false:
        console.log('Usuario NAO Logado')
        break
}

mes = 'Maio';

switch (mes) {
    case 'Janeiro':
    case 'Fevereiro':
    case 'Março':
        console.log('Verão')
        break
    case 'Abril':
    case 'Maio':
    case 'Junho':
        console.log('Primavera')
        break
    case 'Julho':
    case 'Agosto':
    case 'Setembro':
        console.log('Outono')
        break
    case 'Outubro':
    case 'Novembro':
    case 'Dezembro':
        console.log('Inverno')
        break
}


cargo = 'Gerente'
salario = parseFloat(2000)

switch (cargo) {
    case 'Gerente':
        salario *= 1.10
        break
    case 'Supervisor':
        salario *= 1.15
        break
    default:
        salario *= 1.20;
}
console.log(salario)


let idade = 19

if (idade >= 18) {
    console.log(true)
} else {
    console.log(false)
}


let idade2 = 19
let podeDirigir = idade2 >= 18 ? true : false;

console.log(podeDirigir)
