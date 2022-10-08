let idade = 18;
let cnh = true;

if ((idade > 18) && (cnh != true)) {

    console.log("Não pode dirigir pois não possui CNH!");

} else if ((idade >= 18) && (cnh == true)) {

    console.log ("Pode dirigir pois tem documentação todo regularizado!");


} else {

    console.log("Não pode dirigir e será atuado e carro apreendido!");

}