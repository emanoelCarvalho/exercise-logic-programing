/*Lista de Mesa de Trabalho */

class MesaDeTrabalho {
    constructor(cor, materiais, altura, largura, profundidade, peso) {
        this.cor = cor;
        this.materiais = materiais;
        this.altura = altura;
        this.largura = largura;
        this.profundidade = profundidade;
        this.peso = peso;
    }
}

let mesa1 = new MesaDeTrabalho("Branco", ["Madeira", 'Ferro'], 1.20, 1.80, 0.80, 50);

function quantosMateriaisSaoUsados (mesa1, materiais) {
    let contador = 0;
    for (let i = 0; i < mesa1.materiais.length; i++) {
        if (mesa1.materiais[i] === materiais) {
            contador++;
        }
    }
    console.log('A mesa de trabalho é feita de ' + contador + ' , dos materiais sugeridos');
}

quantosMateriaisSaoUsados(mesa1, "grafite");
