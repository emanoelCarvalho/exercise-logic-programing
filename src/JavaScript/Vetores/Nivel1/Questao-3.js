// Implementar um subprograma que dados dois vetores, copia
//  o conteúdo do primeiro para o segundo vetor (elemento por elemento)

function copiarVetor(array1, array2) {
    for (let i = 0; i < array1.length; i++) {
        array2[i] = array1[i];
    }
    console.log(array2);
}

let array1 = [1, 2, 3];
let array2 = [];

copiarVetor(array1, array2);