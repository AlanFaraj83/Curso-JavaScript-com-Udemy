function armazenarSoma(x) {
    return y => x + y;
}

let soma1 = armazenarSoma(3);
console.log(soma1(5));


let soma2 = armazenarSoma(6);
console.log(soma2(10));




function armazenarSubtrair(x) {
    return y => x - y
}

let subtrair1 = armazenarSubtrair(10);
console.log(subtrair1(6));





function lembrarSoma(x) {
    return function(y) {
        return x + y;
    }
}

let somando1 = lembrarSoma(3);
console.log(somando1(6));




function lembrarMult(x) {
    return function(y) {
        return x * y;
    }

}

let mult1 = lembrarMult(4);
console.log(mult1(8));

let mult2 = lembrarMult(4);
console.log(mult2(9));


function contador(i) {
    let cont = i;
    let somarContador = function() {
        console.log(cont);
        cont++;
    }
    return somarContador;
}

let meuContador = contador(1);
meuContador();
meuContador();
meuContador();
meuContador();
meuContador();
