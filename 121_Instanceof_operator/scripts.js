// Herança: Uma classe pode herdar propriedades de outra classe por herança;
// Para isso utilizamos extends;

class Aquaticos {
  constructor(barbatana) {
    this.barbatana = barbatana;
  }
}

class Peixes extends Aquaticos {
  constructor(barbatana, tipo, cor) {
    super(barbatana, barbatana);
    this.tipo = tipo;
    this.cor = cor;
  }

  roncar() {
    console.log('O peixe dentro da agua faz glub glub glub');
  }

  get verTipo() {
    return 'A raça do meu peixe é ' + this.tipo;
  }

  set novoTipo(value) {
    this.tipo = value;
  }

  get verCor() {
    return 'A cor do peixe é ' + this.cor
  }
 
  set novaCor(value) {
    this.cor = value;
  }
}

let nemo = new Peixes(1, 'Nemo', 'Amarelo');
console.log(nemo.barbatana);
console.log(nemo.verTipo);
console.log(nemo.verCor);
nemo.roncar();
console.log(new Peixes instanceof Aquaticos);

console.log('\n');

nemo.novoTipo = 'Golfinho';
nemo.novaCor = 'Azul';
console.log(nemo.verTipo);
console.log(nemo.verCor);
nemo.roncar();
console.log(new Peixes instanceof Aquaticos);







