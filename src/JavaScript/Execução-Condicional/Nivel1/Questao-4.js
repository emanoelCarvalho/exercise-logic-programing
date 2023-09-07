/*Testar se um número é divisível por 2 ou por 7 (tente fazer usando apenas if’s); */

// Declarando a variável 'numero' com o valor 53.
let numero = 53;

// Declarando a variável 'contador' com o valor inicial 0.
let contador = 0;

// Verificando se 'numero' é divisível por 2 e, se for, incrementando 'contador'.
if (numero % 2 === 0) {
    contador++;
}

// Verificando se 'numero' é divisível por 7 e, se for, incrementando 'contador'.
if (numero % 7 === 0) {
    contador++;
}

// Verificando se 'contador' é maior ou igual a 1 para determinar se o número é divisível por 2 ou por 7.
if (contador >= 1) {
    console.log(true);
} else {
    console.log(false);
}
