/*Testar se um número é divisível por 3 e por 4 (tente fazer usando apenas if’s);*/

let numero = 12;
let contador = 0;
/*Declarei, variável contador, e numero*/

if (numero % 3 === 0) {
    contador++;
}
if (numero % 4 === 0) {
    contador++;
}
/*Fiz dois if's, para testar se um número é divisível por três e por quatro, caso sejam, contador incrementa um numero*/

if (contador === 2) {
    console.log('Divisível');
} else {
    console.log('Indivisível');
}
/*Fiz um if, para ver se 'contador  === 2', caso seja, o número é Divisível, caso contrário indDivisível*/