const notab = /[^ab]/;

console.log(notab.test("a"));
console.log(notab.test("Aqui tem a"));

console.log("\n");

const nottoaz = /[^a-z]/;
console.log(nottoaz.test("asd"));
console.log(nottoaz.test("123"));
console.log(nottoaz.test("123 as"));
console.log(nottoaz.test("asdasfdsghiklm"));

console.log("\n");

const az = /[a-z]/;

console.log(az.test("asdasfdsghiklm"));


