// Try e catch: O bloco try catch, vai tentar executar um código,caso não consiga
//   ele pode retornar o erro que esse código gerou;
// Muito útil para debug;

// Exemplo de Try e catch:
//let b = 2;
try {
    let a = 2 + b;

} catch (e) {
    console.log(e);
    //throw new Error(e);
}

console.log('teste');

