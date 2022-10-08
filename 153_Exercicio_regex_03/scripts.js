// Crie uma regex que aceite a seguinte expressão "Marca: nomeDaMarca";
// Onde nomeDaMarca pode variar para Nike,Adidads,Puma,Asics;


const nomeDaMarca = /\w+: (Nike|Adidas|Puma|Asics)/; //Marca: nanananananna

console.log(nomeDaMarca.test("Marca: Nike"));
console.log(nomeDaMarca.test("Marca: Adidas"));
console.log(nomeDaMarca.test("Marca: Puma"));
console.log(nomeDaMarca.test("Marca: Asics"));
console.log(nomeDaMarca.test("Marca: Rebook"));
console.log(nomeDaMarca.test("123"));
console.log(nomeDaMarca.test(" "));
console.log(nomeDaMarca.test("Marca: "));
console.log(nomeDaMarca.test("Marca: asd "));

console.log("\n");

const validaMarca = /Marca: (Nike|Adidas|Puma|Asics)/;

console.log(validaMarca.test("Marca: Nike"));
console.log(validaMarca.test("Marca: Adidas"));
console.log(validaMarca.test("Marca: Puma"));
console.log(validaMarca.test("Marca: Asics"));
console.log(validaMarca.test("Marca: Rebook"));
console.log(validaMarca.test("123"));
console.log(validaMarca.test(" "));

