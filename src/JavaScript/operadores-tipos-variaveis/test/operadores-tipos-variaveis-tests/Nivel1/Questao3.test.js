const {lado1, lado2, lado3, lado4, perimetro} = require("../../../Nivel1/Questao-3")

test("Calcular o perímetro de um retângulo", () => {
    expect(lado1).toBe(5);
    expect(lado2).toBe(3);
    expect(lado3).toBe(5);
    expect(lado4).toBe(3);
    expect(perimetro).toBe(lado1 + lado2 + lado3 + lado4);
})