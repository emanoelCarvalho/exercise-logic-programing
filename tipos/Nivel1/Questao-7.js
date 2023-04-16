/*Console (video game) */

class Console {
    constructor(marca, modelo, cor, preco , jogos) {
        this.marca = marca;
        this.modelo = modelo;
        this.cor = cor;
        this.preco = preco;
        this.jogos = jogos;
    }
}

let consoleX = () => { 
    let console = new Console("Xbox", "One", "Preto", 2000, ["GTA", "Fifa", "PES"]);
    return console;
}
console.log(consoleX());