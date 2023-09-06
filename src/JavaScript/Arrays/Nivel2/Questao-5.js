/*Implementar um subprograma que dado um array tridimensional, 
computa a média de seus elementos;
Dica: são necessários três for’s aninhados para computar a média*/


function mediaArrayTri(array) {
    let sum = 0; //variavel que armazena a soma dos elementos
    let media = 0; //variavel que armazena a media dos elementos
    let contador = 0; //variavel que armazena a quantidade de elementos
 
    for (let i = 0; i < array.length; i++) {  //percorre as linhas
        for (let j = 0; j < array[i].length; j++) { //percorre as colunas
            for (let k = 0; k < array[i][j].length; k++) { //percorre as colunas
                sum += array[i][j][k] / array.length; //soma os elementos e divide pela quantidade de elementos
                contador++; //incrementa o contador
            }
        }
    }
    media = sum / contador; //calcula a media
    console.log(media); //imprime a media

}

const array = [
    [
        [6, 6, 6, 6],
        [6, 6, 6, 6],
        [6, 6, 6, 6],
        [6, 6, 6, 6]
    ]
]; //array tridimensional

mediaArrayTri(array); //chama a função
