// Implementar subprograma que retorna a soma todos os elementos de um vetor

// Função para somar todos os elementos de um vetor
function somaVetor(array) {
    let soma = 0; // Inicializa a variável soma com zero
    for (let i = 0; i < array.length; i++) {
        soma += array[i]; // Adiciona cada elemento do vetor à soma
    }
    return soma; // Retorna a soma total
}

// Exemplo de uso da função com um vetor
const array = [1, 2, 3];
console.log(somaVetor(array)); // Imprime a soma dos elementos do vetor [1, 2, 3]
