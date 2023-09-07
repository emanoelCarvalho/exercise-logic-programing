/* Lista de Cubos */

// Define uma classe chamada "ListaDeCubos" para representar informações sobre cubos,
// incluindo lado e uma lista de cores.
class ListaDeCubos {
    constructor(lado, cores) {
        this.lado = lado;     // Inicializa o lado do cubo com o valor passado como argumento.
        this.cores = cores;   // Inicializa a lista de cores do cubo com o valor passado como argumento.
    }
}

// Cria dois objetos "listaDeCubos" e "listaDeCubos2" da classe "ListaDeCubos"
// com informações específicas sobre cubos, incluindo lados e listas de cores.
let listaDeCubos = new ListaDeCubos(10, ["azul", "black", "verde"]);
let listaDeCubos2 = new ListaDeCubos(20, ["azul", "vermelho", "verde"]);

// Define uma função chamada "contarCoresIguais" que recebe dois objetos "listaDeCubos" e "listaDeCubos2".
function contarCoresIguais(listaDeCubos, listaDeCubos2) {
    let coresIguais = 0; // Inicializa a variável "coresIguais" com 0 para contar cores iguais.

    // Itera sobre as cores da primeira lista de cubos.
    for (let i = 0; i < listaDeCubos.cores.length; i++) {
        // Itera sobre as cores da segunda lista de cubos.
        for (let j = 0; j < listaDeCubos2.cores.length; j++) {
            // Compara se as cores das duas listas são iguais.
            if (listaDeCubos.cores[i] === listaDeCubos2.cores[j]) {
                coresIguais++; // Incrementa a variável "coresIguais" se as cores forem iguais.
            }
        }
    }

    // Imprime o número de cores iguais no console.
    console.log('O número de cores iguais é: ' + coresIguais);
}

// Chama a função "contarCoresIguais" com os objetos "listaDeCubos" e "listaDeCubos2" como argumentos
// para contar e imprimir o número de cores iguais entre as duas listas de cubos.
contarCoresIguais(listaDeCubos, listaDeCubos2); // Imprime o número de cores iguais entre as duas listas.
