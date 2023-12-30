/* Lista de Consoles (video game) */

// Define uma classe chamada "Consoles" para representar informações sobre consoles de videogame,
// incluindo marca, modelo, ano, cores, tipo de console e uma lista de jogos.
class Consoles {
    constructor(marca, modelo, ano, cores, tipoDeConsole, jogos) {
        this.marca = marca;               // Inicializa a marca do console com o valor passado como argumento.
        this.modelo = modelo;             // Inicializa o modelo do console com o valor passado como argumento.
        this.ano = ano;                   // Inicializa o ano do console com o valor passado como argumento.
        this.cores = cores;               // Inicializa a lista de cores do console com o valor passado como argumento.
        this.tipoDeConsole = tipoDeConsole; // Inicializa o tipo de console com o valor passado como argumento.
        this.jogos = jogos;               // Inicializa a lista de jogos do console com o valor passado como argumento.
    }
}

// Cria um objeto "listaDeConsoles" da classe "Consoles"
// com informações específicas sobre um console de videogame, incluindo marca, modelo, ano, cores e uma lista de jogos.
let listaDeConsoles = new Consoles("Sony", "Playstation 4", 2013, ["azul", "black", "verde"], "Video Game", ["God of War", "The Last of Us", "Uncharted 4"]);

// Define uma função chamada "contarJogosIguais" que recebe um objeto "listaDeConsoles".
function contarJogosIguais(listaDeConsoles) {
    // Itera sobre a lista de jogos do console e imprime cada jogo no console.
    for (let i = 0; i < listaDeConsoles.jogos.length; i++) {
        console.log(listaDeConsoles.jogos[i]);
    }
}

// Chama a função "contarJogosIguais" com o objeto "listaDeConsoles" como argumento
// para imprimir a lista de jogos do console.
contarJogosIguais(listaDeConsoles); // Imprime a lista de jogos neste caso.
