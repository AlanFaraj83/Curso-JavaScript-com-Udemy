let milAoContrario = '1';

console.log(milAoContrario.padStart(4, "0"));

console.log("\n");

let sku = "34";

console.log(sku.padStart(6, "0"));

 // padStart: O método padStart inseri caracteres antes da String; 

console.log("\n");

const fullNumber = '2034399002125581';
const last4Digits = fullNumber.slice(-4);
const maskedNumber = last4Digits.padStart(fullNumber.length, '*');

console.log(maskedNumber);
// expected output: "************5581"