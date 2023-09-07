// Implementar um subprograma que dados um vetor e um número, 
// multiplica cada elemento do vetor pelo número recebido como parâmetro

// Função para multiplicar cada elemento de um vetor por um número
function multiplicaVetor(numero, array) {
    for (let i = 0; i < array.length; i++) {
        array[i] *= numero; // Multiplica cada elemento pelo número
    }
    console.log(array); // Imprime o vetor resultante
}

// Exemplos de uso da função com diferentes vetores e números
multiplicaVetor(2, [1, 2, 3]); // Multiplica [1, 2, 3] por 2 e imprime o resultado [2, 4, 6]
multiplicaVetor(2, [4, 5, 6]); // Multiplica [4, 5, 6] por 2 e imprime o resultado [8, 10, 12]
