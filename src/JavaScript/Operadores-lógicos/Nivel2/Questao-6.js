/*Identificar se há exatamente dois números negativos entre três número dados;*/

let number1 = -9;
let number2 = -9;
let number3 = 8;

if ((number1 < 0 && number2 < 0 && number3 >= 0) || (number1 < 0 && number2 >= 0 && number3 < 0)) {
    console.log(true);
} else if (number1 >= 0 && number2 < 0 && number3 < 0) {
    console.log(true);
} else {
    console.log(false);
}
