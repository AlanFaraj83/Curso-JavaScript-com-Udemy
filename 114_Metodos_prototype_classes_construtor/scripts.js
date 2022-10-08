function Cachorro(raca,cor) {
  this.raca = raca;
  this.cor = cor;
}

Cachorro.prototype.uivar = function() {
  console.log('AUUUUUUU');
}

Cachorro.prototype.latir = function() {
  console.log('Au Au');
}



let pug = new Cachorro('Pug','Preto');
console.log('O cachorro é da raça: ' + pug.raca);
console.log('O cachorro é da cor ' + pug.cor);

pug.uivar();
pug.latir();