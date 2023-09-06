/*Implementar um subprograma que dados dois arrays bidimensionais,
 escreve no segundo array a transcrição do primeiro;
Exemplo: b[linha,coluna] = a[coluna,linha]
*/

function transporArray(array1, array2) {
    for (let i = 0; i < array1.length; i++) { //percorre as linhas
        for (let j = 0; j < array1[i].length; j++) { //percorre as colunas
            array2[j][i] = array1[i][j]; //copia o conteudo do array1 para o array2
        }
    }
    console.log(array2); //imprime o array
}


const array1 = [  
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]; //array bidimensional

const array2 = [
  [],
  [],
  []
]; //array bidimensional

transporArray(array1, array2); //chama a função
