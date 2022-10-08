// Tratamento de input por função:
//  Não podemos controlar os dados que o usuário enviar,então para 
//  o bom funcionamento do software,devemos tratar eles;

// Exemplo de tratamento de number:

function checarNumero(num) {
    let number = Number(num);
    if(Number.isNaN(number)) {
        alert("Por favor, passe só números para o programa");

    } else {
        return number;
    }

}

// checarNumero(5);
//checarNumero('sadh');

let number = prompt("Digite um número: ");
checarNumero(number);