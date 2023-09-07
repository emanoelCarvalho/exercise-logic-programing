/*Dados três números quaisquer, imprimi-los em ordem decrescente;*/

// Declarando três variáveis 'numero1', 'numero2' e 'numero3' com valores 1, 1 e 1, respectivamente.
let numero1 = 1;
let numero2 = 1;
let numero3 = 1;

// Declarando as variáveis 'maior', 'meio' e 'menor' para armazenar os resultados.
let maior;
let meio;
let menor;

// Utilizando estruturas condicionais para determinar qual número é o maior, o do meio e o menor.
if (numero1 >= numero2 && numero1 >= numero3) {
    maior = numero1;

    if (numero2 >= numero3) {
        meio = numero2;
        menor = numero3;
    } else {
        meio = numero3;
        menor = numero2;
    }
} else if (numero2 >= numero1 && numero2 >= numero3) {
    maior = numero2;

    if (numero1 >= numero3) {
        meio = numero1;
        menor = numero3;
    } else {
        meio = numero3;
        menor = numero1;
    }
} else {
    maior = numero3;

    if (numero1 >= numero2) {
        meio = numero1;
        menor = numero2;
    } else {
        meio = numero2;
        menor = numero1;
    }
}

// Imprimindo os números em ordem decrescente.
console.log(maior, meio, menor);
