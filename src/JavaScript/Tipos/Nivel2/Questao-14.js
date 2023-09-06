/*Lista de Países */

class Paises {
    constructor(nome, capital, idiomas, continente, populacao, moeda, bandeira) {
        this.nome = nome;
        this.capital = capital;
        this.idiomas = idiomas;
        this.continente = continente;
        this.populacao = populacao;
        this.moeda = moeda;
        this.bandeira = bandeira;
    }
}


let pais1 = new Paises("Brasil", "Brasília", ["Português", "Inglês"], "América do Sul", 210147125, "Real", "https://upload.wikimedia.org/wikipedia/commons/0/05/Flag_of_Brazil.svg");
let pais2 = new Paises("Argentina", "Buenos Aires", ["Espanhol", "Inglês"], "América do Sul", 44271041, "Peso", "https://upload.wikimedia.org/wikipedia/commons/1/1a/Flag_of_Argentina.svg");
let pais3 = new Paises("Chile", "Santiago", ["Espanhol", "Inglês"], "América do Sul", 18054726, "Peso", "https://upload.wikimedia.org/wikipedia/commons/7/78/Flag_of_Chile.svg");

function quantosPaisesTemUmIdioma (pais1, pais2, pais3, idioma) {
    let contador = 0;
    if (pais1.idiomas.includes(idioma)) {
        contador++;
    }
    if (pais2.idiomas.includes(idioma)) {
        contador++;
    }
    if (pais3.idiomas.includes(idioma)) {
        contador++;
    }
    console.log('Existem ' + contador + ' países que falam o idioma ' + idioma);
}

quantosPaisesTemUmIdioma(pais1, pais2, pais3, "Inglês");