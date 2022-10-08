// JSON para string: 
//   * Podemos converter o JSON para uma string de forma fácil; 
//   * Ou também uma string para JSON

const car ={
    "brand": "BMW",
    "wheels": 4,
    "doors": 2,
    "type":"sedan"
}

let jsonToString = JSON.stringify(car);

console.log(jsonToString);

let StringToJson = JSON.parse(jsonToString);

console.log(StringToJson);

console.log("\n");

let pessoa = {
    "nome": "Hanin",
    "idade": 28,
    "profissão": "Enfermeira",
    "hobbies": ["musica arabe","novela"]
}

let pessoaTexto = JSON.stringify(pessoa);
console.log(pessoaTexto);

console.log("\n");

let pessoaJson = JSON.parse(pessoaTexto);
console.log(pessoaJson);

console.log(pessoaJson.profissão);
console.log(pessoaJson.hobbies[1]);





