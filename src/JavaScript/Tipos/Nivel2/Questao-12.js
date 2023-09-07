// Lista de Mesa de Trabalho

// Define uma classe chamada "MesaDeTrabalho" para representar informações sobre uma mesa de trabalho,
// incluindo cor, materiais, altura, largura, profundidade e peso.
class MesaDeTrabalho {
    constructor(cor, materiais, altura, largura, profundidade, peso) {
        this.cor = cor;                     // Inicializa a cor da mesa de trabalho com o valor passado como argumento.
        this.materiais = materiais;         // Inicializa a lista de materiais da mesa de trabalho com o valor passado como argumento.
        this.altura = altura;               // Inicializa a altura da mesa de trabalho com o valor passado como argumento.
        this.largura = largura;             // Inicializa a largura da mesa de trabalho com o valor passado como argumento.
        this.profundidade = profundidade;   // Inicializa a profundidade da mesa de trabalho com o valor passado como argumento.
        this.peso = peso;                   // Inicializa o peso da mesa de trabalho com o valor passado como argumento.
    }
}

// Cria um objeto "mesa1" da classe "MesaDeTrabalho" com informações específicas sobre uma mesa de trabalho,
// incluindo cor, materiais, altura, largura, profundidade e peso.
let mesa1 = new MesaDeTrabalho("Branco", ["Madeira", 'Ferro'], 1.20, 1.80, 0.80, 50);

// Define uma função chamada "quantosMateriaisSaoUsados" que recebe um objeto "mesa" e um material como argumento.
function quantosMateriaisSaoUsados(mesa, material) {
    let contador = 0;

    // Itera sobre a lista de materiais da mesa de trabalho.
    for (let i = 0; i < mesa.materiais.length; i++) {
        if (mesa.materiais[i] === material) {
            contador++;
        }
    }

    // Imprime a contagem de quantas vezes o material aparece na lista de materiais da mesa.
    console.log('A mesa de trabalho é feita de ' + contador + ' dos materiais sugeridos');
}

// Chama a função "quantosMateriaisSaoUsados" com o objeto "mesa1" e o nome do material como argumento
// para contar quantas vezes o material especificado aparece na lista de materiais da mesa e imprimir o resultado.
quantosMateriaisSaoUsados(mesa1, "grafite"); // Imprime a contagem de vezes que "grafite" aparece na lista de materiais da mesa.
