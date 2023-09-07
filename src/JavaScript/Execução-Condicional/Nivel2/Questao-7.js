/*Converter o dia da semana (string) em um valor numérico (“domingo” -> 0, “segunda” -> 1, etc.)*/

// Declarando uma variável 'dia' com o valor 'Segunda' (ou qualquer outro dia da semana que você queira converter).
let dia = 'Segunda';

// Utilizando a estrutura de controle switch para converter o dia da semana em um valor numérico.
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

// Imprimindo o valor numérico correspondente ao dia da semana.
console.log(dia);
