/*Cubo*/

class Cubo {
    constructor(lado) {
        this.lado = lado;
    }
}

function tamanhoDoLadoDoCubo(cubo) {
    return cubo.lado;
}

console.log(tamanhoDoLadoDoCubo(new Cubo(5)));