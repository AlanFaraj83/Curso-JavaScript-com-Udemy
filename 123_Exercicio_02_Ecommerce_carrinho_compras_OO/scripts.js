class Mercado {
  constructor(itens,quantidadeTotal,valorTotal) {
    this.itens = itens;
    this.quantidadeTotal = quantidadeTotal;
    this.valorTotal = valorTotal;
  }  

  addItem(item) {

    let contador = 0;

    for (let itemMercado in this.itens) {
      if(this.itens[itemMercado].id == item.id ) {
        this.itens[itemMercado].quantidadeTotal += item.quantidadeTotal;
        contador=1;
      }
    }

    if(contador == 0) {
      this.itens.push(item);
    }

    this.quantidadeTotal += item.quantidadeTotal;
    this.valorTotal += item.preco * item.quantidadeTotal;  

  }

  removeItem(item) {

    for (let itemMercado in this.itens) {
      if(this.itens[itemMercado].id == item.id ) {
        
        let obj = this.itens[itemMercado];
        let index = this.itens.findIndex(function(obj) {
          return obj.id == item.id;
        })

        this.quantidadeTotal -= this.itens[itemMercado].quantidadeTotal;
        this.valorTotal -= this.itens[itemMercado].preco * this.itens[itemMercado].quantidadeTotal;

        this.itens.splice(index, 1);

        
      }
    }
  }
}

let carrinho = new Mercado([
  {
    id: 01,
    nome: 'camisa',
    quantidadeTotal:1,
    preco:20
  },

  {
    id: 02,
    nome: 'calça jeans',
    quantidadeTotal:2,
    preco:30
  }
],3,120);

console.log(carrinho);

carrinho.addItem({id:01, nome: "camisa",quantidadeTotal:2, preco:20});

console.log(carrinho);

carrinho.addItem({id:03, nome: "Boné",quantidadeTotal:1, preco:15});

console.log(carrinho);

carrinho.removeItem({id:01, nome:"camisa",quantidadeTotal:2, preco:20});

console.log(carrinho);



