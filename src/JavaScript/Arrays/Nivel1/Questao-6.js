// Implementar um subprograma que dado um array bidimensional 
//  um número, divide todos os elementos do array pelo número;

function  dividirArray(array, numero) { 
    for (let i = 0; i < array.length; i++) { //percorre as linhas 
        for (let j = 0; j < array[i].length; j++) { //percorre as colunas
            array[i][j] /= numero; //divide o elemento pelo numero
        }
    }
    console.log(array); //imprime o array
}

const array = [
    [10, 20, 30],
    [8, 18, 28],
    [6, 16, 26],
]; //array bidimensional

const numero = 2; //numero a ser dividido

dividirArray(array, numero); //chama a função