// Receber como parâmetro quatro números e retornar o maior entre eles.

function maiorEntreQuatroNumeros(numero1, numero2, numero3, numero4) {
    let maior;

    if (numero1 >= numero2 && numero1 >= numero3 && numero1 >= numero4) {
        maior = numero1;
    }
    if (numero2 >= numero1 && numero2 >= numero3 && numero2 >= numero4) {
        maior = numero2;
    }
    if (numero3 >= numero1 && numero3 >= numero2 && numero3 >= numero4) {
        maior = numero3;
    }
    if (numero4 >= numero1 && numero4 >= numero2 && numero4 >= numero3) {
        maior = numero4;
    }
    return maior;
}

console.log(maiorEntreQuatroNumeros(1, 1, 1, 1));