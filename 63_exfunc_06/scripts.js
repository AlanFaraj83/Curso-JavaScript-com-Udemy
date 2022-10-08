function tipoDeDado(tipo) {
    
    if (typeof tipo === 'string') {
        console.log("Este dado é uma string ");

    } else if (typeof tipo === 'number') {
        console.log("Este dado é um number ");

    } else if (typeof tipo === 'boolean') {
        console.log("Este dado é um boolean");

    }
}
tipoDeDado(true);
tipoDeDado(6);
tipoDeDado(-10);
tipoDeDado(false);
tipoDeDado("Olá beleza");












