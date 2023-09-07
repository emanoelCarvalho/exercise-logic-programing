/*Converter texto em um número inteiro (“um” -> 1, “dois” -> 2, até o número “cinco”)*/

// Defina o texto que você deseja converter em um número.
let texto = 'cinco';

// Declare uma variável para armazenar o número resultante.
let numero;

// Use uma estrutura switch-case para lidar com diferentes casos de texto.
switch (texto) {
    case 'um':
        numero = 1; // Se 'texto' for igual a 'um', atribui o valor 1 a 'numero'.
        break; // Encerra o caso 'um'.
    case 'dois':
        numero = 2; // Se 'texto' for igual a 'dois', atribui o valor 2 a 'numero'.
        break; // Encerra o caso 'dois'.
    case 'tres':
        numero = 3; // Se 'texto' for igual a 'tres', atribui o valor 3 a 'numero'.
        break; // Encerra o caso 'tres'.
    case 'quatro':
        numero = 4; // Se 'texto' for igual a 'quatro', atribui o valor 4 a 'numero'.
        break; // Encerra o caso 'quatro'.
    case 'cinco':
        numero = 5; // Se 'texto' for igual a 'cinco', atribui o valor 5 a 'numero'.
        break; // Encerra o caso 'cinco'.
}

// Imprima o valor final de 'numero' no console.
console.log(numero);
