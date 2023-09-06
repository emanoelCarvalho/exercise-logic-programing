// Implementar um subprograma que dados um vetor e um número, 
// multiplica cada elemento do vetor pelo número recebido como parâmetro

function multiplicaVetor(numero, array) {
    for (let i = 0; i < array.length; i++) {
        array[i] *= numero;
    }
    console.log(array);
}

multiplicaVetor(2, [1, 2, 3]);
multiplicaVetor(2, [4, 5, 6]);
