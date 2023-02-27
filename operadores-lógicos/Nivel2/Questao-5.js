/*Identificar se há exatamente (apenas) um número positivo entre três números dados;*/

let number1 = -9;
let number2 = 9;
let number3 = -8;

let contador = 0;

if (number1 > 0) {
    contador++;
}
if (number2 > 0) {
    contador++;
}
if (number3 > 0) {
    contador++;
}

contador === 1 ? console.log(true) : console.log(false);