
log = [];

function soma(numero1,numero2) {
    resultado = numero1 + numero2;
    datahora = new Date();
    log.unshift([datahora,resultado]);
    return resultado;
}

console.log(soma(2,3));
console.log(soma(20, 32));
console.log(soma(7,9));
console.log(log);
