/*Implementar um programa que dado um array bidimensional, 
atribui 0 a todos os elementos presentes em suas diagonais*/

function atribuirZeroDiagonal(array) {
  for (let i = 0; i < array.length; i++) { //percorre as linhas
    for (let j = 0; j < array.length; j++) { //percorre as colunas
      if (i === j || i + j === array.length - 1) { //verifica se o elemento está na diagonal
        array[i][j] = 0; //atribui 0 ao elemento
      }
    }
  }
  return array; //retorna o array
}

const array = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]; //array bidimensional

console.log(atribuirZeroDiagonal(array)); //chama a função e imprime o retorno
