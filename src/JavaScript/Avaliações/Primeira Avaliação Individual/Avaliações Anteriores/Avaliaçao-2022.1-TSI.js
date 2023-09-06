/*Primeira Avaliação Individual*/

/*1°) Implemente um programa capaz de, dada uma string entre zero e sete, convertê-la para um número inteiro (entre 0 e 7).*/

let str = "7";


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

function stringToNumber(str) {
    if (str == '7') {
        return 7;
    } else if (str == '6') {
        return 6;
    } else if (str == '5') {
        return 5;
    } else if (str == '4') {
        return 4;
    } else if (str == '3') {
        return 3;
    } else if (str == '2') {
        return 2;
    } else if (str == '1') {
        return 1;
    } else if (str == '0') {
        return 0;
    } else {
        return "Valor inválido";
    }
}

console.log('2° : ', stringToNumber('7'));


/*3°) Faça um programa que, dados dois números, soma todos os números entre eles (inclusive os próprios números). 
Dica: não esqueça de fazer seu código funcionar nos casos não triviais.*/

let numero1 = 10;
let numero2 = 5;

let soma = 0;

while (numero1 >= numero2) {
    soma = soma + numero1;
    numero1--;
}

console.log('3° : ', soma);

 
/*4°) Transforme sua resposta da questão 3 em um subprograma que recebe como parâmetros os números do intervalo e retorna o valor da soma.*/

function somaIntervalo(numero1, numero2) {
    let soma = 0;
    while (numero1 >= numero2) {
        soma = soma + numero1;
        numero1--;
    }
    return soma;

}
console.log('4° : ', somaIntervalo(10, 5));