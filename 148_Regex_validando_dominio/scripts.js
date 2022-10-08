// Regex validando domínio: Da seguinte forma,podemos validar um domínio:


const validaDominio = /[?www.]\w+\.com.br|.com/;

console.log(validaDominio.test("www.ig.com"));

console.log(validaDominio.test("www.uol.com.br"));

console.log(validaDominio.test("www.bol"));

console.log(validaDominio.test("uol.com.br"));

