/*Dividir dois números sem usar o operador da divisão (Dica: 9/3 = 9 - 3 - 3 - 3);*/

let numero1 = 1000;
let numero2 = 100;

let div = 0;

while (numero1 >= numero2 ) {
    numero1 -= numero2;
    div++;
}

console.log(div);