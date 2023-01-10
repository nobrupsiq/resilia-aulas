const inDescricao = document.getElementById('inDescricao')
const inValor = document.getElementById('inValor')
const btRegistrar = document.getElementById('btRegistrar')
const outConta = document.getElementById('outconta')
const outResposta = document.getElementById('outResposta')

let numContas = 0;
let valTotal = 0;
let resposta = '';

function exibirConta() {
   let descricao = inDescricao.value;
   let valor = Number(inValor.value);

   
}

btRegistrar.addEventListener('click', exibirConta)
