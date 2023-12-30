/*Cubo*/

// Define uma classe chamada "Cubo" para representar um cubo com um lado específico.
class Cubo {
    constructor(lado) {
        this.lado = lado; // Inicializa o lado do cubo com o valor passado como argumento.
    }
}

// Define uma função chamada "tamanhoDoLadoDoCubo" que recebe um objeto "cubo".
function tamanhoDoLadoDoCubo(cubo) {
    return cubo.lado; // Retorna o tamanho do lado do cubo.
}

// Cria um objeto "cubo" da classe "Cubo" com um lado de comprimento 5 e chama a função "tamanhoDoLadoDoCubo".
console.log(tamanhoDoLadoDoCubo(new Cubo(5))); // Imprime o tamanho do lado do cubo, que é 5 neste caso.
