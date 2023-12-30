/*Implementar subprograma que dados dois arrays bidimensionais, 
copia o conteúdo do primeiro no segundo array;
*/

function copiarArraysBi(array1, array2) {
    for (let i = 0; i < array1.length; i++) { //percorre as linhas
        for (let j = 0; j < array1[i].length; j++) { //percorre as colunas
            array2[i][j] = array1[i][j]; //copia o conteudo do array1 para o array2
        }
    }
    console.log(array2); //imprime o array
}

const array1 = [
    [2,2,2,2],
    [3,3,3,3]
]; //array bidimensional

const array2 = [[],[]]; //array bidimensional

copiarArraysBi(array1, array2); //chama a função