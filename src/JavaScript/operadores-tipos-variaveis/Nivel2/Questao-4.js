/*Imprimir perímetro de um círculo (2 vezes PI vezes raio);*/

// Valor de PI (usando a biblioteca Math)
let PI = Math.PI;

// Raio do círculo
let raio = 3;

// Cálculo do perímetro do círculo
let perimetro = 2 * PI * raio;

// Imprime o perímetro do círculo
console.log("O perímetro do círculo é:", perimetro);

module.exports = { perimetro, PI, raio };