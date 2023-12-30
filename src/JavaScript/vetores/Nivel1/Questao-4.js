// Implementar um subprograma que retorna a quantidade de elementos ímpares em um vetor

// Função para contar a quantidade de elementos ímpares em um vetor
function quantidadeDeImpares(array) {
    let contador = 0; // Inicializa o contador com zero

    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 !== 0) { // Verifica se o elemento é ímpar
            contador++; // Incrementa o contador se for ímpar
        }
    }
    return contador; // Retorna a quantidade de ímpares encontrados
}

// Vetor de exemplo
let array = [1, 1, 1, 1, 1, 2, 3];

// Chamada da função para contar elementos ímpares no vetor
console.log(quantidadeDeImpares(array)); // Imprime o resultado (neste caso, 4)
