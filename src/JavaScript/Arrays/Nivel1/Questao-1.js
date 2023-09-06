// Implementar um subprograma que dado um array bidimensional
//  e um número, multiplica cada elemento do array pelo número;


function multiplicarArray(array, numero) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            array[i][j] *= numero;
        }
    }
    console.log(array);
}

const array = [
    [0,0],
    [0,3],
    [0,0]
];
const numero = 2;

multiplicarArray(array, numero);