// Implementar um subprograma que retorna  a
//  quantidade de elementos pares em um array de duas dimensões;

function quantidadeDeElementosPares(array) {
    let contador = 0;
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            if (array[i][j] % 2 === 0) {
                contador++;
            }
        }
    }
    return contador;
}

const array = [
    [0,0,3],
    [0,0,3],
    [0,0,3],
    [0,0,3]
];

console.log(quantidadeDeElementosPares(array));