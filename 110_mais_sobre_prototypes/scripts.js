const pessoa = {
  maos: 2,
}

let pessoaNova = Object.create(pessoa);

console.log(pessoaNova.maos);
console.log(Object.getPrototypeOf(pessoaNova) == pessoa);
console.log(Object.getPrototypeOf(pessoaNova) == Object.prototype);
console.log(Object.getPrototypeOf(pessoa) == Object.prototype);
console.log(pessoaNova.hasOwnProperty('maos'));

