/*Dados três números quaisquer, imprimi-los em ordem crescente;*/

// Declarando três variáveis 'numero1', 'numero2' e 'numero3' com valores 1, 1 e 1, respectivamente.
let numero1 = 1;
let numero2 = 1;
let numero3 = 1;

// Declarando as variáveis 'maior', 'meio' e 'menor' para armazenar os resultados.
let maior;
let meio;
let menor;

// Utilizando estruturas condicionais para determinar qual número é o menor, o do meio e o maior.
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
        maior = numero2;
    } else {
        meio = numero2;
        maior = numero1;
    }
}

// Imprimindo os números em ordem crescente.
console.log(menor, meio, maior);
