/* Lista de Pontos (em um plano cartesiano) */

// Define uma classe chamada "ListaDePontos" para representar pontos em um plano cartesiano,
// com coordenadas x e y.
class ListaDePontos {
    constructor(x, y) {
        this.x = x;     // Inicializa a coordenada x do ponto com o valor passado como argumento.
        this.y = y;     // Inicializa a coordenada y do ponto com o valor passado como argumento.
    }
}

// Cria dois objetos "listaDePontos" e "listaDePontos2" da classe "ListaDePontos"
// com coordenadas x e y específicas para representar pontos em um plano cartesiano.
let listaDePontos = new ListaDePontos(10, 20);
let listaDePontos2 = new ListaDePontos(20, 30);

// Define uma função chamada "calcularDistancia" que recebe dois objetos "listaDePontos" e "listaDePontos2".
function calcularDistancia(listaDePontos, listaDePontos2) {
    // Calcula a distância euclidiana entre os dois pontos usando o teorema de Pitágoras.
    let distancia = Math.sqrt(Math.pow(listaDePontos.x - listaDePontos2.x, 2) + Math.pow(listaDePontos.y - listaDePontos2.y, 2));
    
    // Imprime a distância entre os pontos no console.
    console.log('A distância entre os pontos é de: ' + distancia);
}

// Chama a função "calcularDistancia" com os objetos "listaDePontos" e "listaDePontos2" como argumentos
// para calcular e imprimir a distância entre os dois pontos em um plano cartesiano.
calcularDistancia(listaDePontos, listaDePontos2); // Imprime a distância entre os pontos neste caso.
