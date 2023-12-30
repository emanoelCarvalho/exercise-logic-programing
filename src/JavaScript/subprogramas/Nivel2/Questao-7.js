// Receber como parâmetro quatro números e retornar quantos números ímpares há entre eles;

// Função para contar quantos números ímpares existem entre quatro números
function numeroImpares(number1, number2, number3, number4) {
    let contador = 0;

    if (number1 % 2 !== 0) {
        contador++;
    }
    if (number2 % 2 !== 0) {
        contador++;
    }
    if (number3 % 2 !== 0) {
        contador++;
    }
    if (number4 % 2 !== 0) {
        contador++;
    }

    return contador;
}

// Chamada da função com valores de exemplo
console.log(numeroImpares(1, 1, 0, 1));
