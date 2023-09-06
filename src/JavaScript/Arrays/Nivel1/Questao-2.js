// Implementar um subprograma que dado um array bidimensional retorna
//  true se a soma dos seus elementos for positiva ou false, caso contrário;

function somaDoArrayPositivo(array) {
    let soma = 0; //variavel que armazena a soma dos elementos
    let verdadeiro = false; //variavel que armazena o retorno da função
    for (let i = 0; i < array.length; i++) { //percorre as linhas
        for (let j = 0; j < array[i].length; j++) { //percorre as colunas
            soma += array[i][j]; //soma os elementos
        }
    }
    soma > 0 ? verdadeiro = true : verdadeiro; //verifica se a soma é positiva
    return verdadeiro; //retorna o valor
}

const array = [
    [1,1,1,1],
    [1,1,1]
]; //array bidimensional

console.log(somaDoArrayPositivo(array)); //chama a função e imprime o retorno