// Implementar um subprograma que dado um vetor, 
// computa a média dos seus elementos e 
// retorna quantos elementos acima da média ele possui


function mediaVetor(array) {
    let sum = 0;
    let media;

    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    media = sum / array.length;
    return media;
}

function elementoAcimaDaMedia(array) {
    let media1 = mediaVetor(array);
    let contador = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i] > media1) {
            contador++;
        }
    }
    return contador
}
console.log(elementoAcimaDaMedia([6,5,4,5]));