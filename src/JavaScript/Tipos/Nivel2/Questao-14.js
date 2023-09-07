// Lista de Países

// Define uma classe chamada "Paises" para representar informações sobre países,
// incluindo nome, capital, idiomas, continente, população, moeda e bandeira.
class Paises {
    constructor(nome, capital, idiomas, continente, populacao, moeda, bandeira) {
        this.nome = nome;               // Inicializa o nome do país com o valor passado como argumento.
        this.capital = capital;         // Inicializa a capital do país com o valor passado como argumento.
        this.idiomas = idiomas;         // Inicializa a lista de idiomas falados no país com o valor passado como argumento.
        this.continente = continente;   // Inicializa o continente do país com o valor passado como argumento.
        this.populacao = populacao;     // Inicializa a população do país com o valor passado como argumento.
        this.moeda = moeda;             // Inicializa a moeda do país com o valor passado como argumento.
        this.bandeira = bandeira;       // Inicializa a URL da bandeira do país com o valor passado como argumento.
    }
}

// Cria objetos representando três países diferentes.
let pais1 = new Paises("Brasil", "Brasília", ["Português", "Inglês"], "América do Sul", 210147125, "Real", "https://upload.wikimedia.org/wikipedia/commons/0/05/Flag_of_Brazil.svg");
let pais2 = new Paises("Argentina", "Buenos Aires", ["Espanhol", "Inglês"], "América do Sul", 44271041, "Peso", "https://upload.wikimedia.org/wikipedia/commons/1/1a/Flag_of_Argentina.svg");
let pais3 = new Paises("Chile", "Santiago", ["Espanhol", "Inglês"], "América do Sul", 18054726, "Peso", "https://upload.wikimedia.org/wikipedia/commons/7/78/Flag_of_Chile.svg");

// Define uma função chamada "quantosPaisesTemUmIdioma" que recebe três objetos de país e um idioma como argumentos.
function quantosPaisesTemUmIdioma(pais1, pais2, pais3, idioma) {
    let contador = 0;

    // Verifica se cada país da lista fala o idioma especificado.
    if (pais1.idiomas.includes(idioma)) {
        contador++;
    }
    if (pais2.idiomas.includes(idioma)) {
        contador++;
    }
    if (pais3.idiomas.includes(idioma)) {
        contador++;
    }

    // Imprime a contagem de países que falam o idioma especificado.
    console.log('Existem ' + contador + ' países que falam o idioma ' + idioma);
}

// Chama a função "quantosPaisesTemUmIdioma" com os objetos de países e o idioma como argumento
// para contar quantos países na lista falam o idioma especificado e imprimir o resultado.
quantosPaisesTemUmIdioma(pais1, pais2, pais3, "Inglês"); // Imprime a contagem de países que falam "Inglês".
