/* Móvel (exemplos: sofá, mesa, etc.) */

// Define uma classe chamada "Sofa" para representar informações sobre um sofá,
// incluindo marca, tempo de uso, cor, preço e material.
class Sofa {
    constructor(marca, tempoDeUso, cor, preco, material) {
        this.marca = marca;           // Inicializa a marca do sofá com o valor passado como argumento.
        this.tempoDeUso = tempoDeUso; // Inicializa o tempo de uso do sofá com o valor passado como argumento.
        this.cor = cor;               // Inicializa a cor do sofá com o valor passado como argumento.
        this.preco = preco;           // Inicializa o preço do sofá com o valor passado como argumento.
        this.material = material;     // Inicializa o material do sofá com o valor passado como argumento.
    }
}

// Define uma função chamada "tempoDeSofa" que verifica o tempo de uso do sofá e imprime uma mensagem.
function tempoDeSofa() {
    if (sofa1.tempoDeUso > 5) {
        console.log("Sofá velho"); // Imprime "Sofá velho" se o tempo de uso do sofá for maior que 5 anos.
    } else {
        console.log("Sofá novo");  // Imprime "Sofá novo" se o tempo de uso do sofá for igual ou menor que 5 anos.
    }
}

// Cria um objeto "sofa1" da classe "Sofa" com informações específicas.
let sofa1 = new Sofa("Sofá", 10, "Preto", 200, "Couro");

// Chama a função "tempoDeSofa" para verificar o tempo de uso do sofá "sofa1"
// e imprime uma mensagem indicando se o sofá é novo ou velho com base no tempo de uso.
tempoDeSofa(sofa1); // Imprime "Sofá velho" neste caso, pois o tempo de uso é maior que 5 anos.
