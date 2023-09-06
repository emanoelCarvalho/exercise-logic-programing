// Implementar um subprograma que dado um array bidimensional
//  e um número, multiplica cada elemento do array pelo número;

function multiplicarArray(array, numero) {
    for (let i = 0; i < array.length; i++) { //percorre as linhas
        for (let j = 0; j < array[i].length; j++) { //percorre as colunas
            array[i][j] *= numero; //multiplica o elemento pelo numero
        }
    }
    console.log(array); //imprime o array
}

const array = [
    [0,0],
    [0,3],
    [0,0]
]; //array bidimensional

const numero = 2; //numero a ser multiplicado

multiplicarArray(array, numero);    //chama a função