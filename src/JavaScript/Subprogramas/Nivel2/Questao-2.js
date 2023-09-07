// Receber três números como parâmetros e imprimi-los em ordem crescente;

// Função para imprimir três números em ordem crescente
function ordemCrescente(number1, number2, number3) {
    // Encontra o maior número entre os três
    const maior = number1 > number2 && number1 > number3 ? number1 :
        number2 > number1 && number2 > number3 ? number2 :
            number3;

    // Encontra o menor número entre os três
    const menor = number1 < number2 && number1 < number3 ? number1 :
        number2 < number1 && number2 < number3 ? number2 :
            number3;

    // Encontra o número do meio entre os três
    const meio = number1 > menor && number1 < maior ? number1 :
        number2 > menor && number2 < maior ? number2 :
            number3;

    // Imprime os números em ordem crescente
    console.log(menor, meio, maior);
}

// Chamada da função com valores de exemplo
ordemCrescente(1, 1, 1);
