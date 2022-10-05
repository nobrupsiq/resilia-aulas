var cont = 1;
var x = 0;
var n = parseInt(prompt('Digite o valor: '));

while (cont <= n) {
    var resto = cont % 2;
    if (resto === 0) {
        alert(`${cont}: é par`)
    }
    cont++
}
