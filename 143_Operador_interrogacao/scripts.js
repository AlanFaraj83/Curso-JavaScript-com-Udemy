// Operador ?: Faz com que o dígito anterior seja opcional;

const padrao = /Abacax?i/;

console.log(padrao.test("Abacaxi"));
console.log(padrao.test("Abacai"));

console.log("\n");

const padrao2 = /\d+\w?/;

console.log(padrao2.test("123"));
console.log(padrao2.test("123 "));

