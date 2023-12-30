/*Identificar se há exatamente (apenas) um número negativo entre três números dados;*/

// Dados três números
let number1 = -9;
let number2 = -9;
let number3 = 8;

// Verifique se uma das condições é verdadeira e imprima o resultado
if (number1 < 0 && number2 >= 0 && number3 >= 0) {
    console.log(number1, true); // Se number1 for negativo e os outros dois forem positivos, imprima number1 seguido de true
} else if (number1 >= 0 && number2 < 0 && number3 < 0) {
    console.log(number2, true); // Se number2 for negativo e os outros dois forem positivos, imprima number2 seguido de true
} else if (number1 >= 0 && number2 >= 0 && number3 < 0) {
    console.log(number3, true); // Se number3 for negativo e os outros dois forem positivos, imprima number3 seguido de true
} else {
    console.log(false); // Se nenhuma das condições acima for atendida, imprima false
}
