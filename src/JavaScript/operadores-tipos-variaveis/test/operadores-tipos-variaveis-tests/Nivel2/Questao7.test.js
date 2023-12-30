const {
  volume,
  altura,
  profundidade,
  base,
} = require("../../../Nivel2/Questao-7");

describe("Volume de uma caixa", () => {
  test("Volume de uma caixa", () => {
    expect(base).toBe(5);
    expect(altura).toBe(10);
    expect(profundidade).toBe(2);
    expect(volume).toBe(base * altura * profundidade);
  });
});
