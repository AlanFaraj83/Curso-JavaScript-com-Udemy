// Herança: Uma classe pode herdar propriedades de outra classe por herança;
// Para isso utilizamos extends;

class Mamifero {
  constructor(patas) {
    this.patas = patas;
  }
}

class Gato extends Mamifero {
  constructor(raca, patas) {
    super(patas, patas);
    this.raca = raca;
  }

  miar() {
    console.log('Miau', 'Miau');
  }

  get verRaca() {
    return 'A raça é' + this.raca;
  }

  set novaRaca(value) {
    this.raca = value;
  }
}

let felino = new Gato( "Siamês", 5);
console.log(felino.raca);
console.log(felino.patas);
felino.miar();
felino.novaRaca = 'Persa';
console.log(felino.raca);
console.log(felino.patas);

console.log("\n");

class Anfibio {
  constructor(patas) {
    this.patas = patas;
  }
}

class Repteis extends Anfibio {

  constructor(patas, raca,cor) {
    super(patas, patas);
    this.raca = raca;
    this.cor = cor;

  }

  coaxar() {
    console.log('croac croac croac');
  }

  get verCor() {
    return 'A cor do sapo é ' + this.cor;
  }

  set novaCor(value) {
    this.cor = value;

  }

}

let sapo = new Repteis(4,'Bufo','vermelho' );
console.log(sapo.patas);
console.log(sapo.raca);
console.log(sapo.verCor);
sapo.novaCor = 'Amarelo';
console.log(sapo.verCor);
sapo.coaxar();

