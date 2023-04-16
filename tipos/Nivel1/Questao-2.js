/*Quadrado*/

class Quadrado {
    constructor(lado) {
        this.lado = lado;
    }
}

let quadrado = new Quadrado(5);
let area = quadrado.lado * quadrado.lado;

function imprimirAreaDoQuadrado(quadrado) {
   console.log(area);
}

imprimirAreaDoQuadrado(quadrado);