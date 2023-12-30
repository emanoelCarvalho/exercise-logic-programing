const {
  numero1,
  numero2,
  numero3,
  numero4,
  numero5,
  numero6,
  media,
} = require("../../../Nivel2/Questao-1");

describe("Média de seis números", () => {
  test("Média de seis números", () => {
    expect(numero1).toBe(6);
    expect(numero2).toBe(6);
    expect(numero3).toBe(6);
    expect(numero4).toBe(6);
    expect(numero5).toBe(6);
    expect(numero6).toBe(6);
    expect(media).toBe((numero1 + numero2 + numero3 + numero4 + numero5 + numero6) / 6);
  });
});
