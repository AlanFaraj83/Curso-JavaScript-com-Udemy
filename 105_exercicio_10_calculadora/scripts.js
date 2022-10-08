let a = 5;
let b = 4;

let calculadora = {
     
    somar:a + b,
    subtrair:a - b,
    multiplicar: a * b,
    dividir: a / b,
}

console.log(calculadora.somar);
console.log(calculadora.subtrair);
console.log(calculadora.multiplicar);
console.log(calculadora.dividir);

console.log("\n");

const calculadoras = {
    somar:function(a,b) {
        return a + b;
    },
    subtrai:function(a,b) {
        return a - b;
    },
    multiplica:function(a,b) {
        return a * b;
    },
    dividi:function(a,b) {
        return a / b;
    },
    
}

console.log(calculadoras.soma(3,4));
console.log(calculadoras.subtrai(5,3));
console.log(calculadoras.multiplica(8,4));
console.log(calculadoras.dividi(16,2));

