const cachorro = {
  raca:'srd',
  uivar: function() {
    console.log("Auuuuuuuuuu");
  },
  rosnar: function() {
      console.log("grrrrr");
  },
  setRaca: function(raca) {
    this.raca = raca;
  },
  getRaca: function() {
    return "A raça do cachorro é " + this.raca;
  }
}

console.log(cachorro.raca);
cachorro.setRaca('Pastor Alemão');
console.log(cachorro.raca);
console.log(cachorro.getRaca());

console.log("\n");

const gato = {
  racas:'',
  gatoMia: function() {
    console.log("Miau,Miau");
  },
  setTipoGato: function(racas) {
    this.racas = racas;
  },
  getTipoGato: function() {
    return "A raça do gato é " + this.racas;
  }
}

gato.gatoMia();
gato.setTipoGato('Persa');
console.log(gato.racas);
console.log(gato.getTipoGato());

