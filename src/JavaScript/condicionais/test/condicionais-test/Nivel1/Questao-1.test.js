const { execSync } = require("child_process");

test("Testando se o quadrado de um numero é maior que ele multiplicado por ", () => {
  const output = execSync("node src/JavaScript/condicionais/Nivel1/Questao-1.js")
    .toString()
    .trim();

  expect(output).toBe("É maior");
});