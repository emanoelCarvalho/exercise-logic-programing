// Implementar um subprograma que dado um array bidimensional 
//  um número, divide todos os elementos do array pelo número;


function  dividirArray(array, numero) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            array[i][j] /= numero;
        }
    }
    console.log(array);
}

const array = [
    [10, 20, 30],
    [8, 18, 28],
    [6, 16, 26],
];

const numero = 2;
dividirArray(array, numero);