class Cachorro {
  constructor(raca, cor) {
    this.raca = raca;
    this.cor = cor;
  }

  latir() {
    console.log('Au Au');
  }
}

Cachorro.prototype.raca = 'SRD';
Cachorro.prototype.patas = 4;

let pug = new Cachorro ('Pug', 'Amarelo');

console.log(pug.patas);
pug.latir();

console.log(Cachorro.prototype.raca);
console.log(pug.raca);