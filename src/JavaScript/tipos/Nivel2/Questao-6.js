/* Lista de Fogões */

// Define uma classe chamada "ListaDeFogoes" para representar informações sobre fogões,
// incluindo marca, modelo, ano, cores e uma lista de bocas.
class ListaDeFogoes {
    constructor(marca, modelo, ano, cores, bocas) {
        this.marca = marca;     // Inicializa a marca do fogão com o valor passado como argumento.
        this.modelo = modelo;   // Inicializa o modelo do fogão com o valor passado como argumento.
        this.ano = ano;         // Inicializa o ano do fogão com o valor passado como argumento.
        this.cores = cores;     // Inicializa a lista de cores do fogão com o valor passado como argumento.
        this.bocas = bocas;     // Inicializa a lista de bocas do fogão com o valor passado como argumento.
    }
}

// Cria um objeto "listaDeFogoes" da classe "ListaDeFogoes"
// com informações específicas sobre um fogão, incluindo marca, modelo, ano, cores e uma lista de bocas.
let listaDeFogoes = new ListaDeFogoes("Brastemp", [1, 2, 3, 4], 2010, ["azul", "black", "verde"], 4);

// Define uma função chamada "contarquantidadeDeBocas" que recebe um objeto "listaDeFogoes".
function contarquantidadeDeBocas(listaDeFogoes) {
    let contador = 0; // Inicializa a variável "contador" com 0 para contar a quantidade de bocas.

    // Itera sobre a lista de modelos do fogão para contar a quantidade de bocas.
    for (let i = 0; i < listaDeFogoes.modelo.length; i++) {
        contador++; // Incrementa a variável "contador" para cada modelo de boca encontrado.
    }

    // Imprime a quantidade de bocas no fogão no console.
    console.log('O número de bocas é: ' + contador);
}

// Chama a função "contarquantidadeDeBocas" com o objeto "listaDeFogoes" como argumento
// para contar e imprimir a quantidade de bocas do fogão.
contarquantidadeDeBocas(listaDeFogoes); // Imprime a quantidade de bocas neste caso.
