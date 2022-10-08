let pessoa = {
    nome: "Alan",
    profissão: "Programador Jr",
    idade: 38,

}

console.log(pessoa.nome);
console.log(pessoa.profissão);
console.log(pessoa.idade);

console.log("\n");

console.log(pessoa.nome + " é um " + pessoa.profissão + " e tem " + pessoa.idade + " anos.");

console.log("\n");

let cachorro = {
    patas: 4,
    nome: 'Shark',
    latir: function(){
        console.log("Au Au");
    }
}

console.log(cachorro.patas);
console.log(cachorro.nome);
cachorro.latir();
