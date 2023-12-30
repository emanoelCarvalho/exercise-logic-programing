// Lista de Materiais Esportivos

// Define uma classe chamada "MateriaisEsportivos" para representar informações sobre materiais esportivos,
// incluindo nome, marca, tipo, peso, tamanho, cores e material.
class MateriaisEsportivos {
    constructor(nome, marca, tipo, peso, tamanho, cores, material) {
        this.nome = nome;               // Inicializa o nome do material esportivo com o valor passado como argumento.
        this.marca = marca;             // Inicializa a marca do material esportivo com o valor passado como argumento.
        this.tipo = tipo;               // Inicializa o tipo do material esportivo com o valor passado como argumento.
        this.peso = peso;               // Inicializa o peso do material esportivo com o valor passado como argumento.
        this.tamanho = tamanho;         // Inicializa o tamanho do material esportivo com o valor passado como argumento.
        this.cores = cores;             // Inicializa a lista de cores do material esportivo com o valor passado como argumento.
        this.material = material;       // Inicializa o material do material esportivo com o valor passado como argumento.
    }
}

// Cria um objeto "bandagem" da classe "MateriaisEsportivos" com informações específicas sobre uma bandagem esportiva.
let bandagem = new MateriaisEsportivos("Bandagem", "Adidas", "Bandagem", 0.1, "P", ["Branco", "Preto"], "Couro");

// Define uma função chamada "quantasCoresSaoUsadas" que recebe um objeto "bandagem" e uma cor como argumento.
function quantasCoresSaoUsadas(bandagem, cor) {
    let contador = 0;

    // Itera sobre a lista de cores da bandagem esportiva.
    for (let i = 0; i < bandagem.cores.length; i++) {
        if (bandagem.cores[i] === cor) {
            contador++;
        }
    }

    // Imprime a contagem de quantas vezes a cor especificada aparece na lista de cores da bandagem.
    console.log('A bandagem é feita de ' + contador + ' das cores sugeridas');
}

// Chama a função "quantasCoresSaoUsadas" com o objeto "bandagem" e o nome da cor como argumento
// para contar quantas vezes a cor especificada aparece na lista de cores da bandagem e imprimir o resultado.
quantasCoresSaoUsadas(bandagem, "Branco"); // Imprime a contagem de vezes que "Branco" aparece na lista de cores da bandagem.
