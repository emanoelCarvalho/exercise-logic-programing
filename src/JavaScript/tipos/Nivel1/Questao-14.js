/* País */

// Define uma classe chamada "Pais" para representar informações sobre um país,
// incluindo nome, continente, população, capital e idioma.
class Pais {
    constructor(nome, continente, populacao, capital, idioma) {
        this.nome = nome;                 // Inicializa o nome do país com o valor passado como argumento.
        this.continente = continente;     // Inicializa o continente do país com o valor passado como argumento.
        this.populacao = populacao;       // Inicializa a população do país com o valor passado como argumento.
        this.capital = capital;           // Inicializa a capital do país com o valor passado como argumento.
        this.idioma = idioma;             // Inicializa o idioma do país com o valor passado como argumento.
    }
}

// Define uma função chamada "paizesDoMesmoContinente" que verifica se dois países
// pertencem ao mesmo continente e imprime uma mensagem correspondente.
function paizesDoMesmoContinente(pais1, pais2) {
    if (pais1.continente === pais2.continente) {
        console.log("Os países são do mesmo continente"); // Imprime a mensagem se os países pertencerem ao mesmo continente.
    } else {
        console.log("Os países são de continentes diferentes"); // Imprime a mensagem se os países pertencerem a continentes diferentes.
    }
}

// Cria dois objetos "pais1" e "pais2" da classe "Pais" com informações específicas.
let pais1 = new Pais("Brasil", "América do Sul", 200000000, "Brasília", "Português");
let pais2 = new Pais("Argentina", "América do Sul", 40000000, "Buenos Aires", "Espanhol");

// Chama a função "paizesDoMesmoContinente" com os objetos "pais1" e "pais2" como argumentos
// e imprime uma mensagem indicando se os países pertencem ao mesmo continente ou a continentes diferentes.
paizesDoMesmoContinente(pais1, pais2); // Imprime "Os países são do mesmo continente" neste caso, pois ambos pertencem à América do Sul.
