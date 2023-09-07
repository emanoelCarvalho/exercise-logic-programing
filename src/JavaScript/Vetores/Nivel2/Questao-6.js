// Implementar um subprograma que dado um vetor de booleans, 
// retorna true se todos os elementos do vetor forem verdadeiros ou
//  false, caso contrário

function todosElementosTrue(array) {
    let verdadeiro = true; // Inicializa a variável verdadeiro como true.

    // Loop para percorrer todos os elementos do vetor.
    for (let i = 0; i < array.length; i++) {
        if (array[i] === false) { // Verifica se o elemento atual é falso.
            verdadeiro = false; // Define verdadeiro como false se encontrar um false.
            break; // Sai do loop assim que encontrar um false, pois não é mais possível que todos sejam verdadeiros.
        }
    }
    return verdadeiro; // Retorna o valor de verdadeiro, que será true se todos os elementos forem true e false caso contrário.
}

const array = [true, true, false, true, true]; // Exemplo de vetor de booleanos.
console.log(todosElementosTrue(array)); // Chamada da função e impressão do resultado no console.
