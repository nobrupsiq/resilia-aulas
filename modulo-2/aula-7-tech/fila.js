class Fila {
  constructor(lista) {
    this.lista = lista;
  }
  mostraFila() {
    for (let i = 0; i < this.lista.length; i++) {
      let position = i + 1;
      console.log(`Posição do número ${position}, valor ${this.lista[i]}`);
    }
    return this.lista;
  }
  chegada(...elementos) {
    return this.lista.push(...elementos);
  }
  partida(...elementos) {
    if (this.lista.length === 0) {
      throw new Error("Fila vazia");
    } else {
      return this.lista.shift(...elementos);
    }
  }
}

var novaFila = new Fila([]);
function ativarMostrarFila() {
  var inputFila = document.getElementById("input-fila").value;
  document.getElementById("fila-container").innerHTML = "";
  for (i = 0; i < novaFila.length; i++) {
    const create = document.createElement("div");
    create.classList.add("elemento-da-fila");
    create.innerText = novaFila.lista[i];
    document.getElementById("fila-container").appendChild(create);
  }
}

function ativarChegada() {
  var inputFila = document.getElementById("input-fila").value;
  novaFila.chegada(inputFila);
  document.getElementById("fila-container").innerHTML = "";

  for (i = 0; i < novaFila.lista.length; i++) {
    const create = document.createElement("div");
    create.innerText = novaFila.lista[i];
    create.classList.add("elemento-da-fila");
    document.getElementById("fila-container").appendChild(create);
  }
}

function ativarPartida() {
  novaFila.partida();
  document.getElementById("fila-container").innerHTML = "";

  for (i = 0; i < novaFila.lista.length; i++) {
    const create = document.createElement("div");
    create.innerText = novaFila.lista[i];
    create.classList.add("elemento-da-fila");
    document.getElementById("fila-container").appendChild(create);
  }
}
