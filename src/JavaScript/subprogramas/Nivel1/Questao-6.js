// Computar e retornar o valor de f(x) na seguinte função matemática: f(x) = x³ - 4x + 1;

// Função para calcular o valor de f(x) = x³ - 4x + 1
function funcaoMatematica(x) {
    let equacao = x ** 3 - 4 * x + 1;
    return equacao;
}

// Chamada da função com um valor de exemplo
let resultado = funcaoMatematica(3);
console.log("O resultado da função f(x) é:", resultado);
