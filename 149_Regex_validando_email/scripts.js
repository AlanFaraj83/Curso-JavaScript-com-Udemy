// Regex validando e-mail: Da seguinte forma,podemos validar um e-mail:


const validarEmail = /\w+@\w+\.\w+/;

console.log(validarEmail.test("alan@gmail.com"));
console.log(validarEmail.test("alan@gmail"));
console.log(validarEmail.test("gmail.com"));
console.log(validarEmail.test("alan@gmail.com.br"));