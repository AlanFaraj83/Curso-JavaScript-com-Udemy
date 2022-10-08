let onibus = {
    rodas: 8,
    limitePassageiros: 40,
    portas: 2,
    buzinar: function() {
        console.log("biiiiiiib, biiiib");
    }
}

console.log(onibus.rodas);
console.log(onibus.limitePassageiros);
console.log(onibus.portas);
onibus.buzinar();
