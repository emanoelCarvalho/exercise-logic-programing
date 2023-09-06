/* País*/

class Pais {
    constructor(nome, continente, populacao, capital, idioma) {
        this.nome = nome;
        this.continente = continente;
        this.populacao = populacao;
        this.capital = capital;
        this.idioma = idioma;
    }

}


function paizesDoMesmoContinente(pais1, pais2) {
    if (pais1.continente === pais2.continente) {
        console.log("Os países são do mesmo continente");
    } else {
        console.log("Os países são de continentes diferentes");
    }
}

let pais1 = new Pais("Brasil", "América do Sul", 200000000, "Brasília", "Português");
let pais2 = new Pais("Argentina", "América do Sul", 40000000, "Buenos Aires", "Espanhol");

paizesDoMesmoContinente(pais1, pais2);