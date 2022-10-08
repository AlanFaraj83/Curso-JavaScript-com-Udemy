class Conta {
  constructor(saldo) {
    this.saldo = saldo;
  }

  deposito(valor) {
    this.saldo += valor;
  }

  saque(valor) {
    this.saldo -= valor;
  }

  
}

let conta = new Conta(1000); // Quanto tenho em minha conta.


conta.deposito(1000); // Valor depositado

console.log(conta.saldo);


conta.saque(500); // Valor sacado.

console.log(conta.saldo);
