/*Identificar se há exatamente (apenas) um número negativo entre três números dados;*/

let number1 = -9;
let number2 = -9;
let number3 = 8;

if (number1 < 0 && number2 >= 0 && number3 >= 0) {
    console.log(number1, true);
} else if (number1 >= 0 && number2 < 0 && number3 < 0) {
    console.log(number2, true);
} else if (number1 >= 0 && number2 >= 0 && number3 < 0) {
    console.log(number3, true);
} else {
    console.log(false);
}