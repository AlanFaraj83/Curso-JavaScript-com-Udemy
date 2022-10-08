// Rejeitando Promises:

//   Que é quando determinada lógica não satisfaz nosso programa,então
//      podemos ir para outra com reject,em vez do resolve;
//   Resolve e reject terminam a promise,ou seja, não podemos chamar
//      mais o then,por exemplo.


function verificarNumero(num) {
    return new Promise((resolve, reject) => {
        if(num == 2) {
            resolve(console.log(`O numero é ${num}`));
    }   else {
            reject(new Error("falhou"));
        }
    });

}

verificarNumero(2);
verificarNumero(3);