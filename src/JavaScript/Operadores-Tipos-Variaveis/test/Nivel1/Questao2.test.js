const {aresta, perimetro  } = require("../../Nivel1/Questao-2");

test("Calcular o perimetro de um quadrado", () => {
    expect(aresta).toBe(4);

    expect(perimetro).toBe(aresta * 4);
})