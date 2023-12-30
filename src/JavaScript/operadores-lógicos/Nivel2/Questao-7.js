/*Identificar se há exatamente dois números positivos entre três número dados;*/

// Dados três números
let number1 = -9;
let number2 = 9;
let number3 = -8;

// Verifique se há exatamente dois números positivos e imprima o resultado
if ((number1 > 0 && number2 > 0 && number3 <= 0) || (number1 > 0 && number2 <= 0 && number3 > 0)) {
    console.log(true); // Se exatamente dois números forem positivos, imprima true
} else if (number1 <= 0 && number2 > 0 && number3 > 0) {
    console.log(true); // Se exatamente dois números forem positivos, imprima true
} else {
    console.log(false); // Se nenhuma das condições acima for atendida (ou mais ou menos de dois números positivos), imprima false
}
 