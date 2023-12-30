/*Quadrado*/

// Define uma classe chamada "Quadrado" para representar um quadrado com um lado.
class Quadrado {
    constructor(lado) {
        this.lado = lado; // Inicializa o lado do quadrado com o valor passado como argumento.
    }
}

// Cria um objeto "quadrado" da classe Quadrado com um lado de comprimento 5.
let quadrado = new Quadrado(5);

// Calcula a área do quadrado multiplicando o lado pelo próprio lado.
let area = quadrado.lado * quadrado.lado;

// Define uma função chamada "imprimirAreaDoQuadrado" que recebe um objeto "quadrado".
function imprimirAreaDoQuadrado(quadrado) {
   console.log(area); // Imprime a área calculada do quadrado.
}

// Chama a função "imprimirAreaDoQuadrado" com o objeto "quadrado" como argumento.
imprimirAreaDoQuadrado(quadrado);
