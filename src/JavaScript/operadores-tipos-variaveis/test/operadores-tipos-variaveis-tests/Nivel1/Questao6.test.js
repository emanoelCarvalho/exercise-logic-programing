const { segundos, horas } = require("../../Nivel1/Questao-6");

test("Converter segundos em horas", () => {
    expect(segundos).toBe(3600);
    expect(horas).toBe(segundos / 3600);
});