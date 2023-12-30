/*Testar se um número é divisível por 3 mas não por 4 (tente fazer usando apenas if’s);*/

// Declarando a variável 'numero' com o valor 12.
let numero = 12;

// Declarando a variável 'contador' com o valor inicial 0.
let contador = 0;

// Verificando se 'numero' é divisível por 3 e, se for, incrementando 'contador'.
if (numero % 3 === 0) {
    contador++;
}

// Verificando se 'numero' é divisível por 4 e, se for, incrementando 'contador'.
if (numero % 4 === 0) {
    contador++;
}

// Verificando o valor de 'contador' para determinar o resultado.
if (contador === 2) {
    console.log('Divisível por 3 e por 4');
} else if (contador === 1) {
    console.log('Divisível por 3 mas não por 4');
} else {
    console.log('Não é divisível por 3 nem por 4');
}
