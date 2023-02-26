/*Dados quatro notas, computar e classificar 
o valor da média das notas de um  estudante como aprovado (> 6), 
reprovado (< 4) e recuperação (caso contrário);*/

let nota1 = 6;
let nota2 = 6;
let nota3 = 10;
let nota4 = 6;

let media = (nota1 + nota2 + nota3 + nota4) / 4;

/*Declarei as váriáveis*/

if (media > 6) {
    console.log(media, ' Aprovado');
} else if (media < 4) {
    console.log(media, ' Reprovado');
} else {
    console.log(media, ' Recuperação');
}

/*Fiz a condicional, para saber se o aluno foi aprovado, reprovado ou ficou de recuperação*/