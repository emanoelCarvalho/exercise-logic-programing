/*Implementar um subprograma que dados dois arrays bidimensionais, 
retorna qual deles possui a maior soma de seus elementos;*/

function somarArrayBi(array) {
    let sum = 0; //variavel que armazena a soma dos elementos
    for (let i = 0; i < array.length; i++) { //percorre as linhas
        for (let j = 0; j < array[i].length; j++) { //percorre as colunas
            sum += array[i][j]; //soma os elementos
        }
    }
    return sum; //retorna a soma
}

function maiorSomaArraysBi(array1, array2) {
    let maior; //variavel que armazena o array com a maior soma
    let somarArrayBi1 = somarArrayBi(array1); //variavel que armazena a soma do array1
    let somarArrayBi2 = somarArrayBi(array2); //variavel que armazena a soma do array2

    for (let i = 0; i < array1.length; i++) { //percorre as linhas
        for (let j = 0; j < array1[i].length; j++) { //percorre as colunas
            if (array1[i][j] > array2[i][j]) { //verifica se o elemento do array1 é maior que o elemento do array2
                maior = array1; //se for, o array1 é o maior
            } else {
                maior = array2; //se não for, o array2 é o maior
            }
        }
    }
    return maior; //retorna o array com a maior soma
}

const array1 = [
    [7, 7, 7, 7]
] //arrays bidimensionais

const array2 = [
    [6, 6, 6, 6]
] //arrays bidimensionais

let res = maiorSomaArraysBi(array1, array2);

console.log(res); //chama a função e imprime o retorno