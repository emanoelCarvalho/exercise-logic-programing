const  { x, equacao } = require("../../../Nivel1/Questao-8");

test("Calcular a equação f(x) = x³ + x² + 3x - 25", () => {
    expect(x).toBe(3);
    expect(equacao).toBe(x ** 3 + x ** 2 + 3 * x - 25);
});