const { execSync } = require("child_process");

test("Testando se um número é divisível por 3 e por 4", ()  => {
    const output = execSync("node src/JavaScript/condicionais/Nivel1/Questao-2.js")
        .toString()
        .trim();
    
    expect(output).toBe("Divisível");
})