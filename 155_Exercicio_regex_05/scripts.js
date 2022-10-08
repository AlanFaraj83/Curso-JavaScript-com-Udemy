// Crie uma regex que valide nome de usuários no sistema;
// Aceita letras de A-Z,_e-,números de 0-9,mínimo de 3 caracteres e máximo de 16;
//^(?=.{3,16}$) = MÍNIMO 3 caracteres e Máximo 16 caracteres.
// [a-z0-9-_] = letras de A-Z,_e-,números de 0-9.

const validaUsuario =/^(?=.{3,16}$)[a-z0-9-_]/;

console.log(validaUsuario.test("matheus_123"));
console.log(validaUsuario.test("as"));
console.log(validaUsuario.test("11111111111111111111111"));








