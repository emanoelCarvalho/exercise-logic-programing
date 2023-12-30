/*Imprimir os número de 3 e 3, de 0 até -30;*/

// Inicialize o número com o valor inicial de 0.
let numero = 0;

// Use um loop do-while para imprimir números de 3 em 3, de 0 até -30.
do {
    console.log(numero); // Imprime o valor atual de 'numero'.
    numero = numero - 3; // Subtrai 3 ao valor de 'numero' a cada iteração.
} while (numero >= -30); // Continua o loop enquanto 'numero' for maior ou igual a -30.
