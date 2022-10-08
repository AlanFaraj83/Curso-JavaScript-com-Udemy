function criarCachorro(raca) {
  let cachorro = Object.create({});
  cachorro.raca = raca;
  return cachorro;
}

let doberman = criarCachorro('Doberman');
console.log(doberman.raca);

console.log('\n');

function modeloCarro(modelo) {
  let carro = Object.create({});
  carro.modelo = modelo;
  return carro;
}

let ferrari = modeloCarro('Ferrari');
console.log (ferrari.modelo);

console.log('\n');


function tipoAnimal(tipo) {
  let animal = Object.create({});
  animal.tipo = tipo;
  return animal;
}

let tigre = tipoAnimal('Tigre');
console.log(tigre.tipo);

console.log('\n');

function criaCachorro(raca, patas, cor ) {
  let dog = Object.create({});
  dog.raca = raca;
  dog.patas = patas;
  dog.cor = cor;
  dog.latir = function() {
    console.log('Au,Au');
  }
  return dog;

  
}

let pastorAlemao = criaCachorro('Pastor Alemão', 4, 'black');
  console.log(pastorAlemao.raca);
  console.log(pastorAlemao.patas);
  console.log(pastorAlemao.cor);
  pastorAlemao.latir();


