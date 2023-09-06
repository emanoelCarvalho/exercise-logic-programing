/*
1°)Implemente um programa capaz de computar o índice de Massa Corporal (IMC) e classificá-lo de acordo com a seguinte tabela:

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

let peso = 67;
let altura = 180;
let imc = peso / (altura ** 2);

if (imc < 18.5) {
    console.log('1° :', 'Baixo peso');
} else if (imc >= 18.5 && imc <= 25) {
    console.log('1° :', 'Peso ideal');
} else {
    console.log('1° :', 'Sobrepeso');
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*2°) Transforme sua resposta da questão 1 em um subprograma que recebe como parâmetros o peso e a altura da pessoa, e retorna uma string com a categoria do IMC.*/

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

console.log('2° :', indiceDeMassa(67, 180));

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*3°) Faça um programa que, dados dois números, imprime todos os números entre eles (inclusive os próprios números). Dica: não esqueça de fazer seu código funcionar nos casos não triviais.*/

let numero1 = 10;
let numero2 = 5;

while (numero1 >= numero2) {
   console.log('3° :', numero1, );
    numero1--;
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/*4°) Transforme sua resposta da questão 3 em um subprograma que recebe como parâmetros os números do intervalo e imprime os números entre eles.*/

function imprimeIntervalo(numero1, numero2) {
    while (numero1 >= numero2) {
        console.log('4° :', numero1 );
        numero1--;
    }
}

imprimeIntervalo(10, 5);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
