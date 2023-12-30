const { peso, altura, imc } = require("../../../Nivel2/Questao-3");

describe("Índice de Massa Corporal (IMC)", () => {
  test("Índice de Massa Corporal (IMC)", () => {
    expect(peso).toBe(90);
    expect(altura).toBe(1.7);
    expect(imc).toBe(peso / altura ** 2);
  });
});
