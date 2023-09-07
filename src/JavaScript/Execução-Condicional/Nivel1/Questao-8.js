/* Dado dois números, imprimir em ordem crescente; */

// Declarando duas variáveis 'numero1' e 'numero2' com valores 3 e 4, respectivamente.
let numero1 = 3;
let numero2 = 4;

// Declarando as variáveis 'maior' e 'menor' para armazenar os resultados.
let maior;
let menor;

// Usando uma estrutura condicional para determinar qual número é maior e qual é menor.
if (numero1 >= numero2) {
    maior = numero1;
    menor = numero2;
} else {
    maior = numero2;
    menor = numero1;
}

// Imprimindo os números em ordem crescente.
console.log(menor, maior);
