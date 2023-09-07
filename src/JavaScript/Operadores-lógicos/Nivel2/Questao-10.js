/*Identificar se há exatamente (apenas) um número par entre três número dados;*/

// Dados três números
let numero1 = 8;
let numero2 = 7;
let numero3 = 61;

// Verifique se há exatamente um número par e imprima o resultado
if (numero1 % 2 == 0 && numero2 % 2 != 0 && numero3 % 2 != 0) {
    console.log(numero1, true); // Se apenas numero1 for par, imprima numero1 seguido de true
} else if (numero1 % 2 != 0 && numero2 % 2 == 0 && numero3 % 2 != 0) {
    console.log(numero2, true); // Se apenas numero2 for par, imprima numero2 seguido de true
} else if (numero1 % 2 != 0 && numero2 % 2 != 0 && numero3 % 2 == 0) {
    console.log(numero3, true); // Se apenas numero3 for par, imprima numero3 seguido de true
} else {
    console.log(false); // Se nenhuma das condições acima for atendida (ou mais ou menos de um número par), imprima false
}
