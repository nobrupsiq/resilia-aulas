var kg = parseFloat(prompt("Digite o seu peso: "));
var altura = parseFloat(prompt("Digite a sua altura: "));
var calculo = kg / altura ** 2;

if (calculo < 16) {
    alert(`IMC: ${calculo.toFixed(2)} Baixo peso muito grave`);
} else if (calculo > 16 && calculo < 17) {
    alert(`IMC: ${calculo.toFixed(2)} Baixo peso grave`);
} else if (calculo > 17 && calculo < 19) {
    alert(`IMC: ${calculo.toFixed(2)} Baixo peso`);
} else if (calculo > 19 && calculo < 25) {
    alert(`IMC: ${calculo.toFixed(2)} Peso normal`);
} else if (calculo > 25 && calculo < 30) {
    alert(`IMC: ${calculo.toFixed(2)} Sobrepeso`);
} else if (calculo > 30 && calculo < 35) {
    alert(`IMC: ${calculo.toFixed(2)} Obesidade de primeiro grau`);
} else if (calculo > 35 && calculo < 40) {
    alert(`IMC: ${calculo.toFixed(2)} Obesidade de segundo grau`);
}
