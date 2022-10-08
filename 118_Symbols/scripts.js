class Cachorro {
  constructor(raca,cor) {
    this.raca = raca;
    this.cor = cor;
  }

  latir() {
    console.log('Au Au Au Au');
  }
  
}

let patas = Symbol();
Cachorro.prototype[patas] = 4;

let labrador = new Cachorro('Labrador','Amarelo');

console.log(labrador);
labrador.latir();

// Acessando Symbol:

console.log(Cachorro.prototype[patas]);
console.log(labrador[patas]);

