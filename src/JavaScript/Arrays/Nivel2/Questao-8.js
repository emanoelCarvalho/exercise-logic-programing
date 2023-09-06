/*Implementar um programa que dado um array bidimensional, 
atribui 0 a todos os elementos presentes em suas diagonais*/

function atribuirZeroDiagonal(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (i === j || i + j === array.length - 1) {
        array[i][j] = 0;
      }
    }
  }
  return array;
}

const array = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

console.log(atribuirZeroDiagonal(array));
