// Implementar um subprograma que dados dois vetores,
//  retorna qual deles possui a maior soma de seus elementos

function somaVetor(array) {
    let soma = 0;
    for (let i = 0; i < array.length; i++) {
        soma += array[i];
    }
    return soma;
}

function maiorSomaVetor(array1, array2) {
    let somaVetor1 = somaVetor(array1);
    let somaVetor2 = somaVetor(array2);
    let maiorSoma;
    if (somaVetor1 > somaVetor2) {
        maiorSoma = somaVetor1;
    } else {
        maiorSoma = somaVetor2;
    }
    return maiorSoma
}

const array1 = [1, 2, 3];
const array2 = [2, 3, 4];

console.log(maiorSomaVetor(array1, array2));