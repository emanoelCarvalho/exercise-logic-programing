// Implementar um subprograma que dado um vetor de booleans, 
// retorna true se ao menos um dos elementos do vetor for verdadeiro ou
//  false, caso contrário

function contarVerdadeirosDoVetor(array) {
    // Loop para percorrer todos os elementos do vetor.
    for (let i = 0; i < array.length; i++) {
        if (array[i] === true) { // Verifica se o elemento atual é verdadeiro.
            return true; // Retorna true assim que encontrar um elemento verdadeiro.
        }
    }
    return false; // Retorna false se nenhum elemento verdadeiro for encontrado.
}

const array = [false, false, false]; // Exemplo de vetor de booleanos.
console.log(contarVerdadeirosDoVetor(array)); // Chamada da função e impressão do resultado no console.
