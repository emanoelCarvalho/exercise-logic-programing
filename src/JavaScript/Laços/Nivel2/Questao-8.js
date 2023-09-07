/*Imprimir os números inteiros pares entre -10 e 10.
*/

// Inicialize o número com o valor inicial de -10.
let numero = -10;

// Use um loop for para imprimir números inteiros pares entre -10 e 10.
for (let i = numero; i <= 10; i++) {
    if (i % 2 === 0) { // Verifica se 'i' é um número inteiro par (o resto da divisão por 2 é zero).
        console.log(i); // Imprime 'i' se for um número inteiro par.
    }
}
