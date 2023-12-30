/*Imprimir área de um triângulo isósceles (base vezes altura dividido por dois).*/

// Medidas da base e altura do triângulo isósceles
let base = 3;
let altura = 4;

// Cálculo da área do triângulo isósceles (base vezes altura dividido por dois)
let areaTriangulo = (base * altura) / 2;

// Imprime a área do triângulo isósceles
console.log("A área do triângulo isósceles é:", areaTriangulo);

module.exports = { areaTriangulo, base, altura };