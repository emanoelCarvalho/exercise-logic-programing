/*Converter o dia da semana (string) em um valor numérico (“domingo” -> 0, “segunda” -> 1, etc.)*/

let dia = 'Segunda';

/*Declarei uma variável dia*/

switch (dia) {
    case 'Domingo':
        dia = 0;
        break;
    case 'Segunda':
        dia = 1;
        break;
    case 'Terça':
        dia = 2;
        break;
    case 'Quarta':
        dia = 3;
        break;
    case 'Quinta':
        dia = 4;
        break;
    case 'Sexta':
        dia = 5;
        break;
    case 'Sabado':
        dia = 6;
        break;
}
/*Utilizei swicth case, pois, me ajuda a ter uma visualização melhor do código*/

console.log(dia);
/*Chamei o console, para imprimir o valor do dia da semana*/