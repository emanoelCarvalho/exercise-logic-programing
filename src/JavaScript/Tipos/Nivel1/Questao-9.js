/* Microondas */

// Define uma classe chamada "Microondas" para representar informações sobre um microondas,
// incluindo marca, modelo, cor, preço e potência.
class Microondas {
    constructor(marca, modelo, cor, preco, potencia) {
        this.marca = marca;       // Inicializa a marca do microondas com o valor passado como argumento.
        this.modelo = modelo;     // Inicializa o modelo do microondas com o valor passado como argumento.
        this.cor = cor;           // Inicializa a cor do microondas com o valor passado como argumento.
        this.preco = preco;       // Inicializa o preço do microondas com o valor passado como argumento.
        this.potencia = potencia; // Inicializa a potência do microondas com o valor passado como argumento.
    }
}

// Define uma função chamada "pegarMarcaDoMicroondas" que recebe um objeto "microondas".
function pegarMarcaDoMicroondas(microondas) {
    return microondas.marca; // Retorna a marca do microondas.
}

// Cria um objeto "microondas" da classe "Microondas" com informações específicas,
// incluindo marca "Philco", modelo "PHM 30", cor "Preto", preço 200 e potência "1000W".
let microondas = new Microondas("Philco", "PHM 30", "Preto", 200, "1000W");

// Chama a função "pegarMarcaDoMicroondas" com o objeto "microondas" como argumento
// e imprime a marca do microondas no console.
console.log(pegarMarcaDoMicroondas(microondas));  // Imprime a marca do microondas, que é "Philco".
