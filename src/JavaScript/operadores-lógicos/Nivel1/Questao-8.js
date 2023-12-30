/*Dados quatro números, contar quantos entre eles são divisíveis por 5 e 7 ao mesmo tempo;*/

// Defina os quatro números que você deseja verificar se são divisíveis por 5 e 7 ao mesmo tempo.
let numero1 = 35;
let numero2 = 5;
let numero3 = 5;
let numero4 = 35;

// Inicialize a variável 'contar' com o valor inicial de 0.
let contar = 0;

// Use uma série de estruturas condicionais (if) para verificar a divisibilidade de cada número.
if (numero1 % 5 === 0 && numero1 % 7 === 0) {
    contar++; // Se o número1 for divisível por 5 e 7 ao mesmo tempo, incrementa 'contar'.
}
if (numero2 % 5 === 0 && numero2 % 7 === 0) {
    contar++; // Se o número2 for divisível por 5 e 7 ao mesmo tempo, incrementa 'contar'.
}
if (numero3 % 5 === 0 && numero3 % 7 === 0) {
    contar++; // Se o número3 for divisível por 5 e 7 ao mesmo tempo, incrementa 'contar'.
}
if (numero4 % 5 === 0 && numero4 % 7 === 0) {
    contar++; // Se o número4 for divisível por 5 e 7 ao mesmo tempo, incrementa 'contar'.
}

// O valor de 'contar' representa quantos dos números são divisíveis por 5 e 7 ao mesmo tempo.
console.log(contar);
