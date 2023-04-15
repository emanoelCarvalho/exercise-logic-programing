/*Dados três números, encontrar o número do meio (não é o menor, nem o maior);*/

let numero1 = 0;
let numero2 = 2;
let numero3 = 1;

let meio;

if (numero1 >= numero2 && numero1 <= 3) {
    meio = numero1;
} else if (numero2 >= numero1 && numero2 <= numero3) {
    meio = numero2;
} else {
    meio = numero3;
}

console.log(meio);