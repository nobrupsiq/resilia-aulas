class Animal {
  fazerSom() {
    console.log("Fazer um som..");
  }
}
class Galinha extends Animal {
  fazerSom() {
    console.log("có..có..có..");
  }
}
class Cachorro extends Animal {
  fazerSom() {
    console.log("Au..Au..Au..");
  }
}
class Gato extends Animal {
  fazerSom() {
    console.log("Miau..Miau..Miau..");
  }
}

var animal = new Animal();
animal.fazerSom();
var cachorro = new Cachorro();
cachorro.fazerSom();
