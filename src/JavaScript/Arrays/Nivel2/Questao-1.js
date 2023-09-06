/*Implementar um subprograma que dadas a quantidade de linhas e de colunas, cria um array de duas dimensões com a quantidade de 
linhas e colunas especificadas, inicializa seus índices com o valor -1, o imprime e o retorna;*/


function criarArray(numeroLinhas, numeroColunas) {
    let array = [];

    for (let i =  0; i < numeroLinhas; i++) {
        array[i] = [];
        for (let j = 0; j < numeroColunas; j++) {
        array[i][j] = -1;
        }
    }

    console.log(array);

    return array;
}

criarArray(5,5);