// Este código implementa o algoritmo de ordenação Bubble Sort para ordenar um array de números. 

// Função para ordenar um array usando o algoritmo Bubble Sort
function ordenarArray(array) {
    // Percorre o array várias vezes
    for (let i = 0; i < array.length; i++) {
        // Compara elementos adjacentes e os troca se estiverem fora de ordem
        for (let j = 0; j < array.length; j++) {
            if (array[i] < array[j]) {
                // Troca os elementos de posição
                let ordenando = array[i];
                array[i] = array[j];
                array[j] = ordenando;
            }
        }
    }
    // Retorna o array ordenado
    return array;
}

// Array de exemplo
let array = [5, 3, 2, 4, 7, 1, 0, 6];

// Chama a função para ordenar o array
console.log(ordenarArray(array));
