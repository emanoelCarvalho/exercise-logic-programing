const { volume, raio, altura, areaBase } = require("../../../Nivel2/Questao-6");

describe("Volume de um cilindro", () => {
  test("Volume de um cilindro", () => {
    expect(raio).toBe(5);
    expect(altura).toBe(10);
    expect(areaBase).toBe(Math.PI * raio * raio);
    expect(volume).toBe(areaBase * altura);
  });
});
