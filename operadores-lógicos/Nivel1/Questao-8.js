/*Dados quatro números, contar quantos entre eles são divisíveis por 5 e 7 ao mesmo tempo;*/

let numero1 = 35;
let numero2 = 5;
let numero3 = 5;
let numero4 = 35;

let contar = 0;

if (numero1 % 5 === 0 && numero1 % 7 === 0) {
    contar++;
}
if (numero2 % 5 === 0 && numero2 % 7 === 0) {
    contar++;
}
if (numero3 % 5 === 0 && numero3 % 7 === 0) {
    contar++;
}
if (numero4 % 5 === 0 && numero4 % 7 === 0) {
    contar++;
}

console.log(contar);