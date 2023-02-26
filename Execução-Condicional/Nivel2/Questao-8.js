/*Converter texto em um número inteiro (“um” -> 1, “dois” -> 2, até o número “cinco”)*/

let texto = 'cinco';
let numero;

/*Declarei as variáveis, que utilizarei*/

switch (texto) {
    case 'um':
        numero = 1;
        break;
    case 'dois':
        numero = 2;
        break;
    case 'tres':
        numero = 3;
        break;
    case 'quatro':
        numero = 4;
        break;
    case 'cinco':
        numero = 5;
        break;
}

/*Utilizei switch case, pois, como são inúmeros possibilidades, acredito que seja a maneira mais sensata de trabalhar*/

console.log(numero);

/*Chamei o console, para imprimir o resultado*/