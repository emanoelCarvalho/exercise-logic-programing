// Implementar um subprograma que retorna a quantidade 
// de elementos ímpares em um array de duas dimensões;

function quantidadeDeElementosImpares(array) {
    let contador = 0; //variavel que armazena a quantidade de elementos impares
    for (let i = 0; i < array.length; i++) { //percorre as linhas
        for (let j = 0; j < array[i].length; j++) { //percorre as colunas
            if (array[i][j] % 2 != 0 ) { //verifica se o elemento é impar
                contador++;     //incrementa o contador
            }
        }
    }
    return contador;    //retorna o valor
}

const array = [
    [1,2,3],
    [1,2,3],
    [1,2,3],
    [1,2,3]
]; //array bidimensional

console.log(quantidadeDeElementosImpares(array)); //chama a função e imprime o retorno