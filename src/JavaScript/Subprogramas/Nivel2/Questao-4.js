// Receber como parâmetro três números e retornar o maior valor entre eles;

function maiorEntre(number1, number2, number3) {
    const maior = number1 >= number2 && number1 >= number3 ? number1 :
    number2 >= number1 && number2 >= number3 ? number2 : 
    number3;

    return maior;
}

console.log(maiorEntre(10,22,3));