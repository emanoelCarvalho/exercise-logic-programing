/* Lista de Microondas */

class Microondas {
    constructor(marca, modelo, ano, potencia, cores, funcoes) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.potencia = potencia;
        this.cores = cores;
        this.funcoes = funcoes;
    }
}

let listaDeMicroondas = new Microondas("Philco", "PH25M", 2019, "25L", ["preto", "prata"], ["descongelar", "aquecer", "cozinhar"]);
let listaDeMicroondas2 = new Microondas("Philco", "PH25M", 2019, "25L", ["preto", "prata"], ["descongelar", "aquecer", "cozinhar"]);

function peloMenosUmaFuncaoIgual (listaDeMicroondas, listaDeMicroondas2) {
    for (let i = 0; i < listaDeMicroondas.funcoes.length; i++) {
        for (let j = 0; j < listaDeMicroondas2.funcoes.length; j++) {
            if (listaDeMicroondas.funcoes[i] === listaDeMicroondas2.funcoes[j]) {
                console.log("Pelo menos uma função é igual");
                return;
            }
        }
    }
    console.log("Nenhuma função é igual");
}

peloMenosUmaFuncaoIgual(listaDeMicroondas, listaDeMicroondas2);