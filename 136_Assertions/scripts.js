// Assertions: Verificação no programa, que são utilizadas 
//   para assegurar que tudo ocorra da forma esperada.


// Exemplo de Assertions:

let arr = [1,2,3,4,5];
let arr2 = [6,7,8];
let arr3= [];

function iterarArray(arr) {
  if(arr.length == 0) { 
    throw new Error("O array precisa ter elementos");
  } else {
    for(let i=0;i < arr.length;i++) {
        console.log(i);
    }
  }
}

function arryVazio(arr) {
    if(arr.length > 0) {
        throw new Error("O array não pode ter elementos");
    } else {
        console.log("Agora deu certo");
    }
}

iterarArray(arr);
iterarArray(arr2);
//arryVazio(arr);
arryVazio(arr3);
