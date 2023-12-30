const {
  peso1,
  peso2,
  peso3,
  peso4,
  numero1,
  numero2,
  numero3,
  numero4,
  mediaPonderada,
} = require("../../../Nivel2/Questao-2");

describe("Média ponderada de quatro números", () => {
  test("Média ponderada de quatro números", () => {
    expect(numero1).toBe(5);
    expect(numero2).toBe(5);
    expect(numero3).toBe(5);
    expect(numero4).toBe(5);
    expect(peso1).toBe(3);
    expect(peso2).toBe(1);
    expect(peso3).toBe(4);
    expect(peso4).toBe(2);
    expect(mediaPonderada).toBe(
      (numero1 * peso1 + numero2 * peso2 + numero3 * peso3 + numero4 * peso4) /
        (peso1 + peso2 + peso3 + peso4)
    );
  });
});
