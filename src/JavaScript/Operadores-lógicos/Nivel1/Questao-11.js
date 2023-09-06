/*Identificar se duas variáveis são ímpares e positivas ao mesmo tempo.*/

let number1 = 13;
let number2 = 13;

let contador = 0;

if (number1 % 2 != 0 && number1 > 0) {
    contador++;
}
if ( number2 % 2 != 0 && number2 > 0 ) {
    contador++;
}

contador === 2 ? console.log('V') : console.log('F');