const dia =/\d\d/;

console.log(dia.test("2019") && "2019".length ==2);
console.log(dia.test('asd'));
console.log(dia.test('05') && "05".length ==2);
console.log(dia.test('asd1'));

console.log("\n");

const palavraPeloMenosTresLetras = /\w\w\w/;

console.log(palavraPeloMenosTresLetras.test("asd"));
console.log(palavraPeloMenosTresLetras.test("asdd") && "asdd".length ==3);
console.log(palavraPeloMenosTresLetras.test("as"));