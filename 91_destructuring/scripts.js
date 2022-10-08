// Destructuring com objetos: Podemos definir variáveis com propriedades do objeto com uma notação diferente,chamada destructuring.

const person = {
    name: 'Alan',
    lastName: ' Faraj'
}

const { name:fname, lastName:lname} = person;

console.log(fname + lname);

let obj = {
    rodas: 4,
    portas: 4,
    tetosolar: true,
    motor: '2.0'
}

const { rodas: vRodas, portas: vPortas, tetosolar:vTetosolar,motor:vMotor} = obj;

console.log(vRodas);
console.log(vPortas);
console.log(vTetosolar);
console.log(vMotor);
