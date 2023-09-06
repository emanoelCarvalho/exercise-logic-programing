// Receber como parâmetro quatro números e retornar o valor da soma dos seus quadrados;

function  somaQuadrados(numero1, numero2, numero3, numero4) {
    let soma;
    soma = ((numero1 ** 2) + (numero2 ** 2) + (numero3 ** 2) + (numero4 ** 2));
    return soma;
}

console.log(somaQuadrados(1,2,3,0));