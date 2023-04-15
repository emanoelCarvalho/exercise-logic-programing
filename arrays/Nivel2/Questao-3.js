/*Implementar subprograma que dados três arrays bidimensionais, guarda 
no terceiro array a soma dos índices equivalentes no dois primeiros;
Exemplo: c[1][2] = a[1][2] + b[1][2]; // e assim por diante*/


function somaDosArrays(array1, array2, array3) {
    for (let i = 0; i < array1.length; i++) {
        for (let j = 0; j < array1[i].length; j++) {
            array3[i][j] = array1[i][j] + array2[i][j];
        }
    }
    console.log(array3);
}
const array1 = [
    [1, 1],
    [1, 1],
    [1, 1]
];


const array2 = [
    [1, 1],
    [1, 1],
    [1, 1],
];

const array3 = [
    [],
    [],
    []
];

somaDosArrays(array1, array2, array3);