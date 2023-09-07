/*Computar o Índice de Massa Corporal (peso dividido pelo quadrado da altura) e classificar o resultado
 entre magreza (inferior a 18.5), saudável (entre 18.5 e 25), sobrepeso (acima de 25);*/

// Declarando duas variáveis 'peso' e 'altura' com valores 100 e 1.70, respectivamente.
let peso = 100;
let altura = 1.70;

// Calculando o Índice de Massa Corporal (IMC) usando a fórmula IMC = peso / (altura * altura) e armazenando o resultado em 'imc'.
let imc = peso / (altura ** 2);

// Utilizando uma estrutura condicional para classificar o IMC.
if (imc < 18.5) {
    console.log(imc, 'Magreza');
} else if (imc > 25) {
    console.log(imc, 'Sobrepeso');
} else {
    console.log(imc, 'Saudável');
}
