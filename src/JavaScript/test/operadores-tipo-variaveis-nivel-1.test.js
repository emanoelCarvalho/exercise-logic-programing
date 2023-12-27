// Importa o código que deseja testar
const { aresta, perimetro } = require('../Operadores-Tipos-Variaveis/Nivel1/Questao-1');

test('calcula o perímetro de um triângulo equilátero', () => {
  // Verifica se a variável aresta tem o valor esperado
  expect(aresta).toBe(3);

  // Verifica se o resultado do cálculo do perímetro é o esperado
  expect(perimetro).toBe(9);
});
