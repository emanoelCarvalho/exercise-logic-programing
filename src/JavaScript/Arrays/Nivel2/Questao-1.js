/*Implementar um subprograma que dadas a quantidade de linhas e de colunas, cria um array de duas dimensões com a quantidade de 
linhas e colunas especificadas, inicializa seus índices com o valor -1, o imprime e o retorna;*/


function criarArray(numeroLinhas, numeroColunas) {
    let array = []; //array bidimensional

    for (let i =  0; i < numeroLinhas; i++) { //percorre as linhas
        array[i] = []; //cria as linhas
        for (let j = 0; j < numeroColunas; j++) { //percorre as colunas
        array[i][j] = -1; //cria as colunas e inicializa com -1
        }
    }

    console.log(array); //imprime o array

    return array; //retorna o array
}

criarArray(5,5); //chama a função