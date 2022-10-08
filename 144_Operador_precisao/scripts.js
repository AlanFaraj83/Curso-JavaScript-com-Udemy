// Operador precisão: Inserir o número de ocorrência entre {};

let telefone = /\d{4,5}-\d{4}/;

console.log(telefone.test("4004-5050"));
console.log(telefone.test("99999-8080"));
console.log(telefone.test("777-505"));
console.log(telefone.test("9999-8"));

console.log("\n");

const cep = /\d{5}-\d{3}/;

console.log(cep.test("88117-500"));
console.log(cep.test("asd"));
console.log(cep.test("8811-500"));
console.log(cep.test("88117-50"));

console.log("\n");

const tel = /\(\d{2}\)\d{4,5}-\d{4}/;

console.log(tel.test("(21)9999-9999"));
console.log(tel.test("(21)999999-9999"));
console.log(tel.test("(21)99999-99999"));


