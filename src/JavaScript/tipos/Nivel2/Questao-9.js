/* Lista de Microondas */

// Define uma classe chamada "Microondas" para representar informações sobre micro-ondas,
// incluindo marca, modelo, ano, potência, cores e funções.
class Microondas {
    constructor(marca, modelo, ano, potencia, cores, funcoes) {
        this.marca = marca;               // Inicializa a marca do micro-ondas com o valor passado como argumento.
        this.modelo = modelo;             // Inicializa o modelo do micro-ondas com o valor passado como argumento.
        this.ano = ano;                   // Inicializa o ano do micro-ondas com o valor passado como argumento.
        this.potencia = potencia;         // Inicializa a potência do micro-ondas com o valor passado como argumento.
        this.cores = cores;               // Inicializa a lista de cores do micro-ondas com o valor passado como argumento.
        this.funcoes = funcoes;           // Inicializa a lista de funções do micro-ondas com o valor passado como argumento.
    }
}

// Cria dois objetos "listaDeMicroondas" e "listaDeMicroondas2" da classe "Microondas"
// com informações específicas sobre micro-ondas, incluindo marca, modelo, ano, potência, cores e listas de funções.
let listaDeMicroondas = new Microondas("Philco", "PH25M", 2019, "25L", ["preto", "prata"], ["descongelar", "aquecer", "cozinhar"]);
let listaDeMicroondas2 = new Microondas("Philco", "PH25M", 2019, "25L", ["preto", "prata"], ["descongelar", "aquecer", "cozinhar"]);

// Define uma função chamada "peloMenosUmaFuncaoIgual" que recebe dois objetos "listaDeMicroondas" e "listaDeMicroondas2".
function peloMenosUmaFuncaoIgual(listaDeMicroondas, listaDeMicroondas2) {
    // Itera sobre a lista de funções do primeiro micro-ondas.
    for (let i = 0; i < listaDeMicroondas.funcoes.length; i++) {
        // Itera sobre a lista de funções do segundo micro-ondas.
        for (let j = 0; j < listaDeMicroondas2.funcoes.length; j++) {
            // Compara se pelo menos uma função é igual entre os dois micro-ondas.
            if (listaDeMicroondas.funcoes[i] === listaDeMicroondas2.funcoes[j]) {
                console.log("Pelo menos uma função é igual");
                return;
            }
        }
    }
    console.log("Nenhuma função é igual");
}

// Chama a função "peloMenosUmaFuncaoIgual" com os objetos "listaDeMicroondas" e "listaDeMicroondas2" como argumentos
// para verificar se pelo menos uma função é igual entre os dois micro-ondas e imprimir o resultado.
peloMenosUmaFuncaoIgual(listaDeMicroondas, listaDeMicroondas2); // Imprime se pelo menos uma função é igual neste caso.
