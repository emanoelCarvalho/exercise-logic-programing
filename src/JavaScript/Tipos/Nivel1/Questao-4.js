/*Ponto (em um plano cartesiano)*/

class Ponto {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

function imprimirCoordenadasDoPonto(ponto) {
    console.log('Ponto X = ' + ponto.x, '\n' + 'Ponto Y = ' + ponto.y);
}

let ponto = new Ponto(1, 2);
imprimirCoordenadasDoPonto(ponto);