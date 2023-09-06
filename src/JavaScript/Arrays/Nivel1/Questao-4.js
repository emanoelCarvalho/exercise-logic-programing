// Implementar um subprograma que retorna  a
//  quantidade de elementos pares em um array de duas dimensões;

function quantidadeDeElementosPares(array) {
    let contador = 0; //variavel que armazena a quantidade de elementos pares
    for (let i = 0; i < array.length; i++) { //percorre as linhas
        for (let j = 0; j < array[i].length; j++) { //percorre as colunas
            if (array[i][j] % 2 === 0) { //verifica se o elemento é par
                contador++;    //incrementa o contador
            }
        }
    }
    return contador;   //retorna o valor
}

const array = [
    [0,0,3],
    [0,0,3],
    [0,0,3],
    [0,0,3]
]; //array bidimensional
 
console.log(quantidadeDeElementosPares(array)); //chama a função e imprime o retorno