/*
1°) Implemente um programa capaz de computar a força gravitacional entre dois corpos de acordo com a seguinte fórmula:

F=GM1.M2d²
Onde:
F é a força gravitacional;
G é a constante gravitacional universal (6.67/(10¹¹));
M1 e M2 são as massas dos corpos em execução;
D é a distância entre os corpos.
*/

// Definindo a constante gravitacional G
let G = 6.67 / (10 ** 11);

// Definindo as massas dos corpos M1 e M2, e a distância D
let M1 = 10;
let M2 = 5;
let D = 2;

// Calculando a força gravitacional usando a fórmula
let f = G * M1 * M2 / (D ** 2);

// Exibindo o resultado no console
console.log('1° : ', f);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* 2°) Implemente um programa capaz de testar se dois números 
são negativos ao mesmo tempo. (obs: não é permitido o uso de operadores
lógicos nesta questão).*/

// Definindo dois números para teste
let number1 = 10;
let number2 = 5;

// Verificando se ambos os números são negativos sem usar operadores lógicos
if (number1 < 0) {
    if (number2 < 0) {
        console.log('2° : ', "Os dois números são negativos");
    }
} else {
    console.log('2° : ', "Os dois números não são negativos ao mesmo tempo");
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* 3°) Implemente um programa capaz de testar se quatro números são negativos ao mesmo tempo.*/

// Definindo quatro números para teste
let numero1 = 10;
let numero2 = 5;
let numero3 = 2;
let numero4 = 1;

// Função para testar se todos os quatro números são negativos
function testaNegativos(numero1, numero2, numero3, numero4) {
    if (numero1 < 0) {
        if (numero2 < 0) {
            if (numero3 < 0) {
                if (numero4 < 0) {
                    return true;
                }
            }
        }
    }
    return false;
}

// Exibindo o resultado do teste no console
console.log('3° : ', testaNegativos(numero1, numero2, numero3, numero4));

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* 4°) Implemente um programa capaz de, dado um número, imprimir todos os divisores ímpares dele.*/

// Definindo um número para encontrar seus divisores ímpares
let numero = 10;

// Função para encontrar e imprimir divisores ímpares
function divisoresImpares(numero) {
    for (let i = 1; i <= numero; i++) {
        if (numero % i == 0) {
            if (i % 2 != 0) {
                console.log('4° : ', i);
            }
        }
    }
}

// Chamando a função para encontrar e imprimir divisores ímpares do número
divisoresImpares(numero);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* 5°) Transforme sua resposta da primeira questão em um subprograma capaz de computar e retornar o valor da força gravitacional entre dois corpos,
 dados: M1, M2 e d como parâmetros.*/

// Definindo a constante gravitacional G novamente
let g = 6.67 / (10 ** 11);

// Definindo as massas dos corpos M1, M2, e a distância D
let m1 = 10;
let m2 = 5;
let d = 2;

// Função para calcular a força gravitacional
function forcaGravitacional(m1, m2, d) {
    let forçaG = g * m1 * m2 / (d ** 2);
    return forçaG;
}

// Chamando a função para calcular a força gravitacional e exibindo o resultado no console
console.log('5° :' ,forcaGravitacional(m1, m2, d));
