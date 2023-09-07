// Receber como parâmetro quatro números e retornar quantos números pares há entre eles;

// Função para contar quantos números pares existem entre quatro números
function numeroPares(number1, number2, number3, number4) {
    let contador = 0;

    if (number1 % 2 === 0) {
        contador++;
    }
    if (number2 % 2 === 0) {
        contador++;
    }
    if (number3 % 2 === 0) {
        contador++;
    }
    if (number4 % 2 === 0) {
        contador++;
    }

    return contador;
}

// Chamada da função com valores de exemplo
console.log(numeroPares(1, 1, 0, 1));
