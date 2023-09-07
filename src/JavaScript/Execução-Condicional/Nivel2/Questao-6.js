/*Dado o dia da semana, imprime as aulas que os estudantes do primeiro semestre terão no dia;*/

// Declarando uma variável 'diaDaSemana' com o valor 'sabado'.
let diaDaSemana = 'sabado';

// Declarando uma variável 'materias' para armazenar as aulas do dia.
let materias;

// Utilizando a estrutura de controle switch para determinar as aulas com base no dia da semana.
switch (diaDaSemana) {
    case 'segunda':
        materias = 'Mat, Mat, Port, Port e Edf';
        break;
    case 'terça':
        materias = 'Mat, Mat, Ing, Ing e Hist';
        break;
    case 'quarta':
        materias = 'Geo, Geo, Bio, Bio e Edf';
        break;
    case 'quinta':
        materias = 'Hist, Hist, Port, Port e Fis';
        break;
    case 'sexta':
        materias = 'Fis, Qim, Qui, Geo e Fis';
        break;
    case 'sabado':
        materias = 'Não tem aula';
        break;
    case 'domingo':
        materias = 'Não tem aula';
        break;
}

// Imprimindo as aulas do dia com base no valor de 'materias'.
console.log(materias);
