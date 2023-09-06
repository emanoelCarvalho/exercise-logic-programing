/* Lista de Consoles (video game) */

class Consoles {
    constructor(marca, modelo, ano, cores, tipoDeConsole, jogos) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.cores = cores;
        this.tipoDeConsole = tipoDeConsole;
        this.jogos = jogos;
    }
}

let listaDeConsoles = new Consoles("Sony", "Playstation 4", 2013, ["azul", "black", "verde"], "Video Game", ["God of War", "The Last of Us", "Uncharted 4"]);

function contarJogosIguais(listaDeConsoles) {
    for (let i = 0; i < listaDeConsoles.jogos.length; i++) {
        console.log(listaDeConsoles.jogos[i]);
    }
}

contarJogosIguais(listaDeConsoles);