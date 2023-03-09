// Implementar um subprograma que dados dois arrays bidimensionais,
//  retorna true se ambos forem iguais ou false caso contrário;

function arraysIguais(array1, array2) {
    let verificar = true; 
    if (array1.length !== array2.length) {
        verificar = false;
    }


    for (let i = 0; i < array1.length; i++) {
        let contador = 0;
        for (let j = 0; j < array1[i].length; j++) {
            if (array1[i][j] !== array2[i][j]) {
                contador++;
            }
        }
        if (contador !== 0) {
            verificar = false;
            break;
        }
    }
    return verificar;
}

const array1 = [
    [1, 1, 1],
    [1, 1, 1]
];
const array2 = [
    [1, 1, 1],
    [1, 1, 1]
];

let resultado = arraysIguais(array1, array2);
console.log(resultado); 