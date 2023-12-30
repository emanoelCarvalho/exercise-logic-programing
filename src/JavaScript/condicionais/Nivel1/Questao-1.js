/*Testar se o quadrado de um número é maior do que ele multiplicado por 10;*/

// Declarando uma variável 'numero' e atribuindo o valor 11 a ela.
let numero = 11;

// Calculando o quadrado do número e armazenando-o em 'quadradoNumero'.
let quadradoNumero = numero ** 2;

// Calculando o valor do número multiplicado por 10 e armazenando-o em 'multiplicadoPor10'.
let multiplicadoPor10 = numero * 10;

// Usando uma estrutura condicional 'if' para verificar se 'quadradoNumero' é maior que 'multiplicadoPor10'.
if (quadradoNumero > multiplicadoPor10) {
    console.log('É maior');
} else {
    console.log('Não é maior');
}
