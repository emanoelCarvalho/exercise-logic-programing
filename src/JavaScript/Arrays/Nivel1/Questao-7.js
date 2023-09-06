// Implementar um subprograma que dados dois arrays bidimensionais,
//  retorna true se ambos forem iguais ou false caso contrário;

function arraysIguais(array1, array2) {
    let verificar = true;  //variavel que armazena o retorno da função
    if (array1.length !== array2.length) {  //verifica se os arrays tem o mesmo tamanho
        verificar = false; //se não tiverem, retorna false
    }


    for (let i = 0; i < array1.length; i++) { //percorre as linhas
        let contador = 0; //variavel que armazena a quantidade de elementos diferentes
        for (let j = 0; j < array1[i].length; j++) { //percorre as colunas
            if (array1[i][j] !== array2[i][j]) { //verifica se os elementos são diferentes
                contador++;     //incrementa o contador
            }
        }
        if (contador !== 0) { //verifica se o contador é diferente de 0
            verificar = false; //se for, retorna false
            break; //para o laço
        }
    }
    return verificar; //retorna o valor
}

const array1 = [
    [1, 1, 1],
    [1, 1, 1]
]; //arrays bidimensionais
const array2 = [
    [1, 1, 1],
    [1, 1, 1]
]; //arrays bidimensionais

let resultado = arraysIguais(array1, array2); 
console.log(resultado);  //chama a função e imprime o retorno