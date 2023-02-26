/*Dado o dia da semana, imprime as aulas que os estudantes do primeiro semestre terão no dia;*/

let diaDaSemana = 'sabado';

let materias;

switch (diaDaSemana) {
    case 'segunda':
        materias = 'Mat, Mat,  Port, Port e Edf';
        break;
    case 'terça':
        materias = 'Mat, Mat,  Ing, Ing e Hist';
        break;
    case 'quarta':
        materias = 'Geo, Geo,  Bio, Bio e Edf';
        break;
    case 'quinta':
        materias = 'Hist, Hist,  Port, Port e Fis';
        break;
    case 'sexta':
        materias = 'Fis, Qim,  Qui, Geo e Fis';
        break;
    case 'sabado':
        materias = 'Não tem aula';
        break;
    case 'domingo':
        materias = 'Não tem aula';
        break;
}

console.log(materias);