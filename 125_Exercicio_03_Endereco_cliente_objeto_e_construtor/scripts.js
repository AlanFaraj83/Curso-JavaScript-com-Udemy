class EnderecoCliente {
    constructor(Rua,Bairro,Cidade,Estado) {
        this.Rua = Rua;
        this.Bairro = Bairro;
        this.Cidade = Cidade;
        this.Estado = Estado;
    }

    get verEnderecoCliente() {
        return 'O endereço do cliente é: ' + this.Rua + ' Bairro: ' + this.Bairro + ' na Cidade: ' + this.Cidade + ' Estado: ' + this.Estado;


    }

    set novoEnderecoCliente(value) {
        this.Rua = value;
        this.Bairro = value;
        this.Cidade = value;
        this.Estado = value;
    }
}

let enderecoCompletoCliente = new EnderecoCliente('Rua Tucuruvi,100','Tremembé', 'São Paulo','SP');
console.log(enderecoCompletoCliente.verEnderecoCliente);
let enderecoCompletoCliente2 = new EnderecoCliente('Rua Oriente,200','Brás','São Paulo','Sp');
console.log(enderecoCompletoCliente2.verEnderecoCliente);



console.log('\n');




class Endereco {
    constructor(rua,bairro,cidade,estado) {
        this.rua = rua;
        this.bairro = bairro;
        this.cidade = cidade;
        this.estado = estado;
    }

    get mostrarEnderecoCliente() {
        return 'O endereço do cliente é: ' + this.rua + ' Bairro: ' + this.bairro + ' na Cidade: ' + this.cidade + ' Estado: ' + this.estado;


    }


    set novaRua(novaRua) {
        this.rua = novaRua;
    }

    set novoBairro(novoBairro) {
        this.bairro = novoBairro;
    }

    set novaCidade(novaCidade) {
        this.cidade = novaCidade;
    }

    set novoEstado(novoEstado) {
        this.estado = novoEstado;
    }

    

}

let endereco = new Endereco('Rua das Gaivotas', 'Terrario', 'São Joaquim', 'SC');
console.log(endereco.mostrarEnderecoCliente);

endereco.novaRua = 'Avenida Nossa Senhora';
endereco.novoBairro = 'Copacabana';
endereco.novaCidade ='Rio de Janeiro';
endereco.novoEstado ='RJ';
console.log(endereco.mostrarEnderecoCliente);





