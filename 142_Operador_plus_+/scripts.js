// Operador Plus +: Quando um + está após alguma expressão, este elemento pode se repetir mais de uma vez.

// Operador plus +: Quando um + está após alguma expressão,este elemento
//   pode se repetir mais de uma vez.

const umOuMaisNumeros = /\d+/;

console.log(umOuMaisNumeros.test('1518'));
console.log(umOuMaisNumeros.test(''));
console.log(umOuMaisNumeros.test('asda'));
console.log(umOuMaisNumeros.test('1'));
console.log(umOuMaisNumeros.test('1518343536839'));