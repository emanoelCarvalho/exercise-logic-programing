/*Solucionar a equação: f(x, z) = x³ + z² + 3xz - 25;*/

// Valores de x e z
let x = 2;
let z = 3;

// Cálculo da equação de segundo grau
let equacaoSegundoGrau = x ** 3 + z ** 2 + 3 * x * z - 25;

// Imprime o resultado da equação
console.log("O resultado da equação f(x, z) =", equacaoSegundoGrau);
 
module.exports = { equacaoSegundoGrau, x, z };