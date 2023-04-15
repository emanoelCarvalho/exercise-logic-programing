// Implementar um subprograma que dado um array bidimensional retorna
//  true se a soma dos seus elementos for positiva ou false, caso contrário;

function somaDoArrayPositivo(array) {
    let soma = 0;
    let verdadeiro = false;
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            soma += array[i][j];
        }
    }
    soma > 0 ? verdadeiro = true : verdadeiro;
    return verdadeiro;
}

const array = [
    [1,1,1,1],
    [1,1,1]
];

console.log(somaDoArrayPositivo(array));