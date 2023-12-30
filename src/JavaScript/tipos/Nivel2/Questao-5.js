/* Lista de Carros */

// Define uma classe chamada "ListaDeCarros" para representar informações sobre carros,
// incluindo marca, modelo, ano e uma lista de cores.
class ListaDeCarros {
    constructor(marca, modelo, ano, cores) {
        this.marca = marca;       // Inicializa a marca do carro com o valor passado como argumento.
        this.modelo = modelo;     // Inicializa o modelo do carro com o valor passado como argumento.
        this.ano = ano;           // Inicializa o ano do carro com o valor passado como argumento.
        this.cores = cores;       // Inicializa a lista de cores do carro com o valor passado como argumento.
    }
}

// Cria dois objetos "listaDeCarros" e "listaDeCarros2" da classe "ListaDeCarros"
// com informações específicas sobre carros, incluindo marca, modelo, ano e listas de cores.
let listaDeCarros = new ListaDeCarros("Fiat", "Uno", 2010, ["azul", "black", "verde"]);
let listaDeCarros2 = new ListaDeCarros("Fiat", "Uno", 2010, ["azul", "vermelho", "verde"]);

// Define uma função chamada "contarCoresIguais" que recebe dois objetos "listaDeCarros" e "listaDeCarros2".
function contarCoresIguais(listaDeCarros, listaDeCarros2) {
    let contador = 0; // Inicializa a variável "contador" com 0 para contar cores iguais.

    // Itera sobre as cores da primeira lista de carros.
    for (let i = 0; i < listaDeCarros.cores.length; i++) {
        // Itera sobre as cores da segunda lista de carros.
        for (let j = 0; j < listaDeCarros2.cores.length; j++) {
            // Compara se as cores das duas listas são iguais.
            if (listaDeCarros.cores[i] === listaDeCarros2.cores[j]) {
                contador++; // Incrementa a variável "contador" se as cores forem iguais.
            }
        }
    }

    // Imprime a quantidade de cores iguais no console.
    console.log('A quantidade de cores iguais é: ' + contador);
}

// Chama a função "contarCoresIguais" com os objetos "listaDeCarros" e "listaDeCarros2" como argumentos
// para contar e imprimir a quantidade de cores iguais entre os dois carros.
contarCoresIguais(listaDeCarros, listaDeCarros2); // Imprime a quantidade de cores iguais neste caso.
