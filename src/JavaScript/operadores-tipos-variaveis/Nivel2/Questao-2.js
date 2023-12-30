/*Imprimir média ponderada de quatro números (pesos 3, 1, 4 e 2);*/

// Números a serem calculados
let numero1 = 5;
let numero2 = 5;
let numero3 = 5;
let numero4 = 5;

// Pesos correspondentes
let peso1 = 3;
let peso2 = 1;
let peso3 = 4;
let peso4 = 2;

// Cálculo da média ponderada
let mediaPonderada = (numero1 * peso1 + numero2 * peso2 + numero3 * peso3 + numero4 * peso4) / (peso1 + peso2 + peso3 + peso4);

// Imprime a média ponderada
console.log("A média ponderada é:", mediaPonderada);
 

module.exports = { mediaPonderada, numero1, numero2, numero3, numero4, peso1, peso2, peso3, peso4 };