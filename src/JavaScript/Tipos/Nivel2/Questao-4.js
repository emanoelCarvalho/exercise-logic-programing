/* Lista de Pontos (em um plano cartesiano) */

class ListaDePontos {
    constructor (x, y) {
        this.x = x;
        this.y = y;
    }
}

let listaDePontos = new ListaDePontos(10, 20);
let listaDePontos2 = new ListaDePontos(20, 30);


function calcularDistancia(listaDePontos, listaDePontos2) {
    let distancia = Math.sqrt(Math.pow(listaDePontos.x - listaDePontos2.x, 2) + Math.pow(listaDePontos.y - listaDePontos2.y, 2));
    console.log('A distância entre os pontos é de : ' + distancia);
}

calcularDistancia(listaDePontos, listaDePontos2);