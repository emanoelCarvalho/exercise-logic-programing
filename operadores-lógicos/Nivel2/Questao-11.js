/*Identificar se há exatamente (apenas) um número ímpar entre três números dados.
*/

let numero1 = 8;
let numero2 = 7;
let numero3 = 6;

if (numero1 % 2 != 0 && numero2 % 2 == 0 && numero3 % 2 == 0) {
    console.log(numero1, true);
} else if (numero1 % 2 == 0 && numero2 % 2 != 0 && numero3 % 2 == 0) {
    console.log(numero2, true);
} else if (numero1 % 2 == 0 && numero2 % 2 == 0 && numero3 % 2 != 0) {
    console.log(numero3, true);
} else {
    console.log(false);
}








