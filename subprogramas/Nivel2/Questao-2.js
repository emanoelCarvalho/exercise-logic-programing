// Receber três números como parâmetros e imprimi-los em ordem crescente;

function ordemCrescente(number1, number2, number3) {
    const maior = number1 > number2 && number1 > number3 ? number1 :
        number2 > number1 && number2 > number3 ? number2 :
            number3;

    const menor = number1 < number2 && number1 < number3 ? number1 :
        number2 < number1 && number2 < number3 ? number2 :
            number3;

    const meio = number1 > menor && number1 < maior ? number1 :
        number2 > menor && number2 < maior ? number2 :
            number3;

    console.log(menor, meio, maior);
}

ordemCrescente(1, 1, 1);