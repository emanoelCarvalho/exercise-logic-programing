/*Implementar um subprograma que dado um array tridimensional, 
computa a média de seus elementos;
Dica: são necessários três for’s aninhados para computar a média*/


function mediaArrayTri(array) {
    let sum = 0;
    let media = 0;
    let contador = 0;

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            for (let k = 0; k < array[i][j].length; k++) {
                sum += array[i][j][k] / array.length;
                contador++;
            }
        }
    }
    media = sum / contador;
    console.log(media);

}

const array = [
    [
        [6, 6, 6, 6],
        [6, 6, 6, 6],
        [6, 6, 6, 6],
        [6, 6, 6, 6]
    ]
];
mediaArrayTri(array);