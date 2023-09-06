/* Lista de Fogões*/

class ListaDeFogoes {
    constructor (marca, modelo, ano, cores, bocas, tipoDeFogao) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.cores = cores;
        this.bocas = bocas;
    }
}

let listaDeFogoes = new ListaDeFogoes("Brastemp", [1,2,3,4], 2010, ["azul", "black", "verde"], 4);

function contarquantidadeDeBocas(listaDeFogoes) {
    let contador = 0;
    for (let i = 0; i < listaDeFogoes.modelo.length; i++) {
       contador++;
    }
    console.log('O número de bocas é: ' + contador);
}

contarquantidadeDeBocas(listaDeFogoes);