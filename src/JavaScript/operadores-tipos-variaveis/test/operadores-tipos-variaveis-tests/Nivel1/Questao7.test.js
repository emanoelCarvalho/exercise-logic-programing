const { x, equacao } = require("../../Nivel1/Questao-7");

test("Calcular a equação", () => {
    expect(x).toBe(2);
    expect(equacao).toBe(x ** 2 + 2 * x - 3);
})