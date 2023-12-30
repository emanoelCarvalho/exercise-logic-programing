/*Console (video game) */

// Define uma classe chamada "Console" para representar informações sobre um console de video game,
// incluindo marca, modelo, cor, preço e uma lista de jogos.
class Console {
    constructor(marca, modelo, cor, preco, jogos) {
        this.marca = marca;     // Inicializa a marca do console com o valor passado como argumento.
        this.modelo = modelo;   // Inicializa o modelo do console com o valor passado como argumento.
        this.cor = cor;         // Inicializa a cor do console com o valor passado como argumento.
        this.preco = preco;     // Inicializa o preço do console com o valor passado como argumento.
        this.jogos = jogos;     // Inicializa a lista de jogos do console com o valor passado como argumento.
    }
}

// Define uma função anônima chamada "consoleX" que cria e retorna um objeto da classe "Console"
// com valores específicos para a marca, modelo, cor, preço e lista de jogos.
let consoleX = () => { 
    let console = new Console("Xbox", "One", "Preto", 2000, ["GTA", "Fifa", "PES"]);
    return console;
}

// Chama a função "consoleX" para criar um objeto do console e imprime esse objeto no console.
console.log(consoleX());  // Imprime o objeto criado representando o console Xbox One.
