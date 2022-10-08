class Carro {
    constructor(marca,modelo,cor,gasolinaCobrado,consumo) {
        this.marca = marca;
        this.modelo = modelo;
        this.cor = cor;
        this.gasolinaCobrado = gasolinaCobrado;
        this.consumo = consumo;
    }

    dirigir(km) {
        let litrosConsumidos = km /this.consumo;

        this.gasolinaCobrado -= litrosConsumidos;
    }

    abastecer(l) {

        this.gasolinaCobrado += l;

    }
}

let carro = new Carro('Caoa Chery','Tiggo 8','Preto',100,14);

console.log(carro);

carro.dirigir(100);

console.log(carro);

carro.abastecer(10);
console.log(carro);