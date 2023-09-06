/*Testar se um número é divisível por 2 ou por 7 (tente fazer usando apenas if’s); */

let numero = 53;
let contador = 0;
/*Declarei as variáveis, número e contador*/

if (numero % 2 === 0) {
    contador++;
}
if (numero % 7 === 0) {
    contador++;
}
/*Fiz duas condicionais para testar se o número é divisível, caso seja contado incrementa.*/


if (contador >= 1) {
    console.log(true);
} else {
    console.log(false);
}
/*Fiz uma condicional, para testar se  o contador é '>= 1', caso seja, o número é divisível por 2 ou por 7, caso contrári não é'*/