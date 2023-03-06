// Implementar um subprograma que dado um vetor e um número,
//  subtraí o número de todos os elementos do vetor

function subtrairVetor(array, numero) {
    for (let i = 0; i < array.length; i++) {
        array[i] -= numero;
    }
    console.log(array);
}

let array = [10, 20, 30];
let numero = 2;

subtrairVetor(array, numero);