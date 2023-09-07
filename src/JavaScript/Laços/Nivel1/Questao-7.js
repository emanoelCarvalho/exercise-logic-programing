/*Imprimir os quadrados dos 10 primeiros números inteiros;
*/

// Inicialize a variável 'quadrados' com o valor inicial de 0.
let quadrados = 0;

// Use um loop for para calcular e imprimir os quadrados dos 10 primeiros números inteiros.
for (let i = 0; i <= 10; i++) { // Inicie a partir de 0 e continue até 10 para calcular os quadrados dos números de 0 a 10.
    quadrados = i ** 2; // Calcula o quadrado do número atual 'i' e atribui a 'quadrados'.
    console.log(quadrados); // Imprime o quadrado do número atual.
}
