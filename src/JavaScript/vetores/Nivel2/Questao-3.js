// Implementar um subprograma que computa e retorna o valor da 
// multiplicação de dois vetores (pesquise a fórmula da multiplicação de vetores)


function multiplicarDoisVetores(array1, array2) {
    let produto = 0;

    // Verifica se os vetores têm o mesmo tamanho antes de multiplicar.
    if (array1.length !== array2.length) {
        console.log("Os vetores têm tamanhos diferentes. Não é possível multiplicar.");
        return null; // Retorna null para indicar que a multiplicação não é possível.
    }

    // Loop para multiplicar os elementos correspondentes dos vetores.
    for (let i = 0; i < array1.length; i++) {
        produto += array1[i] * array2[i];
    }

    return produto;
}

const array1 = [2, 3, 4];
const array2 = [2, 5, 6];

const resultado = multiplicarDoisVetores(array1, array2);

if (resultado !== null) {
    console.log("O produto dos vetores é:", resultado);
}
