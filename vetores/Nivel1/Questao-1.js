// Implementar subprograma que retorna a soma todos os elementos de um vetor

function somaVetor(array) {
    let soma = 0;
    for (let i = 0; i < array.length; i++) {
        soma += array[i];
    }
    return soma;
}

const array = [1, 2, 3];
console.log(somaVetor(array));