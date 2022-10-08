function Cachorro(raca,patas,cor ) {
  this.raca = raca;
  this.patas = patas;
  this.cor = cor;
  this.uivar = function() {
    console.log('AUuu');
  }
}

let husky = new Cachorro('Husky',4, 'red');


console.log(husky.raca);
console.log(husky.patas);
console.log(husky.cor);
husky.uivar();

console.log('\n');

function Computer(teclado,mouse,camera) {
  this.teclado = teclado;
  this.mouse = mouse;
  this.camera = camera;
}

let Computers = new Computer(2,1,3);
console.log(Computers.teclado);
console.log(Computers.mouse);
console.log(Computers.camera);

console.log('\n');

function Casa(telhado,janela,porta,regiao) {
  this.telhado = telhado;
  this.janela = janela;
  this.porta = porta;
  this.regiao = regiao;
  this.barulho = function(){
    console.log("krrr,krrrr");
  }
}

let MinhaCasa = new Casa(2,4,3,'Sudeste');
console.log(MinhaCasa.telhado);
console.log(MinhaCasa.janela);
console.log(MinhaCasa.porta);
console.log(MinhaCasa.regiao);
MinhaCasa.barulho();