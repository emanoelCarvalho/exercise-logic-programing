/*Testar se um número é divisível por 3 e por 4 (tente fazer usando apenas if’s);*/

// Declarando a variável 'numero' com o valor 12.
let numero = 12;

// Declarando a variável 'contador' com o valor 0.
let contador = 0;

// Verificando se 'numero' é divisível por 3 e, se for, incrementando 'contador'.
if (numero % 3 === 0) {
    contador++;
}

// Verificando se 'numero' é divisível por 4 e, se for, incrementando 'contador'.
if (numero % 4 === 0) {
    contador++;
}

// Verificando se 'contador' é igual a 2, o que significa que 'numero' é divisível por ambos 3 e 4.
if (contador === 2) {
    console.log('Divisível');
} else {
    console.log('Indivisível');
}
