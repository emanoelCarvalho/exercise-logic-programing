/*Primeira Avaliação Individual - 2021.02
1°) Implemente um programa capaz de computar o espaço percorrido por um objeto de acordo com a seguinte fórmula:

S=s0+v0t+12at2
Onde:
S é o espaço percorrido pelo objeto;
s0 é o espaço inicial do objeto;
v0 é a velocidade inicial do objeto;
a é aceleração do objeto;
t é o tempo durante o qual o deslocamento do objeto foi medido.*/

let s0 = 4;
let v0 = 3;
let a = 2;
let t = 1;
let s = s0 + v0 * t + (1 / 2) * a * t ** 2;
console.log('1° : ', s);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*2°) Implemente um programa capaz de testar se dois números são ímpares ao mesmo tempo.
 (obs: não é permitido o uso de operadores lógicos nesta questão).*/


let numero1 = 3;
let numero2 = 5;

if (numero1 % 2 != 0) {
    if (numero2 % 2 != 0) {
        console.log('2° : ', "Os números são ímpares ao mesmo tempo");
    } else {
        console.log('2° : ', "Os números não são ímpares ao mesmo tempo");
    }
} else {
    console.log('2° : ', "Os números não são ímpares ao mesmo tempo");
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*3°) Implemente um programa capaz de testar se quatro números são divisíveis por 5 ao mesmo tempo.*/

let numeroOne = 5;
let numeroTwo = 10;
let numeroThree = 15;
let numeroFour = 20;

if (numeroOne % 5 == 0 && numeroTwo % 5 == 0 && numeroThree % 5 == 0 && numeroFour % 5 == 0) {
    console.log('3° :', "Os números são divisíveis por 5 ao mesmo tempo");
} else {
    console.log('3° :', "Os números não são divisíveis por 5 ao mesmo tempo");
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*4°) Implemente um programa capaz de realizar a divisão inteira entre dois números, utilizando apenas os operadores da soma e da subtração.*/

let dividendo = 10;
let divisor = 3;

let quociente = 0;
let resto = dividendo;

while (resto >= divisor) {
    resto = resto - divisor;
    quociente = quociente + 1;
}

console.log('4° : ', "Quociente: " + quociente);
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*5°) Transforme sua resposta da primeira questão em um subprograma capaz de computar e
 retornar o espaço percorrido por um corpo, dados: s0, v0, a e t como parâmetros.*/

function calculaEspaco(s0, v0, a, t) {
    let s = s0 + v0 * t + (1 / 2) * a * t ** 2;
    return s;
}

console.log('5° : ', calculaEspaco(4, 3, 2, 1));

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////