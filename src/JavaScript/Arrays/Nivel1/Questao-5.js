// Implementar um subprograma que dados um array bidimensional e
//  um número, subtrai o número de todos os elementos do array;

function  subtrairDoArray(array, numero) {
    for (let i = 0; i < array.length; i++) { //percorre as linhas
        for (let j = 0; j < array[i].length; j++) { //percorre as colunas
            array[i][j] -= numero; //subtrai o numero do elemento
        }
    }
    console.log(array); //imprime o array
}

const array = [
    [10, 20, 30],
    [8, 18, 28],
    [6, 16, 26],
]; //array bidimensional

const numero = 2; //numero a ser subtraido

subtrairDoArray(array, numero); //chama a função