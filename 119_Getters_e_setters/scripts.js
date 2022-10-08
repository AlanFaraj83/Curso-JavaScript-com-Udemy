//Get: Serve para resgatar o valor de uma propriedade;
//Set: Serve para alterar o valor de uma propriedade;

class Cachorro {
  constructor(raca,cor) {
    this.raca = raca;
    this.cor = cor;
  }

  latir() {
    console.log('Au Au Au Au');
  }

  get verRaca() {
    return 'A raça é ' + this.raca;
  }

  set novaRaca(value) {
    this.raca = value;
  }
  
}

let patas = Symbol();
Cachorro.prototype[patas] = 4;

let golden = new Cachorro('Pastor Alemão','Azul');
console.log(golden.verRaca);
golden.novaRaca = 'Golden';
console.log(golden.verRaca);

console.log(golden[patas]);
console.log(golden.cor);
golden.latir();

console.log('\n');

class Casa {
  constructor(modelo,cor) {
    this.modelo = modelo;
    this.cor = cor;
  }

  barulhocasa() {
    console.log('pac pac pac');
  }

  get getcor() {
    return 'A cor da casa é ' + this.cor;
  }

  set novaCor(value) {
    this.cor = value;
  }
}

let mansão = new Casa('Mansão_Arcaico', 'Azul Marinho');
console.log(mansão.modelo);
console.log(mansão.getcor);
mansão.novaCor = 'Amarelo';
console.log(mansão.getcor);
mansão.barulhocasa();




