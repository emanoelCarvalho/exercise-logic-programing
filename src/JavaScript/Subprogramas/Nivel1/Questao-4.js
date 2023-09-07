// Receber como parâmetro quatro números e retornar o valor da soma dos seus quadrados;

// Função para calcular a soma dos quadrados de quatro números
function somaQuadrados(numero1, numero2, numero3, numero4) {
    let soma;
    soma = numero1 ** 2 + numero2 ** 2 + numero3 ** 2 + numero4 ** 2;
    return soma;
}

// Chamada da função com valores de exemplo
console.log(somaQuadrados(1, 2, 3, 0));
