/*Computar o fatorial de um número;
*/

// Defina o número para o qual você deseja calcular o fatorial.
let numero = 5;

// Inicialize a variável 'fatorial' com o valor inicial de 1.
let fatorial = 1;

// Use um loop for para calcular o fatorial.
for (let i = numero; i > 0; i--) {
    fatorial = fatorial * i; // Multiplica 'fatorial' pelo valor atual de 'i'.
}

// O valor de 'fatorial' após o loop contém o fatorial do número.
console.log(fatorial);
