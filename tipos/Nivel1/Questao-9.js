/* Microondas*/


class Microondas {
    constructor(marca, modelo, cor, preco, potencia) {
        this.marca = marca;
        this.modelo = modelo;
        this.cor = cor;
        this.preco = preco;
        this.potencia = potencia;
    }
}

function pegarMarcaDoMicroondas(microondas) {
    return microondas.marca;
}

console.log(pegarMarcaDoMicroondas(new Microondas("Philco", "PHM 30", "Preto", 200, "1000W")));