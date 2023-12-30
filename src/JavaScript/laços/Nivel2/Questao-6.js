/*Testar se um número não é primo
Dica: um número é primo quando ele é divisível apenas por 1 além de ele próprio;
*/

// Defina o número que você deseja testar se não é primo.
let numero = 23;

// Inicialize a variável 'contador' com o valor inicial de 0.
let contador = 0;

// Use um loop for para contar quantos divisores o número tem.
for (let i = 1; i <= numero; i++) {
    if (numero % i === 0) {
        contador++; // Incrementa 'contador' sempre que 'numero' for divisível por 'i'.
    }
}

// Use um operador ternário para determinar se o número não é primo.
// A condição é: 'contador' é maior que 2 ou 'contador' é menor que 2.
// Se 'contador' for maior que 2 ou menor que 2, o número não é primo; caso contrário, é primo.
(contador > 2 || contador < 2) ? console.log('Não é primo') : console.log('É primo');
