/*Identificar se há exatamente (apenas) um número ímpar entre três números dados.
*/

let numero1 = 8;
let numero2 = 7;
let numero3 = 6;

let contador = 0;


if (numero1 % 2 != 0) {
    contador++;
}
if (numero2 % 2 != 0) {
    contador++;
} 
if (numero3 % 2 != 0) {
    contador++;
}

contador === 1 ? console.log('V') : console.log('F');