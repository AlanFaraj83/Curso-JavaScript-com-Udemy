function multiplicarTresNumeros(x,y,z) {
    return x * y * z;

}

console.log(multiplicarTresNumeros(2,3,4));

const mult = multiplicarTresNumeros(5,4,8);

console.log("O valor de mult é: " + mult);

console.log("\n");





function multiplicarDoisNumeros (a,b) {

    console.log ( a * b);
}

multiplicarDoisNumeros(5,7);
multiplicarDoisNumeros(5,4);

function podeDirigir(idade,cnh) {

    if (idade >= 18 && cnh == true ) {

        console.log ("Pode dirigir!");
    } else {
        console.log("Não pode dirigir e será atuado!");
    }

}

podeDirigir(18,false);
podeDirigir(38,true);
console.log(podeDirigir(27,false));

console.log("\n");

function zeinDormir(tomarleite, trocarfralda) {

    if (tomarleite == true && trocarfralda == true) {
        console.log ("Zein meu filho pode ir dormir :) !");
    } else {
        console.log ("Zein não pode dormir precisa tomar o leite e trocar a fralda primeiro :|  !");
    }
}

zeinDormir (true,true);
zeinDormir (false,true);
zeinDormir (true,false);
