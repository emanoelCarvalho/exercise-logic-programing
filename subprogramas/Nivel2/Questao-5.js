// Receber como parâmetro três números e retornar o menor valor entre eles;

function menorEntre(number1, number2, number3) {
    const menor = number1 <= number2 && number1 <= number3 ? number1 :
    number2 <= number1 && number2 <= number3 ? number2 : 
    number3;

    return menor;
}

console.log(menorEntre(-10,-22,3));