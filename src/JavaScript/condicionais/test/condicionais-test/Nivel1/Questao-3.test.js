const { execSync } = require("child_process");

test("Testando se um número é divisível por 3 mas não por 4", ()  => {
    const output = execSync("node src/JavaScript/condicionais/Nivel1/Questao-3.js")
        .toString()
        .trim();

    expect(output).toBe("Divisível por 3 mas não por 4");
});