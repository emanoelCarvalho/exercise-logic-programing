/*Identificar se há exatamente (apenas) um número ímpar entre três números dados.
*/

// Dados três números
let numero1 = 8;
let numero2 = 7;
let numero3 = 6;

// Verifique se há exatamente um número ímpar e imprima o resultado
if (numero1 % 2 != 0 && numero2 % 2 == 0 && numero3 % 2 == 0) {
    console.log(numero1, true); // Se apenas numero1 for ímpar, imprima numero1 seguido de true
} else if (numero1 % 2 == 0 && numero2 % 2 != 0 && numero3 % 2 == 0) {
    console.log(numero2, true); // Se apenas numero2 for ímpar, imprima numero2 seguido de true
} else if (numero1 % 2 == 0 && numero2 % 2 == 0 && numero3 % 2 != 0) {
    console.log(numero3, true); // Se apenas numero3 for ímpar, imprima numero3 seguido de true
} else {
    console.log(false); // Se nenhuma das condições acima for atendida (ou mais ou menos de um número ímpar), imprima false
}
