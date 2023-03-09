/*Implementar subprograma que dados dois arrays bidimensionais, 
copia o conteúdo do primeiro no segundo array;
*/

function copiarArraysBi(array1, array2) {
    for (let i = 0; i < array1.length; i++) {
        for (let j = 0; j < array1[i].length; j++) {
            array2[i][j] = array1[i][j];
        }
    }
    console.log(array2);
}

const array1 = [
    [2,2,2,2],
    [3,3,3,3]
];

const array2 = [[],[]];
copiarArraysBi(array1, array2);