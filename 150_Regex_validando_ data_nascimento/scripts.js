// Regex validando e-mail: Da seguinte forma,podemos validar um e-mail:


const validarDataNasc = /[0-31]{2}[/][01-12]{2}[/][1920-2020]{4}/;

console.log(validarDataNasc.test("08/04/1986"));
console.log(validarDataNasc.test("8/03/1986"));
console.log(validarDataNasc.test("08-03-1986"));
console.log(validarDataNasc.test("08/03/86"));
console.log(validarDataNasc.test("12/12/1999"));
console.log(validarDataNasc.test("31/02/2010"));