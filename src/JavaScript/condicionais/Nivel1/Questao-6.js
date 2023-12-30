/* Dividir dois números inteiros e verificar se o resultado é divisível por 10;*/

// Declarando duas variáveis 'numero1' e 'numero2' com valores 100 e 2, respectivamente.
let numero1 = 100;
let numero2 = 2;

// Realizando a divisão dos dois números e armazenando o resultado em 'dividir'.
let dividir = numero1 / numero2;

// Verificando se o resultado da divisão é divisível por 10 (resto da divisão é igual a 0).
if (dividir % 10 === 0) {
    console.log(true);
} else {
    console.log(false);
}
