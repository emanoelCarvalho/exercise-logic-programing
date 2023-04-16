/* Lista de Carros */

class ListaDeCarros {
    constructor(marca, modelo, ano, cores) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.cores = cores;
    }
}

let listaDeCarros = new ListaDeCarros("Fiat", "Uno", 2010, ["azul", "black", "verde"]);
let listaDeCarros2 = new ListaDeCarros("Fiat", "Uno", 2010, ["azul", "vermelho", "verde"]);

function contarCoresIguais(listaDeCarros, listaDeCarros2) {
    let contador = 0;
    for (let i = 0; i < listaDeCarros.cores.length; i++) {
        for (let j = 0; j < listaDeCarros2.cores.length; j++) {
            if (listaDeCarros.cores[i] === listaDeCarros2.cores[j]) {
                contador++;
            }
        }
    }
    console.log('A quantidade de cores iguais é: ' + contador);
}


contarCoresIguais(listaDeCarros, listaDeCarros2);