/*Implementar um programa que dado um array bidimensional, 
atribui 0 a todos os elementos presentes em suas diagonais*/

function atribuirZeroDiagonal(array) {
    const tamanho = array.length;
    for (let i = 0; i < tamanho; i++) {
      for (let j = 0; j < tamanho; j++) {
        if (i === j || i + j === tamanho - 1) {
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
  