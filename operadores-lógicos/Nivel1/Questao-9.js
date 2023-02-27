/*Dados quatro números, contar quantos entre eles são divisíveis por 3 ou 4*/

let numero1 = 12;
let numero2 = 12;
let numero3 = 9;
let numero4 = 12;

let contador = 0;

if (numero1 % 3 === 0 || numero1 % 4 === 0) {
    contador++;
}
if (numero2 % 3 === 0 || numero2 % 4 === 0) {
    contador++;
} 
if (numero3 % 3 === 0 || numero3 % 4 === 0) {
    contador++;
}
if (numero4 % 3 === 0 || numero4 % 4 === 0) {
    contador++;
}

console.log(contador);