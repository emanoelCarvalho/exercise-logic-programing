const { x, y, equacaoSegundoGrau } = require("../../../Nivel2/Questao-5");

describe("Testes para verificar se a equação de segundo grau está correta", () => {
  test("Teste para verificar se o valor da equação de segundo grau está correto", () => {
    expect(equacaoSegundoGrau).toBe(10);
  });
});
