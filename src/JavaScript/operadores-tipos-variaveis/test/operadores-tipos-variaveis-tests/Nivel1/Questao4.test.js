const { lado1, lado2, lado3, lado4, lado5, perimetro } = require("../../Nivel1/Questao-4");

test("Calcular o perímetro de um pentágono", () => {
    expect(lado1).toBe(5);
    expect(lado2).toBe(5);
    expect(lado3).toBe(5);
    expect(lado4).toBe(5);
    expect(lado5).toBe(5);
    expect(perimetro).toBe(lado1 + lado2 + lado3 + lado4 + lado5);
});