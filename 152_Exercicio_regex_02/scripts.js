// Crie uma regex que aceite string terminadas com ID.

const validaStringComFinal_ID= /\d[ID]/;

console.log(validaStringComFinal_ID.test("123456ID"));
console.log(validaStringComFinal_ID.test("123486"));
console.log(validaStringComFinal_ID.test("abc"));
console.log(validaStringComFinal_ID.test("ABC"));
console.log(validaStringComFinal_ID.test("123456id"));
console.log(validaStringComFinal_ID.test("ID1237888"));
console.log(validaStringComFinal_ID.test("asddfID"));
console.log(validaStringComFinal_ID.test("ID"));
console.log(validaStringComFinal_ID.test("555ID"));

console.log("\n");

const validarId= /\d+ID\b/;

console.log(validarId.test("123456ID"));
console.log(validarId.test("123486"));
console.log(validarId.test("abc"));
console.log(validarId.test("ABC"));
console.log(validarId.test("123456id"));
console.log(validarId.test("ID1237888"));


