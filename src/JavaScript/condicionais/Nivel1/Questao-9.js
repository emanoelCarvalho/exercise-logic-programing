 /* Dado dois números,  imprimir em ordem decrescente; */

// Declarando duas variáveis 'numero1' e 'numero2' com valores 3 e 4, respectivamente.
let numero1 = 3;
let numero2 = 4;

// Declarando as variáveis 'maior' e 'menor' para armazenar os resultados.
let maior;
let menor;

// Usando uma estrutura condicional para determinar qual número é menor ou igual e qual é maior.
if (numero1 <= numero2) {
    menor = numero1;
    maior = numero2;
} else {
    menor = numero2;
    maior = numero1;
}

// Imprimindo os números em ordem crescente (do menor para o maior).
console.log(menor, maior);
