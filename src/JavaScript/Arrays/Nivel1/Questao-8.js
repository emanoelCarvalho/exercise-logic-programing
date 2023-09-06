// Implementar um subprograma que dados um array bidimensional de booleans, 
// imprime true se ao menos um dos elementos do array forem verdadeiros ou false, 
// caso contrário.

function arraysBooleams(array) {
    let verificar = false;  //variavel que armazena o retorno da função

    for (let i = 0; i < array.length; i++) { //percorre as linhas
        let contador = 0; //variavel que armazena a quantidade de elementos diferentes
        for (let j = 0; j < array[i].length; j++) { //percorre as colunas
           if (array[i][j] === true) { //verifica se os elementos são diferentes
            contador++;    //incrementa o contador
           }
        }
        if (contador !== 0) { //verifica se o contador é diferente de 0
            verificar = true; //se for, retorna true
            break; //para o laço
        }
    }
    return verificar; //retorna o valor
}

const array = [
    [false, false, false],
    [false, false, false]
]; //arrays bidimensionais

let resultado = arraysBooleams(array);
console.log(resultado); //chama a função e imprime o retorno