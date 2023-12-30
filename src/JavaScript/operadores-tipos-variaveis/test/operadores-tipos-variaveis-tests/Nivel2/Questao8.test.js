const { areaTriangulo, altura, base } = require("../../../Nivel2/Questao-8");

describe("Área de um triângulo isósceles", () => {
  test("Área de um triângulo isósceles", () => {
    expect(base).toBe(3);
    expect(altura).toBe(4);
    expect(areaTriangulo).toBe((base * altura) / 2);
  });
});
