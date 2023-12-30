/*Dados três números, encontrar o menor entre eles;*/

// Dados três números
let numero1 = 10;
let numero2 = 20;
let numero3 = 30;

// Variável para armazenar o menor número
let menor;

// Verifique qual número é o menor usando instruções condicionais (if-else)
if (numero1 <= numero2 && numero1 <= numero3) {
    menor = numero1; // Se numero1 for o menor, atribua-o à variável 'menor'
} else if (numero2 <= numero1 && numero2 <= numero3) {
    menor = numero2; // Se numero2 for o menor, atribua-o à variável 'menor'
} else {
    menor = numero3; // Se nenhum dos anteriores for o menor, atribua numero3 à variável 'menor'
}

// Imprima o menor número
console.log("O menor número é:", menor);
