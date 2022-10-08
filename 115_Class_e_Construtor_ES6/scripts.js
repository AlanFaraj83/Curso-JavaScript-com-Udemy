class Cachorro {
  constructor(raca) {
    this.raca = raca;
  }

}

Cachorro.prototype.latido =function() {
  console.log('AU AU AAAA');
}

let labrador = new Cachorro('Labrador');
console.log(labrador.raca);
labrador.latido();