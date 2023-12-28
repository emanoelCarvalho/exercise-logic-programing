const {aresta, perimetro} = require("../../Nivel1/Questao-1");

test("Calcular o perimetro de um triangulo equilatero", () => {
    expect(aresta).toBe(3);

    expect(perimetro).toBe(aresta * 3);
})
