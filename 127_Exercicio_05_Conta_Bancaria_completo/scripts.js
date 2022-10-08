class ContaBancaria {
    constructor(saldoCorrente,saldoPoupanca,jurosPoupanca) {
        this.saldoCorrente = saldoCorrente;
        this.saldoPoupanca = saldoPoupanca;
        this.jurosPoupanca = jurosPoupanca;

    }
    
    deposito(valor) {
        this.saldoCorrente += valor;

    }

    saque(valor) {
        this.saldoCorrente -= valor;
    }

    transferenciaCP(valor) {
        this.saldoCorrente -= valor;
        this.saldoPoupanca += valor;
    }

    transferenciaCC(valor) {
        this.saldoPoupanca -= valor;
        this.saldoCorrente += valor;
    }

    jurosDeAniversario() {
        let jurosPoupanca = (this.saldoPoupanca * this.jurosPoupanca) / 100;
        this.saldoPoupanca += jurosPoupanca;
    }
}

class ContaEspecial extends ContaBancaria {
    constructor(saldoCorrente,saldoPoupanca,jurosPoupanca) {
        super(saldoCorrente,saldoPoupanca,jurosPoupanca *2)
    }
}

let contabancaria = new ContaBancaria(1000,5000,1);

console.log(contabancaria);

contabancaria.saque(500);

console.log(contabancaria);

contabancaria.deposito(5000);

console.log(contabancaria);

contabancaria.transferenciaCP(3000);
console.log(contabancaria);

contabancaria.jurosDeAniversario();
console.log(contabancaria);

let conta2 = new ContaEspecial(10000,50000,1);
console.log(conta2);

conta2.saque(5000);
console.log(conta2);

conta2.jurosDeAniversario();
console.log(conta2);

