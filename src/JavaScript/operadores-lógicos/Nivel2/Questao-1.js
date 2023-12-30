/*Dados três números, encontrar o maior entre eles;*/

// Dados três números
let numero1 = 10;
let numero2 = 20;
let numero3 = 30;

// Variável para armazenar o maior número
let maior;

// Verifique qual número é o maior usando instruções condicionais (if-else)
if (numero1 >= numero2 && numero1 >= numero3) {
    maior = numero1; // Se numero1 for o maior, atribua-o à variável 'maior'
} else if (numero2 >= numero1 && numero2 >= numero3) {
    maior = numero2; // Se numero2 for o maior, atribua-o à variável 'maior'
} else {
    maior = numero3; // Se nenhum dos anteriores for o maior, atribua numero3 à variável 'maior'
}

// Imprima o maior número
console.log("O maior número é:", maior);
