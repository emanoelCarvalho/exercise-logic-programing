/*Carro*/

// Define uma classe chamada "Carro" para representar informações sobre carros.
class Carro {
    constructor(marca, ano, cor) {
        this.marca = marca; // Inicializa a marca do carro com o valor passado como argumento.
        this.ano = ano;     // Inicializa o ano do carro com o valor passado como argumento.
        this.cor = cor;     // Inicializa a cor do carro com o valor passado como argumento.
    }
}

// Define uma função chamada "pegarMarcaDoCarro" que recebe um objeto "carro".
function pegarMarcaDoCarro(carro) {
    return carro.marca; // Retorna a marca do carro.
}

// Cria um objeto "carro" da classe "Carro" com marca "Fiat", ano 2010 e cor "Preto".
let carro = new Carro("Fiat", 2010, "Preto");

// Chama a função "pegarMarcaDoCarro" com o objeto "carro" como argumento e imprime a marca do carro no console.
console.log(pegarMarcaDoCarro(carro));
