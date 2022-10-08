let cachorro = {
  raca: '',
}

let pastorAlemao = Object.create(cachorro);

pastorAlemao.raca = 'Pastor Alemao';


console.log(pastorAlemao.raca);

console.log("\n");

let dog = {
  patas: 4,
  raca: 'SRD',
  latir: function() {
    console.log(" Au Au Au ");
  }
}

let labrador = Object.create(dog);

labrador.latir();

labrador.raca = "Labrador";
console.log(labrador.raca);
console.log(dog.raca);
console.log(labrador.patas);

console.log("\n");

let pastor = Object.create(dog);
pastor.raca = "Pastor Alemão";
console.log(pastor.raca);
console.log(pastor.patas);
pastor.latir();
