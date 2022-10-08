// Choice pattern: Podemos colocar uma instrução na regex que funciona como
//  || (or) das condicionais.

let frutas = /\d+ (bananas|maças|laranjas)/;

console.log(frutas.test("10 bananas"));
console.log(frutas.test("25 batatas"));
console.log(frutas.test("8 laranjas"));

console.log("\n");

const reg = /\w+: (Matheus|Alan|Hanin)/; //nome: nanananananna

console.log(reg.test("Nome: Matheus"));
console.log(reg.test("Nome: Leonardo"));
console.log(reg.test("Nome: Alan"));

