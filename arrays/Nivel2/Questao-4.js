/*Implementar um subprograma que dados dois arrays bidimensionais,
 escreve no segundo array a transcrição do primeiro;
Exemplo: b[linha,coluna] = a[coluna,linha]
*/

function transporArray(array1, array2) {
    for (let i = 0; i < array1.length; i++) {
        for (let j = 0; j < array1[i].length; j++) {
            array2[j][i] = array1[i][j];
        }
    }
    console.log(array2);
}


const array1 = [  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const array2 = [  [],
  [],
  []
];

transporArray(array1, array2);
