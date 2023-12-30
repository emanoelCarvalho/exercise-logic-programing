/*Testar se um número é primo
*/

// Defina o número que você deseja testar se é primo.
let numero = 1;

// Inicialize a variável 'contador' com o valor inicial de 0.
let contador = 0;

// Use um loop for para contar quantos divisores o número tem.
for (let i = 1; i <= numero; i++) {
    if (numero % i === 0) {
        contador++; // Incrementa 'contador' sempre que 'numero' for divisível por 'i'.
    }
}

// Use um operador ternário para determinar se o número é primo ou não.
// A condição é: 'contador' é igual a 2 (números primos têm exatamente 2 divisores).
// Se for igual a 2, o número é considerado primo; caso contrário, não é.
contador === 2 ? console.log('É primo') : console.log('Não é primo');
