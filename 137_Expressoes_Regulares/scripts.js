//O que são Expressões Regulares: 
// Uma forma de encontrar padrões em uma string;
// Por exemplo: validar se só tem números;
// Em vez de criarmos funções complexas,podemos encontrar
//  dados em texto por meio das expressões regulares;
// Também chamadas de regex;
// As expressões regulares no JS são um tipo de objeto;
// Podemos instancia-lo de duas formas: New RegExp e /.../;
// Depois da definição do padrão por meio da regex;
// Utilizamos o método test() para verificar se o padrão é retornado;
// Com isso vamos receber de resposta true ou false,veja:


// Exemplo de expressões regulares:

const reg1 = new RegExp('bola');
let text = 'Tem bola na cesta';

console.log(reg1.test("Tem bola?"));
console.log(reg1.test("Não tem?"));
console.log(reg1.test(text));

console.log("\n");

const reg2 = /gol/;

console.log(reg2.test("Tem gol?"));
console.log(reg2.test("Não tem?"));




console.log("\n");

const reg3 = new RegExp(5);

console.log(reg3.test(5));
console.log(reg3.test(6));

console.log("\n");

console.log(/quadrado/.test('Onde tem um quadrado'));
console.log(/quadrado/.test('55555quadrado6789'));





