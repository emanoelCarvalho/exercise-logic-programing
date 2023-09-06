/*Implementar um subprograma que dado um array bidimensional, 
computa a média dos seus elementos, conta e retorna quantos elementos 
acima da média ele possui;*/

function mediaArrayBi(array) {
    let media = 0; //variavel que armazena a media dos elementos
    let sum = 0; //variavel que armazena a soma dos elementos
    let contador = 0; //variavel que armazena a quantidade de elementos

    for (let i = 0; i < array.length; i++) { //percorre as linhas
        for (let j = 0; j < array[i].length; j++) { //percorre as colunas
            sum += array[i][j]; //soma os elementos
            contador++; //incrementa o contador
        }
    }
    media = sum / contador; //calcula a media
    return media //retorna a media
}


function elementosAcimaDaMedia(array) {
    let mediaArray = mediaArrayBi(array); //chama a função e armazena a media
    let contador = 0; //variavel que armazena a quantidade de elementos acima da media

    for (let i = 0; i < array.length; i++) { //percorre as linhas
        for (let j = 0; j < array[i].length; j++) { //percorre as colunas
            if (array[i][j] >= mediaArray) { //verifica se o elemento é maior ou igual a media
                contador++; //incrementa o contador
            }
        }
    }
    return contador; //retorna a quantidade de elementos acima da media
    
}
const array = [
    [6, 1, 2, 6]
]; //array bidimensional

console.log(elementosAcimaDaMedia(array)); //chama a função e imprime o retorno