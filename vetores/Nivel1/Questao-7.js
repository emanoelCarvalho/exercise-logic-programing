// Implementar um subprograma que dado um vetor e um número, 
// divide todos os elementos do vetor pelo número


function dividirVetor(array, numero) {
    for (let i = 0; i < array.length; i++) {
        array[i] /= numero;
    }
    console.log(array);
}

let array = [100, 200, 300];
let numero = 2;

dividirVetor(array, numero);