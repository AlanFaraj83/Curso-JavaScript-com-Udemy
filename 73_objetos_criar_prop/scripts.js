let pessoa = {
    nome: "Alan",
    idade: 38,
    profissao: "Analista de sistemas",
}

console.log(pessoa.nome);

delete pessoa.nome;

console.log(pessoa.nome);

console.log(pessoa);

pessoa.casado = false;

console.log(pessoa.casado);

pessoa.nome = "Alex";

console.log(pessoa.nome);

console.log(pessoa);

