/*Implementar um subprograma que dado um array bidimensional, 
computa a média dos seus elementos, conta e retorna quantos elementos 
acima da média ele possui;*/

function mediaArrayBi(array) {
    let media = 0;
    let sum = 0;
    let contador = 0;

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            sum += array[i][j];
            contador++;
        }
    }
    media = sum / contador;
    return media
}


function elementosAcimaDaMedia(array) {
    let mediaArray = mediaArrayBi(array);
    let contador = 0;

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            if (array[i][j] >= mediaArray) {
                contador++;
            }
        }
    }
    return contador;
    
}
const array = [
    [6, 1, 2, 6]
];

console.log(elementosAcimaDaMedia(array));