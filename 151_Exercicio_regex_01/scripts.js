// Crie uma regex que aceite só letras maiúsculas.

const letrasMaiuscula= /[A-Z]/;

console.log(letrasMaiuscula.test("VALEU"));
console.log(letrasMaiuscula.test("Cancun"));
console.log(letrasMaiuscula.test("praia"));
console.log(letrasMaiuscula.test("123"));

