const { PI, perimetro, raio } = require("../../../Nivel2/Questao-4");

describe("Perímetro de um círculo", () => {
  test("Perímetro de um círculo", () => {
    expect(PI).toBe(Math.PI);
    expect(raio).toBe(3);
    expect(perimetro).toBe(2 * PI * raio);
  });
});
