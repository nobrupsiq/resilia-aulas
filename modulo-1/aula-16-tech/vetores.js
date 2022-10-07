// variaveis compostas homogeneas. Tem esse nome poque todos os espaços são do mesmo tipo

var v = [1,2,3,4,5,6]
for (let i = 0; i < v.length; i++) {
   var n = parseInt(prompt(`Digite o ${i}° valor: `));
    document.write(v[i]);
}

for (let i = 0; i < v.length; i++) {
    console.log(`[${v[i]}]`);
}
