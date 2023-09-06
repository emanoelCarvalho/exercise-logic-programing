/*Implementar um subprograma que dados dois arrays bidimensionais, 
retorna qual deles possui a maior soma de seus elementos;*/

function somarArrayBi(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            sum += array[i][j];
        }
    }
    return sum;
}

function maiorSomaArraysBi(array1, array2) {
    let maior;
    let somarArrayBi1 = somarArrayBi(array1);
    let somarArrayBi2 = somarArrayBi(array2);

    for (let i = 0; i < array1.length; i++) {
        for (let j = 0; j < array1[i].length; j++) {
            if (array1[i][j] > array2[i][j]) {
                maior = array1;
            } else {
                maior = array2;
            }
        }
    }
    return maior;
}

const array1 = [
    [7, 7, 7, 7]
]

const array2 = [
    [6, 6, 6, 6]
]

let res = maiorSomaArraysBi(array1, array2);
console.log(res);