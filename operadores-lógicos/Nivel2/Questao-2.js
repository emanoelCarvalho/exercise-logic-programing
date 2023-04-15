/*Dados três números, encontrar o menor entre eles;*/

let numero1 = 10;
let numero2 = 20;
let numero3 = 30;

let menor;

if (numero1 <= numero2 && numero1 <= numero3) {
    menor = numero1;
} else if (numero2 <= numero1 && numero2 <= numero3) {
    menor = numero2;
} else {
    menor = numero3;
}

console.log(menor);