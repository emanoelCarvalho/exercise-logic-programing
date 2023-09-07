/*Identificar se duas variáveis são ímpares e positivas ao mesmo tempo.*/


// Defina as duas variáveis que você deseja verificar se são ímpares e positivas ao mesmo tempo.
let number1 = 13;
let number2 = 13;

// Inicialize a variável 'contador' com o valor inicial de 0.
let contador = 0;

// Use uma série de estruturas condicionais (if) para verificar se cada variável atende aos critérios.
if (number1 % 2 !== 0 && number1 > 0) {
    contador++; // Se 'number1' for ímpar e positivo, incrementa 'contador'.
}
if (number2 % 2 !== 0 && number2 > 0) {
    contador++; // Se 'number2' for ímpar e positivo, incrementa 'contador'.
}

// Use um operador ternário para verificar se ambas as variáveis atendem aos critérios.
// Se 'contador' for igual a 2, ambas as variáveis são ímpares e positivas, imprime 'V'.
// Caso contrário, imprime 'F'.
contador === 2 ? console.log('V') : console.log('F');
