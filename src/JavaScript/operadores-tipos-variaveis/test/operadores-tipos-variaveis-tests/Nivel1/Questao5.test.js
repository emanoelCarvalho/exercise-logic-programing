const { lado1, lado2, lado3, lado4, lado5, lado6, perimetro} = require("../../../Nivel1/Questao-5");

test("Calcular o perímetro de um hexágono", () => {
    expect(lado1).toBe(6);
    expect(lado2).toBe(6);
    expect(lado3).toBe(6);
    expect(lado4).toBe(6);
    expect(lado5).toBe(6);
    expect(lado6).toBe(6);
    expect(perimetro).toBe(lado1 + lado2 + lado3 + lado4 + lado5 + lado6);
});