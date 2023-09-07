/*Primeira Avaliação Individual*/

/*1°) Implemente um programa capaz de, dada uma string entre zero e sete, convertê-la para um número inteiro (entre 0 e 7).*/

// Definindo a string a ser convertida
let str = "7";

// Usando um switch para converter a string em número
switch (str) {
    case '7':
        str = 7;
        break;
    case '6':
        str = 6;
        break;
    case '5':
        str = 5;
        break;
    case '4':
        str = 4;
        break;
    case '3':
        str = 3;
        break;
    case '2':
        str = 2;
        break;
    case '1':
        str = 1;
        break;
    case '0':
        str = 0;
        break;
    default:
        str = "Valor inválido";
        break;
}
console.log('1° : ', str);

/*2°) Transforme sua resposta da questão 1 em um subprograma que recebe como parâmetro a string e retorna o seu valor numérico.*/

// Função para converter a string em número
function stringToNumber(str) {
    switch (str) {
        case '7':
            return 7;
        case '6':
            return 6;
        case '5':
            return 5;
        case '4':
            return 4;
        case '3':
            return 3;
        case '2':
            return 2;
        case '1':
            return 1;
        case '0':
            return 0;
        default:
            return "Valor inválido";
    }
}

console.log('2° : ', stringToNumber('7'));


/*3°) Faça um programa que, dados dois números, soma todos os números entre eles (inclusive os próprios números). 
Dica: não esqueça de fazer seu código funcionar nos casos não triviais.*/

// Definindo dois números para o intervalo
let numero1 = 10;
let numero2 = 5;

let soma = 0;

// Usando um loop while para somar todos os números no intervalo
while (numero1 >= numero2) {
    soma = soma + numero1;
    numero1--;
}

console.log('3° : ', soma);

 
/*4°) Transforme sua resposta da questão 3 em um subprograma que recebe como parâmetros os números do intervalo e retorna o valor da soma.*/

// Função para somar os números no intervalo especificado
function somaIntervalo(numero1, numero2) {
    let soma = 0;
    while (numero1 >= numero2) {
        soma = soma + numero1;
        numero1--;
    }
    return soma;
}

console.log('4° : ', somaIntervalo(10, 5));
