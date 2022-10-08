// Crie uma regex que valide endereços de IP;
//EX:127.0.0.1

const validandoIp = /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/;

console.log(validandoIp.test("127.0.0.1"));
console.log(validandoIp.test("8.8.8.8"));
console.log(validandoIp.test("192.168.0.62"));

console.log(validandoIp.test("127.168.0"));
console.log(validandoIp.test("192"));
console.log(validandoIp.test("asadada"));
console.log(validandoIp.test("12345"));
console.log(validandoIp.test("1275.1685.04.62444"));







