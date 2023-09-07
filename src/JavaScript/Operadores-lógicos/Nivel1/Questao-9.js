/*Dados quatro números, contar quantos entre eles são divisíveis por 3 ou 4*/

// Defina os quatro números que você deseja verificar se são divisíveis por 3 ou 4.
let numero1 = 12;
let numero2 = 12;
let numero3 = 9;
let numero4 = 12;

// Inicialize a variável 'contador' com o valor inicial de 0.
let contador = 0;

// Use uma série de estruturas condicionais (if) para verificar a divisibilidade de cada número.
if (numero1 % 3 === 0 || numero1 % 4 === 0) {
    contador++; // Se o número1 for divisível por 3 ou 4, incrementa 'contador'.
}
if (numero2 % 3 === 0 || numero2 % 4 === 0) {
    contador++; // Se o número2 for divisível por 3 ou 4, incrementa 'contador'.
}
if (numero3 % 3 === 0 || numero3 % 4 === 0) {
    contador++; // Se o número3 for divisível por 3 ou 4, incrementa 'contador'.
}
if (numero4 % 3 === 0 || numero4 % 4 === 0) {
    contador++; // Se o número4 for divisível por 3 ou 4, incrementa 'contador'.
}

// O valor de 'contador' representa quantos dos números são divisíveis por 3 ou 4.
console.log(contador);
