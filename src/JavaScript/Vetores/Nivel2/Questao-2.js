// Implementar um subprograma que dados dois vetores, copia o conteúdo
//  do primeiro no segundo vetor (elemento por elemento) na ordem inversa
// Exemplo – Entrada: [1, 3, 5, -2], Saída: [-2, 5, 3, 1]

function  vetorAoInverso(array1, array2) {
    let j = 0;
    for (let i = array1.length - 1; i >= 0; i--) {
        array2[j] = array1[i];
        j++;
    }
    console.log(array2);
}

const array1 = [1, 3, 5, -2];
const array2 = [];

vetorAoInverso(array1, array2);