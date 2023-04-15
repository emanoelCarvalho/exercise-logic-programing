/*Imprimir os números negativos múltiplos de 5 até -100;
*/

let numero = 5;

do {
    if (numero % 5 === 0) {
        console.log(numero);
    }
    numero -= 5;
} while (numero >= -100)