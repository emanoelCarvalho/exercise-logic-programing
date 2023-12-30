/*Dividir dois números sem usar o operador da divisão (Dica: 9/3 = 9 - 3 - 3 - 3);*/

// Defina os números que você deseja dividir.
let numero1 = 1000;
let numero2 = 100;

// Inicialize a variável 'div' com o valor inicial de 0.
let div = 0;

// Use um loop while para realizar a divisão por subtração.
while (numero1 >= numero2) {
    numero1 -= numero2; // Subtraia 'numero2' de 'numero1'.
    div++; // Incremente a variável 'div' para contar quantas vezes a subtração foi realizada.
}

// Imprima o resultado da divisão.
console.log(div);
