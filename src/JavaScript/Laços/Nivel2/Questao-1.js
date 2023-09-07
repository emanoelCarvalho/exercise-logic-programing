/*Multiplicar dois números sem usar o operador da multiplicação (Dica: 5x3 = 5 + 5 + 5);
*/

 
// Defina os números que você deseja multiplicar.
let numero1 = 3;
let numero2 = 5;

// Inicialize a variável 'vezes' com o valor inicial de 0.
let vezes = 0;

// Use um loop for para realizar a multiplicação por adição.
for (let i = 0; i < numero1; i++) {
    vezes += numero2; // Adicione 'numero2' à variável 'vezes' 'numero1' vezes.
}

// Imprima o resultado da multiplicação.
console.log(vezes);
