// Implementar um subprograma que retorna a quantidade de elementos pares em um vetor;

// Função para contar a quantidade de elementos pares em um vetor
function quantidadeDePares(array) {
    let contador = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) { // Verifica se o elemento é par
            contador++; // Incrementa o contador se for par
        }
    }
    return contador; // Retorna a quantidade de pares encontrados
}

// Vetor de exemplo
let array = [1, 1, 1, 1, 1, 2, 3];

// Chamada da função para contar elementos pares no vetor
console.log(quantidadeDePares(array)); // Imprime o resultado (neste caso, 1)
