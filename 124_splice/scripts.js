// Splice: O método splice() altera o conteúdo de uma lista, 
//adicionando novos elementos enquanto remove elementos antigos.

let myFish = ["angel", "clown", "mandarin", "surgeon"];

//remove 0 elementos a partir do índice 2, e insere "drum"
myFish.splice(2, 0, "drum");
console.log(myFish);
//myFish é ["angel", "clown", "drum", "mandarin", "surgeon"]
//removed é [], nenhum elemento removido
console.log("\n");

myFish.splice(3,1,"nemo");
console.log(myFish); 
// myFish é ["angel", "clown", "drum", "mandarin", "surgeon"]
// removed o 3º indice e colocou um elemento que foi o nemo.


