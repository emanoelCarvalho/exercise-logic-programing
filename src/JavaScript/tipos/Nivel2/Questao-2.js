/* Lista de Quadrados */

// Define uma classe chamada "ListaDeQuadrados" para representar informações sobre quadrados,
// incluindo lado e uma lista de cores.
class ListaDeQuadrados {
    constructor(lado, cores) {
        this.lado = lado;     // Inicializa o lado do quadrado com o valor passado como argumento.
        this.cores = cores;   // Inicializa a lista de cores do quadrado com o valor passado como argumento.
    }
}

// Cria dois objetos "listaDeQuadrados" e "listaDeQuadrados2" da classe "ListaDeQuadrados"
// com informações específicas sobre quadrados, incluindo lados e listas de cores.
let listaDeQuadrados = new ListaDeQuadrados(10, ["azul", "black", "verde"]);
let listaDeQuadrados2 = new ListaDeQuadrados(20, ["azul", "vermelho", "verde"]);

// Define uma função chamada "contarCoresIguais" que recebe dois objetos "listaDeQuadrados" e "listaDeQuadrados2".
function contarCoresIguais(listaDeQuadrados, listaDeQuadrados2) {
    let coresIguais = 0; // Inicializa a variável "coresIguais" com 0 para contar cores iguais.

    // Itera sobre as cores da primeira lista de quadrados.
    for (let i = 0; i < listaDeQuadrados.cores.length; i++) {
        // Itera sobre as cores da segunda lista de quadrados.
        for (let j = 0; j < listaDeQuadrados2.cores.length; j++) {
            // Compara se as cores das duas listas são iguais.
            if (listaDeQuadrados.cores[i] === listaDeQuadrados2.cores[j]) {
                coresIguais++; // Incrementa a variável "coresIguais" se as cores forem iguais.
            }
        }
    }
    
    // Imprime o número de cores iguais no console.
    console.log('O número de cores iguais é: ' + coresIguais);
}

// Chama a função "contarCoresIguais" com os objetos "listaDeQuadrados" e "listaDeQuadrados2" como argumentos
// para contar e imprimir o número de cores iguais entre as duas listas de quadrados.
contarCoresIguais(listaDeQuadrados, listaDeQuadrados2); // Imprime o número de cores iguais entre as duas listas.
