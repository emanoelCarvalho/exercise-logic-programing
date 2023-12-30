/*Ponto (em um plano cartesiano)*/

// Define uma classe chamada "Ponto" para representar um ponto com coordenadas x e y.
class Ponto {
    constructor(x, y) {
        this.x = x; // Inicializa a coordenada x do ponto com o valor passado como argumento.
        this.y = y; // Inicializa a coordenada y do ponto com o valor passado como argumento.
    }
}

// Define uma função chamada "imprimirCoordenadasDoPonto" que recebe um objeto "ponto".
function imprimirCoordenadasDoPonto(ponto) {
    console.log('Ponto X = ' + ponto.x); // Imprime a coordenada x do ponto.
    console.log('Ponto Y = ' + ponto.y); // Imprime a coordenada y do ponto.
}

// Cria um objeto "ponto" da classe "Ponto" com coordenadas x = 1 e y = 2.
let ponto = new Ponto(1, 2);

// Chama a função "imprimirCoordenadasDoPonto" com o objeto "ponto" como argumento para imprimir suas coordenadas.
imprimirCoordenadasDoPonto(ponto);
