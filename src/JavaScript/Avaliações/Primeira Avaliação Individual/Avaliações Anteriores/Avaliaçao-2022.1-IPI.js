/*
1°) Implemente um programa capaz de computar o índice de Massa Corporal (IMC) e classificá-lo de acordo com a seguinte tabela:

IMC
Categoria
Abaixo de 18.50
Baixo peso
De 18.50 até 25.00
Peso ideal
Acima de 25.00
Sobrepeso

Fórmula do IMC: peso / altura²
*/

// Definindo o peso e a altura
let peso = 67;
let altura = 180;

// Calculando o IMC usando a fórmula
let imc = peso / (altura ** 2);

// Verificando a categoria do IMC e exibindo-a no console
if (imc < 18.5) {
    console.log('1° :', 'Baixo peso');
} else if (imc >= 18.5 && imc <= 25) {
    console.log('1° :', 'Peso ideal');
} else {
    console.log('1° :', 'Sobrepeso');
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* 2°) Transforme sua resposta da questão 1 em um subprograma que recebe como parâmetros o peso e a altura da pessoa, e retorna uma string com a categoria do IMC.*/

// Função para calcular o IMC e retornar a categoria
function indiceDeMassa(peso, altura) {
    let imc = peso / (altura ** 2);
    if (imc < 18.5) {
        return "Baixo peso";
    } else if (imc >= 18.5 && imc <= 25) {
        return "Peso ideal";
    } else {
        return "Sobrepeso";
    }
}

// Chamando a função e exibindo o resultado no console
console.log('2° :', indiceDeMassa(67, 180));

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*3°) Faça um programa que, dados dois números, imprime todos os números entre eles (inclusive os próprios números). Dica: não esqueça de fazer seu código funcionar nos casos não triviais.*/

// Definindo dois números para o intervalo
let numero1 = 10;
let numero2 = 5;

// Usando um loop while para imprimir todos os números entre os dois números, incluindo-os
while (numero1 >= numero2) {
   console.log('3° :', numero1);
   numero1--;
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*4°) Transforme sua resposta da questão 3 em um subprograma que recebe como parâmetros os números do intervalo e imprime os números entre eles.*/

// Função para imprimir os números entre os dois números do intervalo
function imprimeIntervalo(numero1, numero2) {
    while (numero1 >= numero2) {
        console.log('4° :', numero1);
        numero1--;
    }
}

// Chamando a função para imprimir os números do intervalo
imprimeIntervalo(10, 5);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
