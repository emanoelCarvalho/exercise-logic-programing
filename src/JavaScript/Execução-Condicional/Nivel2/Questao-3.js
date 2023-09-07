/*Dados quatro notas, computar e classificar 
o valor da média das notas de um  estudante como aprovado (> 6), 
reprovado (< 4) e recuperação (caso contrário);*/

// Declarando quatro variáveis 'nota1', 'nota2', 'nota3' e 'nota4' com valores 6, 6, 10 e 6, respectivamente.
let nota1 = 6;
let nota2 = 6;
let nota3 = 10;
let nota4 = 6;

// Calculando a média das notas e armazenando o resultado em 'media'.
let media = (nota1 + nota2 + nota3 + nota4) / 4;

// Utilizando uma estrutura condicional para classificar o resultado da média.
if (media > 6) {
    console.log(media, 'Aprovado');
} else if (media < 4) {
    console.log(media, 'Reprovado');
} else {
    console.log(media, 'Recuperação');
}
