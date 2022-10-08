// Destructuring com array: Podemos definir variáveis com os valores de um array utilizando o destructuring.

let nomes = ['Alan','Nabil','Nader'];

let [nameA, nameB, nameC] = nomes;

console.log(nameA);
console.log(nameB);
console.log(nameC);

let carros = ['Alfa','Bravo','Citroen','Defender'];

console.log("\n");

let [carroA,carroB,carroC,carroD] = carros;

console.log(carroA);
console.log(carroB);
console.log(carroC);
console.log(carroD);

console.log(carros.reverse());

console.log(carros.slice(2));



