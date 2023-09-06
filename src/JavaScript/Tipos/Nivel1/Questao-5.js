/*Carro*/

class Carro {
    constructor(marca, ano, cor) {
        this.marca = marca;
        this.ano = ano;
        this.cor = cor;
    }
}

function pegarMarcaDoCarro(carro) {
    return carro.marca;
}

console.logO(pegarMarcaDoCarro(new Carro("Fiat", 2010, "Preto")));