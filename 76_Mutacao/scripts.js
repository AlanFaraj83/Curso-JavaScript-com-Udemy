let pessoa = {
    nome: "Alan",
}

let pessoa2 = pessoa;

let pessoa3 = {
    nome: "Alan",
}

console.log(pessoa == pessoa2);
console.log(pessoa3 == pessoa);
console.log(pessoa3 == pessoa2);

pessoa2.nome = "Pedro";

console.log(pessoa.nome);

pessoa.nome ="Hanin";

console.log(pessoa2.nome);