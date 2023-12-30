/*Identificar se duas variáveis são pares e negativas ao mesmo tempo;*/


// Defina as duas variáveis que você deseja verificar se são pares e negativas ao mesmo tempo.
let number1 = -20;
let number2 = -13;

// Inicialize a variável 'contador' com o valor inicial de 0.
let contador = 0;

// Use uma série de estruturas condicionais (if) para verificar se cada variável atende aos critérios.
if (number1 % 2 === 0 && number1 < 0) {
    contador++; // Se 'number1' for par e negativo, incrementa 'contador'.
}
if (number2 % 2 === 0 && number2 < 0) {
    contador++; // Se 'number2' for par e negativo, incrementa 'contador'.
}

// Use um operador ternário para verificar se ambas as variáveis atendem aos critérios.
// Se 'contador' for igual a 2, ambas as variáveis são pares e negativas, imprime 'V'.
// Caso contrário, imprime 'F'.
contador === 2 ? console.log('V') : console.log('F');
