/*Lista materiais esportivos */

class MateriaisEsportivos {
    constructor(nome, marca, tipo, peso, tamanho, cores, material) {
        this.nome = nome;
        this.marca = marca;
        this.tipo = tipo;
        this.peso = peso;
        this.tamanho = tamanho;
        this.cores = cores;
        this.material = material;
    }
}

//faça um objeto bandagem
let bandagem = new MateriaisEsportivos("Bandagem", "Adidas", "Bandagem", 0.1, "P", ["Branco", "Preto"], "Couro");

function quantasCoresSaoUsadas (bandagem, cores) {
    let contador = 0;
    for (let i = 0; i < bandagem.cores.length; i++) {
        if (bandagem.cores[i] === cores) {
            contador++;
        }
    }
    console.log('A bandagem é feita de ' + contador + ', das cores sugeridas');
}

quantasCoresSaoUsadas(bandagem, "Branco");