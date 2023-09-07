// Implementar um subprograma que dado um vetor e um número,
//  subtraí o número de todos os elementos do vetor

// Função para subtrair um número de todos os elementos de um vetor
function subtrairVetor(array, numero) {
    for (let i = 0; i < array.length; i++) {
        array[i] -= numero; // Subtrai o número de cada elemento do vetor
    }
    console.log(array); // Imprime o vetor após a subtração
}

// Vetor de exemplo e número a ser subtraído
let array = [10, 20, 30];
let numero = 2;

// Chamada da função para subtrair o número do vetor
subtrairVetor(array, numero);
