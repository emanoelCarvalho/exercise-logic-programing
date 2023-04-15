// Implementar um subprograma que retorna a quantidade 
// de elementos ímpares em um array de duas dimensões;

function quantidadeDeElementosImpares(array) {
    let contador = 0;
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            if (array[i][j] % 2 != 0 ) {
                contador++;
            }
        }
    }
    return contador;
}

const array = [
    [1,2,3],
    [1,2,3],
    [1,2,3],
    [1,2,3]
];

console.log(quantidadeDeElementosImpares(array));