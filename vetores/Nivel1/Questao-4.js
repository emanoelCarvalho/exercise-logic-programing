// Implementar um subprograma que retorna a quantidade de elementos ímpares em um vetor

function quantidadeDeImpares(array) {
    let contador = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 != 0 ) {
            contador++;
        }
    }
    return contador;
}

let array = [1,1,1,1,1,2,3];

console.log(quantidadeDeImpares(array));