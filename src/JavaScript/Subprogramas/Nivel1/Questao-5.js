// Computar e retornar o valor de f(x) na seguinte função matemática: f(x) = x² + 2x + 3;

// Função para calcular o valor de f(x) = x² + 2x + 3
function functionMatematica(x) {
    let equacao = x ** 2 + 2 * x + 3;
    return equacao;
}

// Chamada da função com um valor de exemplo
let resultado = functionMatematica(2);
console.log("O resultado da função f(x) é:", resultado);
