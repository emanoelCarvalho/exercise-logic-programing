// Implementar um subprograma que dados um array bidimensional de booleans, 
// imprime true se ao menos um dos elementos do array forem verdadeiros ou false, 
// caso contrário.

function arraysBooleams(array) {
    let verificar = false; 

    for (let i = 0; i < array.length; i++) {
        let contador = 0;
        for (let j = 0; j < array[i].length; j++) {
           if (array[i][j] === true) {
            contador++;
           }
        }
        if (contador !== 0) {
            verificar = true;
            break;
        }
    }
    return verificar;
}

const array = [
    [false, false, false],
    [false, false, false]
];

let resultado = arraysBooleams(array);
console.log(resultado); 