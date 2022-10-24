function calcular() {
  const balas = document.getElementById("balas").value;
  const crianca = document.getElementById("crianca").value;

  try {
    if (balas <= 0 || crianca <= 0) throw "O valor das balas é inválido";
  } catch (error) {
    document.getElementById("resultado").innerHTML = "";
    throw new Error("O valor das balas é inválido");
  }

  document.getElementById("resultado").innerHTML = balas / crianca;
}
