/*Imprimir os números negativos múltiplos de 5 até -100;
*/

// Inicialize o número com o valor inicial de 5 (o primeiro múltiplo de 5 negativo).
let numero = 5;

// Use um loop do-while para imprimir números negativos múltiplos de 5 até -100.
do {
    if (numero % 5 === 0) { // Verifica se 'numero' é um múltiplo de 5.
        console.log(numero); // Imprime 'numero' se for múltiplo de 5.
    }
    numero -= 5; // Subtrai 5 do valor de 'numero' a cada iteração.
} while (numero >= -100); // Continua o loop enquanto 'numero' for maior ou igual a -100.
