/*Dados três números, encontrar o número do meio (não é o menor, nem o maior);*/

// Dados três números
let numero1 = 0;
let numero2 = 2;
let numero3 = 1;

// Variável para armazenar o número do meio dentro do intervalo [0, 3]
let meio;

// Verifique qual número está no meio dentro do intervalo [0, 3] usando instruções condicionais (if-else)
if (numero1 >= numero2 && numero1 <= 3) {
    meio = numero1; // Se numero1 estiver dentro do intervalo, atribua-o à variável 'meio'
} else if (numero2 >= numero1 && numero2 <= 3) {
    meio = numero2; // Se numero2 estiver dentro do intervalo, atribua-o à variável 'meio'
} else {
    meio = numero3; // Se nenhum dos anteriores estiver dentro do intervalo, atribua numero3 à variável 'meio'
}

// Imprima o número do meio dentro do intervalo
console.log("O número do meio no intervalo [0, 3] é:", meio);
