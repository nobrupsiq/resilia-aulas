var i = 0;

while (i < 5) {
    var x = parseInt(prompt('Digite os números: '));
    if (x == 3) {
        break;
    }
    alert(`O numero digitado foi ${x} e sua posição é ${i}`);
    i++;
}
