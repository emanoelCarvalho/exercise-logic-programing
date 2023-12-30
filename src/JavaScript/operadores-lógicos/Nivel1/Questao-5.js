/*Identificar se um número não está entre 0 e 15 (intervalo exclusivo)*/

// Defina o número que você deseja verificar se não está entre 0 e 15 (exclusivo).
let numero = 2;

// Use uma estrutura condicional (if-else) para verificar se o número está fora do intervalo.
if (numero > 0 && numero < 15) {
    console.log(numero , 'Está entre 0 e 15'); // Se o número estiver dentro do intervalo, imprime a mensagem apropriada.
} else {
    console.log(numero , 'Não está entre 0 e 15'); // Caso contrário, imprime a mensagem apropriada.
}
