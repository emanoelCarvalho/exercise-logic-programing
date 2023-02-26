/*Dados três números quaisquer, imprimi-los em ordem crescente;*/

let numero1 = 1;
let numero2 = 1;
let numero3 = 1;

let maior;
let meio;
let menor;

/*Declarei as varáveis que utilizarei*/

if (numero1 <= numero2 && numero1 <= numero3) {
        menor = numero1;

    if (numero2 <= numero3) {
        meio = numero2;
        maior = numero3;
    } else {
        meio = numero3;
        maior = numero2;
    }
} else if (numero2 <= numero1 && numero2 <= numero3) {
    menor = numero2;

    if (numero1 <= numero3) {
        meio = numero1;
        maior = numero3;
    } else {
        meio = numero3;
        maior = numero1;
    }
} else {
    menor = numero3;

    if (numero1 <= numero2) {
        meio = numero1;
        maior = numero2
    } else {
        meio = numero2;
        maior = numero1;
    }
}
/*Declarei a condicional, para cada caso*/

console.log(menor, meio, maior);
/*Chamei o console.log(), para imprimir os números*/