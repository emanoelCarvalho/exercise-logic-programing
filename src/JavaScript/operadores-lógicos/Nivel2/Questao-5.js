/*Identificar se há exatamente (apenas) um número positivo entre três números dados;*/

// Dados três números
let number1 = -9;
let number2 = 9;
let number3 = -8;

// Verifique se há exatamente um número positivo e imprima o resultado
if (number1 > 0 && number2 <= 0 && number3 <= 0) {
    console.log(number1, true); // Se apenas number1 for positivo, imprima number1 seguido de true
} else if (number1 <= 0 && number2 > 0 && number3 <= 0) {
    console.log(number2, true); // Se apenas number2 for positivo, imprima number2 seguido de true
} else if (number1 <= 0 && number2 <= 0 && number3 > 0) {
    console.log(number3, true); // Se apenas number3 for positivo, imprima number3 seguido de true
} else {
    console.log(false); // Se nenhuma das condições acima for atendida (ou mais de um número positivo), imprima false
}
